"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process_image = void 0;
var sharp = require("sharp");
var process_image = function (name, width, height, test) {
    if (test === void 0) { test = false; }
    var path = "./views/images/" + name + ".jpg";
    var processed = "./views/processed_images/" + name + width + "x" + height + ".jpg";
    if (test) {
        path = "./__tests__/test_images/" + name + ".jpg";
        processed = "./__tests__/test_processed_images/" + name + width + "x" + height + ".jpg";
    }
    try {
        sharp(path).resize(parseInt(width), parseInt(height)).toFile(processed);
    }
    catch (error) {
        console.log("Issue with processing image", error);
        return "failure";
    }
    return "Successfully processed image. Check views/processed_images";
};
exports.process_image = process_image;
