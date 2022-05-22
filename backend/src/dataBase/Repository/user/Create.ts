import "reflect-metadata";
import { User } from "../../entity/User";
import { Login } from "../../entity/login";
const bcrypt = require('bcrypt');


export async function insertUser(request, connection) {

    // On créer les données à insérer (plus tard dans la table login) afin de lié le moyen de connexion à l'utilisateur
    const login = new Login();

    // On HASH le mots de passe afin de sécurier les données de l'utilisateur
    return await bcrypt.hash(request.password, 10).then(async hash => {

        // On affilie le MDP crypté à cette nouvelle ligne dans la table LOGIN
        login.password = hash;
        login.isAdmin = request.isAdmin ?? 0;
        await connection.manager.save(login);

        // On créer l'utilisateur avec les données envoyés
        const user = new User();
        user.firstname = request.firstname;
        user.lastname = request.lastname;
        user.birthday = new Date(request.birthday);
        user.email = request.email;
        user.profile = "http://localhost:8000/images/default.png";

        // Ici on lie le lOGIN qui vient d'être créée avec l'utilisateur en question
        user.login = login;


        // On inserer l'utilisateur en BDD
        let userRepository = connection.getRepository(User);

        return await userRepository.save(user)
            .then(() => {
                console.log(`[${user.lastname.toUpperCase()} ${user.firstname}] has been correctly added into users`);
                return true
            })
            .catch(error => {
                return false
            });



    });


}