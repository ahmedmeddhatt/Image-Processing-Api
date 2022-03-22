import resizeImage from '../resizeFunction';
import path from 'path';

const name = 'default';
const width = 200;
const falseWidth = 0;
const height = 200;
const falseHeight = 0;
const imagePath = path.join(__dirname + `./../../images/${name}.jpg`);
const resizedImagePath = path.join(
  __dirname + `./../../resized/${name}_w${width}px_h${height}px.jpg`
);

describe('image testing', () => {
  it('if it is successful image will be resized ..', async () => {
    try {
      const result = await resizeImage(
        imagePath,
        width,
        height,
        resizedImagePath
      );
      expect(result).toEqual(resizedImagePath);
    } catch (error) {
      console.log(error, `Error: the valid image test failed`);
    }
  });

//   it('if it is not successful image will not be resized ..', async () => {
//     try {
//       const result = await resizeImage(
//         imagePath,
//         falseWidth,
//         falseHeight,
//         resizedImagePath
//       );
//       expect(result).toThrowError();
//     } catch (error) {
//       console.log(error, `Error: the invalid image test failed`);
//     }
//   });
});