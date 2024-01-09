async function createShortUrl(longUrl){
    const apikey = "89687bdb8d85440ab7ff0daa35bab4ff";
    const apiUrl = `https://api.rebrandly.com/v1/links/new?apikey=${apikey}&destination=${encodeURIComponent(longUrl)}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.shortUrl;
    } catch (error) {
        throw new Error('There was an error with the request:', error);
    }
}

export default createShortUrl;