exports.imageFormat = (error, req, res, next) => {
    res.status(400).send({ error: error.message })
}
