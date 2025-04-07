import nodeMailer from 'nodemailer';

export const sendEmail = async (options) => {
    try {
        const transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: options.email,
            subject: options.subject,
            text: `${options.message} \n\nEmail of User who Sent The Message: ${options.userEmail}`,
        };

        console.log("Sending email...");
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info.response);

    } catch (error) {
        console.error("Error sending email:", error);
    }
};
