import { getKeyData } from './getKey';
import { getSentimentAnalysisData } from './sentimentAnalysis';

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const textURI = '&of=json&txt=' + encodeURI(formText)
    // getting key from the server
    const key = await Client.getKey()
    // getting sentiment Analysis data
    const sentimentAnalysisData = await Client.getMeaning(`https://api.meaningcloud.com/sentiment-2.1?key=${key}${textURI}&model=general&lang=en`)
    // showing in view
    document.getElementById('results').innerHTML = sentimentAnalysisData.status.msg;
}


export { getSentimentAnalysisData }
export { getKeyData }
export { handleSubmit }
