const mongoose = require("mongoose")
const sgMail = require("@sendgrid/mail")
require("dotenv").config()

const app = require("./app")

// Connection to our database
mongoose.connect(
    `${process.env.DATABASE_CONNECTION}/${process.env.DATABASE_NAME}`,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    }
)

mongoose.connection.on("error", error => {
    console.log(error.message)
})

// set API key for handling emails
sgMail.setApiKey(process.env.SENDGRID_KEY)

// Start server!!!
app.listen(process.env.PORT, () => {
    console.log(`Task app is running on PORT: ${process.env.PORT}`)
})
