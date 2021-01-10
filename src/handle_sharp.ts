import sharp = require("sharp");

export const process_image = (name: string, width: string, height: string, test = false): string => {  
  let path = `./views/images/${name}.jpg`;
  let processed = `./views/processed_images/${name}${width}x${height}.jpg`; 
  if (test) { 
    path = `./__tests__/test_images/${name}.jpg`;
    processed = `./__tests__/test_processed_images/${name}${width}x${height}.jpg`;
  }
  try {
    sharp(path).resize(parseInt(width), parseInt(height)).toFile(processed);
  } catch (error) {
    console.log("Issue with processing image", error);
    return "failure";
  }
  return "Successfully processed image. Check views/processed_images";
};