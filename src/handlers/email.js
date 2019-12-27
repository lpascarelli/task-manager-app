const sgMail = require("@sendgrid/mail")

const welcome = (email, name) => {
    sgMail.send({
        to: email,
        from: "luca.pascarelli9292@gmail.com",
        subject: "Thanks for joining us!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const cancellation = (email, name) => {
    sgMail.send({
        to: email,
        from: "luca.pascarelli9292@gmail.com",
        subject: "Sorry to see you go!",
        text: `Goodbye ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = { welcome, cancellation }
