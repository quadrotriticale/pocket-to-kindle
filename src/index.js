const argv = require('yargs').argv;
const getPocketArticles = require('./pocket.js');
const createHtmlFiles = require('./html.js');
const convertToEpub = require('./conversion.js');
const sendEpubToKindle = require('./email.js');


const main = async () => {

  const tag = argv.tag;
  const title = argv.title;
  
  try {
    const articles = await getPocketArticles(tag);
    await createHtmlFiles(articles);
    await convertToEpub(title);
    await sendEpubToKindle();
  } catch (err) {
      console.log(err);
  }

}

main();

