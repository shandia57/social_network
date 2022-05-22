import { multer } from "./index"
import { MIME_TYPES } from "./index";

// permet de stocker les images et de les renommer pour les utilisateur uniquement
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