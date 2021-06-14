import { getSentimentAnalysisData } from './sentimentAnalysis';

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const textURI = '&of=json&txt=' + encodeURI(formText)
    // getting key from the server
    const key = await getKeyData()
    // getting sentiment Analysis data
    const sentimentAnalysisData = await Client.getSentimentAnalysisData(`https://api.meaningcloud.com/sentiment-2.1?key=${key}${textURI}&model=general&lang=en`)
    // showing in view
    document.getElementById('agreement').innerHTML = `<strong>Form Results:</strong><div>Agreement: ${sentimentAnalysisData['agreement']}</div>`;
    document.getElementById('confidence').innerHTML = `<div>Confidence: ${sentimentAnalysisData['confidence']}</div>`;
    document.getElementById('irony').innerHTML = `<div>Irony: ${sentimentAnalysisData['irony']}</div>`;
    document.getElementById('score').innerHTML = `<div>Score Tag: ${sentimentAnalysisData['score_tag']}</div>`;
}


const getKeyData = async () => {
    const gotKey = await fetch('http://localhost:8081/needkey');
    try {
        const key = await gotKey.text()
        return key
    } catch (error) {
        console.log("Error while getting key:", error)
    }
}

export { getSentimentAnalysisData }
export { handleSubmit, getKeyData }
