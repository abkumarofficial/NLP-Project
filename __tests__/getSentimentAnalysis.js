import { getSentimentAnalysisData } from '../src/client/js/sentimentAnalysis';

const dotenv = require('dotenv');
dotenv.config();

describe("Testing the call to API", () => {
    test("Test 'getMeaning' function to make successful API call", () => {
        const textURI = '&of=json&txt=' + encodeURI('This test is to check the ')
        const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}${textURI}&model=general&lang=en`;
        const output = "OK"
        expect(getSentimentAnalysisData(url)).resolves.toContain(output);
    })
});