import express from 'express';
import multer from 'multer';
import { submitNews } from '../controllers/newsController.js';
import { fetchAcceptedNews } from '../controllers/newsController.js';
import { fetchNewsById } from '../controllers/newsController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/submit-news', upload.single('image'), submitNews);
router.get('/get-news', fetchAcceptedNews);
router.get('/get-news/:id', fetchNewsById);

export default router;