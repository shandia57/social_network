import { userAuthSchema, userCreateSchema, publicationSchema } from './Schemas';

// Fonctions qui vérifies les données selon le schéma
// S'il n'est pas valide on retourne une erreur
// Sinon, on passe à la suite
exports.userDataConnection = (req, res, next) => {
    const { error, value } = userAuthSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: "email ou mot de passe invalide" });
    } else {
        next();
    }
};

exports.userData = (req, res, next) => {
    const { error, value } = userCreateSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: "Les données ne sont pas valides" });
    } else {
        next();
    }
};

exports.publicationData = (req, res, next) => {
    const { error, value } = publicationSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: "Les données ne sont pas valides" });
    } else {
        next();
    }
};

