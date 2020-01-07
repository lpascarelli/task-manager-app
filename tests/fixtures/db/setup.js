const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const { User } = require("../../../src/models/User")
const { Task } = require("../../../src/models/Task")
require("dotenv").config({ path: ".test.env" })

const userOneId = mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "Mike",
    email: "userTest123@gmail.com",
    password: "MyPass777!",
    tokens: [
        {
            token: jwt.sign({ _id: userOneId }, process.env.SECRET_KEY)
        }
    ]
}

const userTwoId = mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: "Luca",
    email: "userTestTwo123@gmail.com",
    password: "MyPassTwo777!",
    tokens: [
        {
            token: jwt.sign({ _id: userTwoId }, process.env.SECRET_KEY)
        }
    ]
}

const taskOne = {
    _id: mongoose.Types.ObjectId(),
    description: "Fake decisitions for testing",
    completed: false,
    owner: userOneId
}

const taskTwo = {
    _id: mongoose.Types.ObjectId(),
    description: "Second fake decisitions for testing",
    completed: true,
    owner: userOneId
}

const taskThree = {
    _id: mongoose.Types.ObjectId(),
    description: "Third fake decisitions",
    completed: true,
    owner: userTwoId
}

const setupData = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    setupData
}
