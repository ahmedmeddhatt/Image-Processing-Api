import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import resizing from '../../resizeFunction';

const imageRoute = Router();

imageRoute.get('/', async (req: Request, res: Response): Promise<void> => {
  const name = String(req.query.name);
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const original = path.resolve(`./images/${name}.jpg`);
  const resizedImagePath = path.resolve(
    `./resized/${name}-w${width}-h${height}.jpg`
  );
  // relative path Ab


  // ->0 -defined -resource availabe
  if (!name || !width || !height || height <= 0 || width <= 0) {
    res.send('Please enter parameters name & height & width.');
    return;
  }

  if (!fs.existsSync(original))
  {
    res.send('Please enter a valid image.');
    return;
  }

  const metadata = await sharp(original).metadata();
  console.log(metadata);
  if (fs.existsSync(resizedImagePath)) {
    try {
      console.log('exists');
      return res.status(200).sendFile(resizedImagePath);
    } catch (error) {
      res.status(500);
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

export default imageRoute;
