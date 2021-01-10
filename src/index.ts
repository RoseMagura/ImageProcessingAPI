import { process_image } from "./handle_sharp";
import express = require("express");
import { Request, Response } from "express";
import fs = require("fs");

export const app = express();

// Set up front page with some instructions
app.get("/", (req: Request, res: Response): void => {
  res.send("Post image name and size through curl or Postman");
});

// Handle posting
app.post("/", (req: Request, res: Response): void => {
  const url_params: any = req.query;
  const path = `./src/views/images/${url_params.name}.jpg`;
  const processed = `./src/views/processed_images/${url_params.name}${url_params.width}x${url_params.height}.jpg`;
  // Check if image already processed
  if (fs.existsSync(processed)) {
    res.send("File already processed. Check output folder.");
  } else {
    // If hasn't been processed yet, do now
    if (fs.existsSync(path)) {
      process_image(
        url_params.name,
        url_params.width,
        url_params.height
      ).then((value: any) => {
        res.send(
          `Created image: ${value.format} with height of ${value.height} and width of ${value.width}`
        );
      });
    } else {
      // If no image matches, return error message
      res.send("File not found. Please double-check spelling.");
    }
  }
});

// Handle other possible errors
const handleError = (errorCode: number, errorMsg: string): void => {
  app.use((err, res) => {
    console.log("Couldn't access", err.url);
    res.status(errorCode).send(errorMsg);
  });
};

handleError(404, "Page Not Found");
handleError(403, "Method Not Allowed");
handleError(500, "Server Issue");

export default app;
