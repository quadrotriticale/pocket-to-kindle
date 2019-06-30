const argv = require('yargs').argv;
const getPocketArticles = require('./pocket.js');
const createHtmlFiles = require('./html.js');
const convertToMobi = require('./conversion.js');
const sendMobiToKindle = require('./email.js');


async function main() {

  const tag = argv.tag;
  const title = argv.title;
  
  try {
    const articles = await getPocketArticles(tag);
    await createHtmlFiles(articles);
    await convertToMobi(title);
    sendMobiToKindle();
  } catch (err) {
      console.log(err);
  }

}

main();

