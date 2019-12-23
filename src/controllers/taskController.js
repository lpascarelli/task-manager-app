const { Task, allowedUpdate } = require("../models/Task")
const utils = require("../helpers/utils")

exports.create = async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.all = async (req, res) => {
    try {
        // const tasks = await Task.find({ owner: req.user._id })
        const match = {}
        const sort = {}

        if (req.query.completed) {
            match.completed = req.query.completed === "true"
        }
        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(":")
            sort[parts[0]] = parts[1] === "desc" ? -1 : 1
        }
        await req.user
            .populate({
                path: "tasks",
                match,
                options: {
                    limit: parseInt(req.query.limit),
                    skip: parseInt(req.query.skip),
                    sort
                }
            })
            .execPopulate()

        res.send(req.user.tasks)
    } catch (error) {
        res.status(500).send()
    }
}

exports.get = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id
        })

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
    const isValid = utils.isValidUpdate(allowedUpdate, updates)

    if (!isValid) {
        return res.status(400).send({ error: "Invalid Updates!" })
    }

    try {
        const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id
        })
        if (!task) {
            return res.status(404).send()
        }

        updates.forEach(update => (task[update] = req.body[update]))
        await task.save()

        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
}

exports.delete = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id
        })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
}
