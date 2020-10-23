import { Router } from 'express';
import {
  uploadFilesToFolder,
  downloadFileFromFolder,
  getFolderContent
} from './controller';

const router = new Router();

router.post('/uploadFilesToFolder', uploadFilesToFolder);
router.get('/downloadFileFromFolder/:fileName', downloadFileFromFolder);
router.get('/getFolderContent', getFolderContent);

export default router;
