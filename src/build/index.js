"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handle_sharp_1 = require("./handle_sharp");
var express = require("express");
var fs = require("fs");
var app = express();
// Set up front page with some instructions
app.get("/", function (req, res) {
    res.send("Post image name and size through curl or Postman");
});
// Handle posting
app.post("/", function (req, res) {
    var path = "./src/views/images/" + req.query.name + ".jpg";
    var processed = "./src/views/processed_images/" + req.query.name + req.query.width + "x" + req.query.height + ".jpg";
    // Check if image already processed
    try {
        if (fs.existsSync(processed)) {
            res.send("File already processed. Check output folder.");
        }
        else {
            // If hasn't been processed yet, do now
            try {
                if (fs.existsSync(path)) {
                    var process_result = handle_sharp_1.process_image(req.query.name, req.query.width, req.query.height);
                    res.send(process_result);
                }
                else {
                    // If no image matches, return error message
                    res.send("File not found. Please double-check spelling.");
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
// Handle other possible errors
var handleError = function (errorCode, errorMsg) {
    app.use(function (err, res) {
        console.log("Couldn't access", err.url);
        res.status(errorCode).send(errorMsg);
    });
};
handleError(404, "Page Not Found");
handleError(403, "Method Not Allowed");
handleError(500, "Server Issue");
exports.default = app;
