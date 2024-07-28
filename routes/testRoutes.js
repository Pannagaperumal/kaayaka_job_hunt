import express from 'express';
import { TestPostController } from '../controllers/testController.js';

const router  = express.Router()

router.get('/test-post',TestPostController)
export default router;