import "reflect-metadata";
import { connection } from './../index';

import DATA_USERS from "./data/users";


import UserInterface from "../interface/UserInterface";


import { User } from "../entity/User";

import * as library from "./../library/library";


export function loadUsers() {
    DATA_USERS.forEach((userData: UserInterface) => {
        connection
            .then(async connection => {
                const user = new User();
                user.id = userData.id;
                user.firstname = userData.firstname;
                user.lastname = userData.lastname;
                user.address = userData.address;
                user.birthday = new Date(userData.birthday);
                user.created_at = new Date();

                let userRepository = connection.getRepository(User);
                await userRepository.save(user);

                console.log(`[${user.lastname.toUpperCase()} ${user.firstname}] has been correctly added into users`);
            })

            .catch(error => console.log(error));
    })
}

