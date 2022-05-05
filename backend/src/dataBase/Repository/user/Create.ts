import "reflect-metadata";
import { User } from "../../entity/User";
import { Login } from "../../entity/login";
const bcrypt = require('bcrypt');


export async function insertUser(request, connection) {

    var bool = true;
    const login = new Login();

    await bcrypt.hash(request.password, 10).then(async hash => {

        login.password = hash;
        login.isAdmin = 0;
        await connection.manager.save(login);

        const user = new User();
        user.firstname = request.firstname;
        user.lastname = request.lastname;
        user.birthday = new Date(request.birthday);
        user.email = request.email;
        user.login = login;


        // get repository
        let userRepository = connection.getRepository(User);

        return await userRepository.save(user)
            .then(() => {
                console.log(`[${user.lastname.toUpperCase()} ${user.firstname}] has been correctly added into users`);

            })
            .catch(error => {
                // console.log(error);
                bool = false;
            });



    });

    return bool;

}