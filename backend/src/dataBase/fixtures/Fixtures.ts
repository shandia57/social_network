import "reflect-metadata";
import { connection } from '../../index';

import DATA_USERS from "./data/users";
import UserInterface from "../interface/UserInterface";
import { insertUser } from "../Repository/user/Create";

import { User } from "../entity/User";

export function loadUsers() {
    DATA_USERS.forEach((userData: UserInterface) => {
        connection
            .then(async connection => {
                insertUser(userData, connection);
            })
            .catch(error => console.log(error));
    })
}

