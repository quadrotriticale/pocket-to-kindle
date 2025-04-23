const axios = require('axios');
const { pocketConfig } = require('../config.js');

const url = 'https://getpocket.com/v3/get';


async function getPocketArticles(customTag) {

    try {
        if (customTag) pocketConfig.tag = customTag;
        const response = await axios.post(url, pocketConfig);
        
        const articlesObject = response.data.list;
        const articles = Object.values(articlesObject);
        const links = articles.map(article => {
            return {
                id: article.resolved_id,
                url: article.resolved_url,
                title: article.resolved_title
            }
        });
        
        console.log('Fetched Pocket articles...');
        return links;
    } catch(err) {
        console.log("Failed to fetch Pocket articles, ", err.message);
        throw err;
    }

}


module.exports = getPocketArticles;
