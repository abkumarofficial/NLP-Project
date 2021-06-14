var path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const { config } = require('dotenv')

const dotenv = require('dotenv');

// Please Provide Path here, It was not working for me without providing path
dotenv.config({ path: "/home/abhikumar/gitWorkSpace/NLP-Project/.env" });

const applicationKey = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`);

// const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
// let acutalURL = baseURL + applicationKey + '&of=json&txt=' + searchText + '&model=general&lang=en'

const app = express()

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/needkey', function (req, res) {
    res.send(applicationKey)
})
