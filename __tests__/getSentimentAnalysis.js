import { getSentimentAnalysisData } from '../src/client/js/sentimentAnalysis';

const dotenv = require('dotenv');
dotenv.config();

describe("Testing the call to external API for Sentiment Analysis", () => {
    test("Test 'getSentimentAnalysisData' function", () => {
        const textURI = '&of=json&txt=' + encodeURI('I have brought peace, freedom, justice, and security to my new empire.')
        const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}${textURI}&model=general&lang=en`;
        const output = "OK"
        expect(getSentimentAnalysisData(url)).resolves.toContain(output);
    })
});