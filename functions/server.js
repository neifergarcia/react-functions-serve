// Express requirements
import { https } from 'firebase-functions';
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import url from 'url';
import Loadable from 'react-loadable';
import cookieParser from 'cookie-parser';

// Our loader - this basically acts as the entry point for each page load
import loader from './src/serverLoader';

// Create our express app
const app = express();

// Compress, parse, logs, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

// Redirect with slash '/' at the end
app.use((req, res, next) => {
  // set logged
  res.logged = false
  
  const nUrl = url.parse(req.url)
  const lengthUrl = nUrl.pathname.length
  const hasSlash = nUrl.pathname.charAt(lengthUrl - 1) === '/'
  if (hasSlash){
    return next()
  }
  return res.redirect(nUrl.pathname + '/')
})

app.use((req, res) => loader(req, res))

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().catch((err) => {
  console.log(err)
})

// Handle the bugs somehow
app.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
    case 'EACCES':
      console.error('requires elevated privileges');
      process.exit(1);
      break
    case 'EADDRINUSE':
      console.error('port is already in use');
      process.exit(1);
      break
    default:
      throw error
  }
})

export default https.onRequest(app)