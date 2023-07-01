const nodemailer = require('nodemailer');
const { emailConfig } = require('../config.js');

const sendEpubToKindle = async () => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailConfig.email_address,
            pass: emailConfig.password
        }
    });

    const mailOptions = {
        from: emailConfig.email_address,
        to: emailConfig.kindle_address,
        subject: 'Pocket to Kindle',
        text: 'Your Pocket articles',
        attachments: [{  
            filename: 'index.epub',
            path: process.cwd() + '/articles/index.epub'
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }); 

}

module.exports = sendEpubToKindle;