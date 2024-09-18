// Import necessary modules from your application
import fs from 'fs';
import { Request, Response } from 'express';
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: 'sk-proj-AxMJLhuWbKqkyaPSeJftT3BlbkFJcFoflz7nJuXRuE6yzefT'});

export async function createAudioTranscription(req: Request, res: Response) {
  const filePath = (req as any).file.path;

  try {
    const response = await openai.audio.transcriptions.create({
      file: fs.createReadStream('uploads/test.mp3'),
      model: "whisper-1",
      response_format: "text",
    });
    //fs.unlinkSync(filePath); // Delete the file after processing
    console.log(response);
    res.json({ transcription: response });
  } catch (error) {
    //fs.unlinkSync(filePath);
    res.status(500).send(error);
  }
}
/*app.post('/api/whisper', upload.single('audio'), async (req, res) => {
  const filePath = (req as any).file.path;
  try {
    const response = await openai.audio.transcriptions.create({
      file: fs.createReadStream(filePath),
      model: "whisper-1",
      response_format: "text",
    });
    fs.unlinkSync(filePath); // Delete the file after processing
    console.log(response.text);
    res.json({ transcription: response.text });
  } catch (error) {
    fs.unlinkSync(filePath);
    res.status(500).send(error);
  }
});*/