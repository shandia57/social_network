import "reflect-metadata";
import { User } from "../../entity/User";
import { Login } from "../../entity/login";
const bcrypt = require('bcrypt');


export async function insertUser(request, connection) {

    const login = new Login();
    bcrypt.hash(request.password, 10).then(async hash => {
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

        // saving a photo also save the metadata
        await userRepository.save(user);
        // console.log("Saved a new user with id: " + user.id);
        console.log(`[${user.lastname.toUpperCase()} ${user.firstname}] has been correctly added into users`);
    });




}