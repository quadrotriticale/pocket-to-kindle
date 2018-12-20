const getPocketArticles = require('./pocket.js');
const createHtmlFiles = require('./html.js');
const convertToMobi = require('./conversion.js');
const sendMobiToKindle = require('./email.js');

async function main() {

  try {
    const articles = await getPocketArticles();
    await createHtmlFiles(articles);
    await convertToMobi();
    sendMobiToKindle();
  } catch (err) {
      console.log(err);
  }

}

main();

