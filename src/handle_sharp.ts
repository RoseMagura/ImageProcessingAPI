import sharp = require("sharp");

export const process_image = (
  name: string,
  width: string,
  height: string
): object => {
  const path = `./src/views/images/${name}.jpg`;
  const processed = `./src/views/processed_images/${name}${width}x${height}.jpg`;
  const result = sharp(path)
    .resize(parseInt(width), parseInt(height))
    .toFile(processed)
    .then((value) => {
      return `Created image: ${value.format} with height of ${value.height} and width of ${value.width}`;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return result;
};
