"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var handle_sharp_js_1 = require("./js/handle_sharp.js");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var fs_1 = __importDefault(require("fs"));
exports.app = express_1.default();
// Use cors to prevent connection issues
exports.app.use(cors_1.default());
// Select an easy-to-use port
var port = 3000;
exports.app.use(express_1.default.static("public"));
// start the Express server
exports.app.listen(port, function () {
    console.log("Server started at http://localhost:" + port);
});
// Set up front page with some instructions
exports.app.get("/", function (req, res) {
    res.send("Post image name and size to backend");
});
// Handle posting
exports.app.post("/", function (req, res) {
    var path = "./views/images/" + req.query.name + ".jpg";
    var processed = "./views/processed_images/" + req.query.name + req.query.width + "x" + req.query.height + ".jpg";
    // Check if image already processed
    try {
        if (fs_1.default.existsSync(processed)) {
            res.send("File already processed. Check output folder.");
        }
        else {
            // If hasn't been processed yet, do now
            try {
                if (fs_1.default.existsSync(path)) {
                    var process_result = handle_sharp_js_1.process_image(req.query.name, req.query.width, req.query.height);
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
    exports.app.use(function (err, res) {
        console.error(errorMsg);
        res.status(errorCode).send(errorMsg);
    });
};
handleError(404, "Page Not Found");
handleError(403, "Method Not Allowed");
handleError(500, "Server Issue");
exports.default = exports.app;
