import { multer } from "./index"
import { MIME_TYPES } from "./index";



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'src/images/publications')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split('.')[0].split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + '_' + Date.now() + '.' + extension);
    }
})

module.exports = multer({ storage }).single('image');