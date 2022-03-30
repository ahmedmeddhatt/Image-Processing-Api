import fs from 'fs-extra';
import express, { Application, Request, Response } from 'express';
import path from 'path';
import resizing from './resizeFunction';
import sharp from 'sharp';
import routes from './routes';

const app: Application = express();

app.use(routes)

app.get('/', (req: Request, res: Response): void => {
  res
    .status(200)
    .send(
      '<br> For Using This Api To Resize An Image, Please Copy&Paste This Example With Your Data. <br><br>  Use This Example : <br> <br> [    HTTP://localhost:3000/api?name=your_image_name&width=number>=1&height=number>=1    ]'
    );
    
});



app.listen(3000, () => {
  console.log('running ...');
});

export default app;


/*

Unable to review error messages.

  Since I could not review image processing, I could not tell if you have provided error messages.
  Although, as tip, I would provide you common error messages scenarios.
  ✔ Missing filename, height or width.
  ✔ Invalid input for filename e.g. fjord123.
  ✔ Invalid input for height or width e.g. height=a, height=0 or height= .
  Check for query parameters like filename, height and width before sending image for processing.
  If parameters are missing or incorrect, send an error message to the user.
:x: Functions do not have typed parameters or return type.



*/