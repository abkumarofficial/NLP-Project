import { getKeyData } from '../src/client/js/formHandler';

const dotenv = require('dotenv');
// Please change the path here, for me it's not working without giving the path
dotenv.config({ path: "/home/abhikumar/gitWorkSpace/NLP-Project/.env" });

describe("Testing to check the key fetching from Server", () => {
    test("Test 'getKeyData' function to return api key", () => {
        const output = process.env.API_KEY
        expect(getKeyData()).resolves.toBe(output);
    })
});