const nodemailer = require('nodemailer');

const sendEmail = async options => {
    //1) create a transporter
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD,
        },
    });

    //2) define the email options
    const mailOptions = {
        from: 'Miten Shah <miten4720@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html
    }

    //3) actually send the email
    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;