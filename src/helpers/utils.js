const isValidUpdate = (allowedUpdates, keys) => {
    return keys.every(key => allowedUpdates.includes(key))
}

module.exports = { isValidUpdate }
