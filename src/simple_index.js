const express = require( "express" );
const sharp = require("sharp");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());

const port = 3000;

app.use(express.static('public'));

// start the Express server
app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }` );
});

app.get('/', (req, res) => {
    // res.render('./views/index');
    res.send('Post image name and size to backend');
})

// Handle posting 
app.post('/', (req, res) => {
    res.send('OK');
    // TODO: Check if image already processed

    //TODO: If no image matches, return error message

    // TODO: Make sharp a separate module
    sharp(`./views/images/${req.body.name}.jpg`)
        .resize(req.body.width, req.body.height)
        .toFile(`./views/processed_images/${req.body.name}${req.body.width}x${req.body.height}.jpg`);
});

//TODO: Handle errors