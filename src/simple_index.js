const express = require( "express" );
const sharp = require("sharp");
// const path = require("path");

const app = express();
const port = 8080; // default port to listen

// const dir = path.join(__dirname, 'images');

app.use(express.static('views'));
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send('Hello World!');
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

// sharp('../images/fjord.jpg')
//   .resize(300, 200)
//   .toFile('output.jpg', function(err) {
//     // output.jpg is a 300 pixels wide and 200 pixels high image
//     // containing a scaled and cropped version of input.jpg
//   });

