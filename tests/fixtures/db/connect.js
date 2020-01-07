const mongoose = require("mongoose")
require("dotenv").config({ path: ".test.env" })
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
