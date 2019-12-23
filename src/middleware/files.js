const multer = require("multer")

// path to save locally the images
// const storageImages = multer.diskStorage({
//     destination(req, file, cb) {
//         cb(null, "public/images/")
//     }
// })

exports.images = multer({
    // storage: storageImages,
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return cb(new Error("Please upload an image"))
        }

        cb(undefined, true)
    }
})
