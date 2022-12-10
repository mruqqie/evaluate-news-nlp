const path = require('path')
const express = require('express');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//middleware
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

const apiKey = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="

app.post('/addData', async (req, res) => {
    const resData = await fetch(`${baseUrl}${apiKey}&url=${req.body.formText}&lang=en`);
    try {
        const data = await response.json();
        res.send(data);
    }catch (err) {
        console.log("error", err);
    }
})