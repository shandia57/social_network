const Joi = require('@hapi/joi');

// HapJoi va créer une schéma de validation, en vérifiant que les données reçues sont conformes aux critères définis dans le schéma
// On utilise la méthode validate() de la classe Joi (qui est utilisée dans le fichier valideInput.ts)
// Exeple: pour l'email on va vérifier s'il est bien de type string, et s'il est bien dans un format valide aux emails et qu'il ne peut pas être nul

// Créer un schema de la validation pour l'email et du MDP lors de la connexion
export const userAuthSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).required()
});


export const userCreateSchema = Joi.object({
    firstname: Joi.string().trim().min(2).required(),
    lastname: Joi.string().trim().min(2).required(),
    birthday: Joi.date().required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).required()
});

export const publicationSchema = Joi.object({
    userId: Joi.number().required(),
    title: Joi.string().trim().min(1).required(),
    text: Joi.string().trim().min(1).required()
});
