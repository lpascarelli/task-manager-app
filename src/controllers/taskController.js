const { Task, allowedUpdate } = require("../models/Task")
const { isValidUpdate } = require("../helpers/utils")

exports.create = async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.all = async (req, res) => {
    try {
        const tasks = await Task.find({})

        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }
}

exports.get = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
}

exports.update = async (req, res) => {
    const updates = Object.keys(req.body)
    const isValid = isValidUpdate(allowedUpdate, updates)

    if (!isValid) {
        return res.status(400).send({ error: "Invalid Updates!" })
    }

    try {
        const task = await Task.findById(req.params.id)

        updates.forEach(update => (task[update] = req.body[update]))
        await task.save()

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
}

exports.delete = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
}
