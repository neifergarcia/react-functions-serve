# react-functions-server

React and Firebase Functions.

use stylus (opcional): if not use stylus then remove in package.json: build-css, watch-css, watch-css-serve

Also remove the use of watch-css in scrips start (e.g.):

"start": "npm-run-all -p watch-css start-js" -> "start": "npm-run-all -p start-js"

"serve": "npm-run-all -p watch-css-serve create-serve" -> "serve": "npm-run-all -p create-serve"

# Requirements:
- Firebase Tools
- Node 6.11.5

## Notes
- login and add project firebase to our project (firebase use --add).
- use nvm use 6.11.5 after install Node v6.11.5 for use node version 6.11.5

# Scripts
- npm run make-dirs: make dirs that need the project
- npm run install-all: Install all dependences in project app web and functions
- npm run start: run app web without firebase functions server
- npm run build: build app web for mount with firebase functions server
- npm run serve: mount app web built on firebase functions and firebase hosting
- npm run deploy: build app web and deploy project to firebase functions and firebase hosting.