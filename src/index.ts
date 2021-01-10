import { process_image } from "./handle_sharp";
import express = require("express");
import fs = require("fs");

const app = express();

// Set up front page with some instructions
app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Post image name and size through curl or Postman");
});

// Handle posting
app.post("/", (req: any, res) => {
    const path = `./views/images/${req.query.name}.jpg`;
    const processed = `./views/processed_images/${req.query.name}${req.query.width}x${req.query.height}.jpg`;
  
    // Check if image already processed
    try {
      if (fs.existsSync(processed)) {
        res.send("File already processed. Check output folder.");
      } else {
        // If hasn't been processed yet, do now
        try {
          if (fs.existsSync(path)) {
            const process_result = process_image(
              req.query.name,
              req.query.width,
              req.query.height
            );
            res.send(process_result);
          } else {
            // If no image matches, return error message
            res.send("File not found. Please double-check spelling.");
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

// Handle other possible errors
const handleError = (errorCode: number, errorMsg: string) => {
    app.use((err, res) => {
      console.log('Couldn\'t access', err.url);
      res.status(errorCode).send(errorMsg);
    });
  };
  
  handleError(404, "Page Not Found");
  handleError(403, "Method Not Allowed");
  handleError(500, "Server Issue");

export default app;
