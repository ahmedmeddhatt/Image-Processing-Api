import sharp from 'sharp';

async function resizing(
  original: string,
  width: number,
  height: number,
  resizedImagePath: string
): Promise<string> {
  try {
    await sharp(original)
      .resize({
        width: width,
        height: height,
      })
      .toFile(resizedImagePath);
    return resizedImagePath;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export default resizing;
