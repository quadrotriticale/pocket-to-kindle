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

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch(err) {
        console.error('Failed to send email:', err.message);
        throw err;
    }

}

module.exports = sendEpubToKindle;