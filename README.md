# pocket-to-kindle
Send your Pocket articles to your Kindle.

## Requirements
- [Calibre](https://calibre-ebook.com/download).
- Consumer key and access token from the [Pocket API](https://getpocket.com/developer/docs/authentication).

## How it works
Pocket articles tagged with a specified tag are retrieved through the Pocket API. An HTML file gets created for each article ([node-readability](https://github.com/luin/readability) is used to only get the article itself from the url). A table of content HTML file is created. [Calibre's ebook-convert](https://manual.calibre-ebook.com/generated/en/ebook-convert.html) is used to convert this file to EPUB, which gets then sent to your Kindle email address through Nodemailer.

## Usage
Set your keys, email addresses, and Pocket tag in `config.js`. 
Note: if you are using Gmail, ```emailConfig.password``` is not your Google account password, but an application specific password that you can create after you have setup 2-Factor authentication.

Send the articles to your Kindle using the default options.
```
node src/index.js
```

You can also specify a title for the EPUB file and a different tag of the articles to retrieve from Pocket (overriding the ```kindle``` tag in `config.js`).
```
node src/index.js --tag=myOtherTag --title="My Title"
```