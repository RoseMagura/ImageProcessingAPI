import fs from 'fs';
import sharp from 'sharp';

export const process_image = (name, width, height) => {
    const path = `./views/images/${name}.jpg`;
    const processed = `./views/processed_images/${name}${width}x${height}.jpg`;
    try {
        sharp(path)
            .resize(parseInt(width), parseInt(height))
            .toFile(processed);
    } catch (error) {
        console.log('Issue with processing image', error);
        return 'failure';
    }
    return 'Successfully processed image. Check views/processed_images';
}