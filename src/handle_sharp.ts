import sharp = require("sharp");

export const process_image = (
  name: string,
  width: string,
  height: string
): Promise<string> => {
  const path = `./src/views/images/${name}.jpg`;
  const processed = `./src/views/processed_images/${name}${width}x${height}.jpg`;
//   try {
  const result = sharp(path).resize(parseInt(width), parseInt(height))
        .toFile(processed).then(() => {return 'OK'})
        .catch((error) => {
            console.log(error);
            return 'Error'});
  return result;
//   } catch (error) {
//     console.log("Issue with processing image", error);
//     return "failure";
//   }
//   return "Successfully processed image. Check views/processed_images";
};
