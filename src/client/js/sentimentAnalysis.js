const getSentimentAnalysisData = async (url) => {
    const response = await fetch(url);
    try {
        const response = await response.json()
        console.log("getSentimentAnalysisData response", response);
        return response;
    } catch (error) {
        console.log("error while getting sentiment Analysis Data: ", error)
    }
}

export { getSentimentAnalysisData }