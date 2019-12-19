const mongoose = require("mongoose")
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
mongoose.Promise = global.Promise

mongoose.connection.on("error", error => {
    console.log(error.message)
})

app.listen(process.env.PORT, () => {
    console.log(`Task app is running on PORT: ${process.env.PORT}`)
})
