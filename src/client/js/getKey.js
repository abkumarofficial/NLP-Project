const getKeyData = async () => {
    const response = await fetch('/needkey');
    try {
        const key = await response.text()
        return key
    } catch (error) {
        console.log("Error while getting key:", error)
    }
}

export { getKeyData }