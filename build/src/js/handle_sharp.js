"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.process_image = void 0;
var sharp_1 = __importDefault(require("sharp"));
var process_image = function (name, width, height) {
    var path = "./views/images/" + name + ".jpg";
    var processed = "./views/processed_images/" + name + width + "x" + height + ".jpg";
    try {
        sharp_1.default(path).resize(parseInt(width), parseInt(height)).toFile(processed);
    }
    catch (error) {
        console.log("Issue with processing image", error);
        return "failure";
    }
    return "Successfully processed image. Check views/processed_images";
};
exports.process_image = process_image;
// module.exports = process_image;
