import "reflect-metadata";
import { User } from "../../entity/User";
const bcrypt = require('bcrypt');

export async function loginWithEmail(request, connection, results) {
    // Permet de se connecter avec la BDD 
    let userRepository = connection.getRepository(User);

    // On cherche l'utilisateur avec son adresse mail, et non avec son ID lors de la connexion.
    // Relation 'Login' permet de lier la table User et Login lors de la recherche. Un peu à l'image du Join en SQL
    return userRepository.findOne({ email: request.body.email }, { relations: ["login"] })

        .then(user => {

            // On vérifie si le mot de passe envoyé correspond bien au MDP précédement crypté
            return bcrypt.compare(request.body.password, user.login.password)
                // Si oui, on retourne l'utilisateur

                .then(valid => {
                    if (valid) return user;
                    else return false;
                })
        }).catch(err => {
            return false
        })




}