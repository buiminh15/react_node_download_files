import { Router } from 'express';

import Answers from '../controllers/Answers';
import CloudElements from '../controllers/CloudElements';

const router = new Router();

router.use('/answers', Answers);
router.use('/cloudElements', CloudElements);

export default router;
