const path = require('path');
const fs = require('fs');

// Moving files

const move = (oldPath, newPath, callback) => {
  fs.rename(oldPath, newPath, function (err) {
      if (err) {
          if (err.code === 'EXDEV') {
              copy();
          } else {
              callback(err);
          }
          return;
      }
      callback();
  });

  const copy = () => {
      const readStream = fs.createReadStream(oldPath);
      const writeStream = fs.createWriteStream(newPath);

      readStream.on('error', callback);
      writeStream.on('error', callback);

      readStream.on('close', () => {
          fs.unlink(oldPath, callback);
      });

      readStream.pipe(writeStream);
  }
}


const fileBuildIndex = 'build/index.html';
const fileFunctionsTemplate = './functions/assets/template.html';
console.log(`moving ${fileBuildIndex} to ${fileFunctionsTemplate} ...`);
move(fileBuildIndex, fileFunctionsTemplate, (err) => {
  if (err) console.log(err)
  else console.log('moved correctly');
});

const fileManifestLocal = './build/asset-manifest.json';
const fileManifestRemote = './functions/assets/manifest.json';
console.log(`moving ${fileManifestLocal} to ${fileManifestRemote} ...`);
move(fileManifestLocal, fileManifestRemote, (err) => {
    if (err) console.log(err)
    else console.log('moved correctly');
  });