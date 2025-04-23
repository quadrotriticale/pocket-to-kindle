const argv = require('yargs').argv;
const getPocketArticles = require('./pocket.js');
const createHtmlFiles = require('./html.js');
const convertToEpub = require('./conversion.js');
const sendEpubToKindle = require('./email.js');


const main = async () => {

  const { tag, title } = argv;
  
  try {
    const articles = await getPocketArticles(tag);
    await createHtmlFiles(articles);
    await convertToEpub(title);
    await sendEpubToKindle();
    console.log("All done!");
  } catch (err) {
      console.log("Something went wrong. ", err.message);
  }

}

main();

