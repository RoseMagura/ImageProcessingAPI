import { process_image } from "./js/handle_sharp.js";
import express from "express";
import cors from "cors";
import fs from "fs";

export const app = express();
// Use cors to prevent connection issues

app.use(cors());

// Select an easy-to-use port
const port = 3000;

app.use(express.static("public"));

// start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Set up front page with some instructions
app.get("/", (req, res) => {
  res.send("Post image name and size to backend");
});

// Handle posting
app.post("/", (req, res) => {
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
const handleError = (errorCode, errorMsg) => {
  app.use((err, res) => {
    console.error(errorMsg);
    res.status(errorCode).send(errorMsg);
  });
};

handleError(404, "Page Not Found");
handleError(403, "Method Not Allowed");
handleError(500, "Server Issue");

export default app;
