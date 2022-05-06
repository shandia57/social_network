const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};


// var upload = multer({ dest: 'images/' });
// var type = upload.single('photo');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'src/images/profile')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split('.')[0].split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, req.params.id + '_' + name + '_' + Date.now() + '.' + extension);
    }
})

module.exports = multer({ storage }).single('image');