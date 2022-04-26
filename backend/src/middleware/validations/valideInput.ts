import { userAuthSchema } from './Schemas';

exports.userData = (req, res, next) => {
    const { error, value } = userAuthSchema.validate(req.body);
    if (error) {
        res.status(422).json({ error: "email ou mot de passe invalide" });
    } else {
        next();
    }
};
