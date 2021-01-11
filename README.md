# Image Processing API

A simple API that uses Node, Express, and Typescript to resize images.

# Table of Contents

* [Background](#background)
* [Requirements](#requirements)
* [Usage](#usage)

## Background

You may be wondering about the purpose and background of this
application. I completed this project as part of the Udacity 
JavaScript Fullstack Nanodegree to learn more about implementing
Typescript in Node-Express apps. The app itself is an API that
uses [Sharp](https://sharp.pixelplumbing.com/) under the hood 
to quickly resize images so that they can be added to a front-end
web application. For example, this API could help someone creating 
an e-commerce site that requires different sizes of image products.    

## Requirements
To set up this project, you will need:
* Node.js (version 14)
* npm (which is included with Node.js)

To install the necessary requirements, just clone the project from 
GitHub, navigate to the folder, and run `npm install`. They will 
be installed to node_modules, allowing you to get both the 
production and development dependencies.

## Usage
Once you have all the dependencies downloaded, you can easily:
* Run tests
* Run the API in development mode
* Run the production API

To run the Jest-based tests, just use the scripts `npm t` or
`npm jest`. These tests are in the `__tests__` directory.

To run the development mode, just use `npm run start:dev`. This uses
nodemon to run a version of the app that reloads as you make changes.
If you want to experience the final production version, just run
`npm start`. You can also just compile the Typescript with `npm run 
build`.

It's also really easy to update the styling and check for any syntax
problems with Prettier and ESLint. Just run `npm run prettier` to 
check for formatting issues, and `npm run lint` for a more general 
troubleshooting linter. If you make any changes, you can use these
helpful tools to keep the project looking nice.

### How to Add and Use Your Own Images

The folder in `./src/views/images` holds a variety of sample images, 
but you can add your own if you would like. Just add whatever you like,
but keep in mind that the app currently only supports the jpeg format.
    
### How to Process Images

While either the development or production version of the app is 
running, send a curl or [Postman](https://www.postman.com/) post request.
If you aren't familiar with curl requests, I recommend using Postman,
but [this page](https://idratherbewriting.com/learnapidoc/docapis_install_curl.html)
also gives a good explaination. 

The post request and URL params should be in this format:
    `http://localhost:3000/?name=imageName&width=300&height=300`

You don't need any authentication or API keys.
As long as you use the correct image name, the file should be processed and
sent to the folder in `./src/views/processed_images`.

## I hope you enjoy experimenting with the **Image Processing App**!