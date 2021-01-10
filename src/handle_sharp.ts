import sharp = require("sharp");

export const process_image = (
  name: string,
  width: string,
  height: string
): any => {
  const path = `./src/views/images/${name}.jpg`;
  const processed = `./src/views/processed_images/${name}${width}x${height}.jpg`;
  const result = sharp(path)
    .resize(parseInt(width), parseInt(height))
    .toFile(processed);
  return result;
};
