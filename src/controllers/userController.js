const { User, allowedUpdates } = require("../models/User")
const { isValidUpdate } = require("../helpers/utils")

exports.create = async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.profile = async (req, res) => {
    res.send(req.user)
}

// exports.get = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id)

//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (error) {
//         res.status(500).send()
//     }
// }

exports.update = async (req, res) => {
    const updates = Object.keys(req.body)
    const isValid = isValidUpdate(allowedUpdates, updates)

    if (!isValid) {
        return res.status(400).send({ error: "Invalid Updates!" })
    }

    try {
        updates.forEach(update => (req.user[update] = req.body[update]))
        await req.user.save()

        res.send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.delete = async (req, res) => {
    try {
        await req.user.remove()

        res.send(req.user)
    } catch (error) {
        res.status(500).send()
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        )
        const token = await user.generateAuthToken()

        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(
            token => token.token !== req.token
        )
        await req.user.save()

        res.send()
    } catch (error) {
        res.status(500).send()
    }
}

exports.logoutAll = async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()

        res.send()
    } catch (error) {
        res.status(500).send()
    }
}
