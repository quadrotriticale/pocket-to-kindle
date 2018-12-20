const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const { sendgridConfig } = require('../config.js');

sgMail.setApiKey(sendgridConfig.api_key);

const file = fs.readFileSync('./articles/index.mobi');
const base64File = new Buffer(file).toString('base64');

const message = {
  from: sendgridConfig.from_address,
  to: sendgridConfig.kindle_address,
  subject: 'Pocket to Kindle',
  text: 'Your Pocket articles',
  attachments: [
    {
      content: base64File,
      filename: 'index.mobi'
    }
  ]
};

async function sendMobiToKindle() {

    await sgMail.send(message);
    console.log('Email sent to your Kindle device');
    
}


module.exports = sendMobiToKindle;
