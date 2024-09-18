import express from 'express';
import multer from 'multer';
import { createAudioTranscription } from '../controllers/chat.controller';

const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
      if (file.mimetype !== 'audio/mpeg') {
        console.log('not supported');
        return
      }
      cb(null, true);
    },
  });
  
const router = express.Router();

router.post('/chat/whisper', upload.single('audio'), createAudioTranscription);

export default router;