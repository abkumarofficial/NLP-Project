const getSentimentAnalysisData = async (url) => {
    const response = await fetch(url);
    try {
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("ERROR in fetching data ", error)
    }
}

export { getSentimentAnalysisData }