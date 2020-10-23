import fs from 'fs';
import { SEND } from '../response';

export const uploadFilesToFolder = (req, res, next) => {
  // const { fileName, base64 } = req.body;
  req.body.forEach((file, i) => {
    fs.writeFile(
      `${__dirname}/uploadedFiles/${file.fileName}`,
      file.base64.split(',')[1],
      'base64',
      err => {
        if (!err) {
          if (i === req.body.length - 1) {
            SEND(res, false, {
              message: 'Uploaded Successfully'
            });
          }
        }
      }
    );
  });
};

export const downloadFileFromFolder = (req, res, next) => {
  const { fileName } = req.params;
  fs.readFile(
    `${__dirname}/uploadedFiles/${fileName}`,
    // { encoding: 'base64' },
    (err, file) => {
      if (err) {
        console.log('err', err);
      } else {
        // SEND(res, false, { folderContent: file });
        res.sendFile(`${__dirname}/uploadedFiles/${fileName}`);
      }
    }
  );
};

export const getFolderContent = (req, res, next) => {
  const folderPath = __dirname + '\\uploadedFiles';
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log('err', err);
    } else {
      SEND(res, false, { folderContent: files });
    }
  });
};
