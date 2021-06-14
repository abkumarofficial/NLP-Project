const getSentimentAnalysisData = async (url) => {
    const response = await fetch(url);
    try {
        const allData = await response.json()
        return allData;
        console.log(allData);
    } catch (error) {
        console.log("ERROR in API call: ", error)
    }
}

export { getSentimentAnalysisData }