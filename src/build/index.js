"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var handle_sharp_1 = require("./handle_sharp");
var express = require("express");
var fs = require("fs");
exports.app = express();
// Set up front page with some instructions
exports.app.get("/", function (req, res) {
    res.send("Post image name and size through curl or Postman");
});
// Handle posting
exports.app.post("/", function (req, res) {
    var url_params = req.query;
    var path = "./src/views/images/" + url_params.name + ".jpg";
    var processed = "./src/views/processed_images/" + url_params.name + url_params.width + "x" + url_params.height + ".jpg";
    // Check if image already processed
    if (fs.existsSync(processed)) {
        res.send("File already processed. Check output folder.");
    }
    else {
        // If hasn't been processed yet, do now
        if (fs.existsSync(path)) {
            handle_sharp_1.process_image(url_params.name, url_params.width, url_params.height).then(function (value) {
                res.send("Created image: " + value.format + " with height of " + value.height + " and width of " + value.width);
            });
        }
        else {
            // If no image matches, return error message
            res.send("File not found. Please double-check spelling.");
        }
    }
});
// Handle other possible errors
var handleError = function (errorCode, errorMsg) {
    exports.app.use(function (err, res) {
        console.log("Couldn't access", err.url);
        res.status(errorCode).send(errorMsg);
    });
};
handleError(404, "Page Not Found");
handleError(403, "Method Not Allowed");
handleError(500, "Server Issue");
exports.default = exports.app;
