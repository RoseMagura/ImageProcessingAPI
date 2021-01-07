const express = require( "express" );
const sharp = require("sharp");
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { fileURLToPath } = require("url");

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
    const path = `./views/images/${req.body.name}.jpg`;
    const processed = `./views/processed_images/${req.body.name}${req.body.width}x${req.body.height}.jpg`;
    // Check if image already processed
    try {
        if(fs.existsSync(processed)) {
            res.send('File already processed. Check output folder.')
        } else {
            // If hasn't been processed yet, do now
            try{ 
                if(fs.existsSync(path)) {
                    res.send('Processing image...');

                    // TODO: Make sharp a separate module
                    sharp(path)
                        .resize(req.body.width, req.body.height)
                        .toFile(processed);
                } else{
                    // If no image matches, return error message
                    res.send('File not found. Please double-check spelling.');
                }
            } catch (error) {
                console.log('error', error);
            }
        }
    } catch (error) {
        console.log(error);
    }
});

//TODO: Handle errors