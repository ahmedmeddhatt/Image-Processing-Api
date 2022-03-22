import fs from 'fs-extra';
import express, { Application, Request, Response } from 'express';
import path from 'path';
import resizing from './resizeFunction';
import sharp from 'sharp';

const app: Application = express();

app.get('/',  (req: Request, res: Response) => {
  res.status(200).send('<br> For Using This Api To Resize An Image, Please Copy&Paste This Example With Your Data. <br><br>  Use This Example : <br> <br> [    HTTP://localhost:3000/api?name=your image name&width=number >=1&height=number >=1    ]')
})


app.get('/api', async (req: Request, res: Response) => {
  const name = String(req.query.name);
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const original = path.join(__dirname + `./../images/${name}.jpg`);
  const resizedImagePath = path.join(
    __dirname + `./../resized/${name}-w${width}-h${height}.jpg`
  );
  const metadata = await sharp(original).metadata();
  console.log(metadata);
  if (fs.existsSync(resizedImagePath)) {
    try {
      console.log('exists');
      return res.status(200).sendFile(resizedImagePath);
    } catch (error) {
      res.status(500);
      console.log(error);
      return;
    }
  } else {
    try {
      const resized = await resizing(original, width, height, resizedImagePath);
      return res.status(200).sendFile(resized);
    } catch (error) {
      res.status(500);
      console.log('error in loding image');
      return;
    }
  }
});

app.listen(3000, () => {
  console.log('running ...');
});

export default app;
