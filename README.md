# pocket-to-kindle
Send your Pocket articles to your Kindle.

## Requirements
- [Calibre](https://calibre-ebook.com/download).
- Consumer key and access token from the [Pocket API](https://getpocket.com/developer/docs/authentication).
- API key from [SendGrid](https://sendgrid.com/).

## How it works
Pocket articles tagged with a specified tag are retrieved through the Pocket API. An HTML file gets created for each article ([node-readability](https://github.com/luin/readability) is used to only get the article itself from the url). A table of content HTML file is created. [Calibre's ebook-convert](https://manual.calibre-ebook.com/generated/en/ebook-convert.html) is used to convert this toc file to MOBI, which gets then sent to your Kindle email address through SendGrid.

## Usage
Set your keys, email addresses, and Pocket tag in `config.js`.

Send the articles to your Kindle using the default options.
```
node src/index.js
```

You can also specify a title for the MOBI file and a different tag of the articles to retrieve from Pocket (overriding the tag in `config.js`).
```
node src/index.js --tag=myOtherTag --title="My Title"
```