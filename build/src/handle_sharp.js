"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sharp = require("sharp");
// export const process_image = (name: string, width: string, height: string) => {
function process_image(name, width, height) {
    var path = "./views/images/" + name + ".jpg";
    var processed = "./views/processed_images/" + name + width + "x" + height + ".jpg";
    try {
        sharp(path).resize(parseInt(width), parseInt(height)).toFile(processed);
    }
    catch (error) {
        console.log("Issue with processing image", error);
        return "failure";
    }
    return "Successfully processed image. Check views/processed_images";
}
exports.default = process_image;
;
// export default process_image;
