import "reflect-metadata";
import { User } from "../../entity/User";
const bcrypt = require('bcrypt');

export async function loginWithEmail(request, connection, results) {
    let userRepository = connection.getRepository(User);
    return userRepository.findOne({ email: request.body.email }, { relations: ["login"] })
        .then(user => {
            return bcrypt.compare(request.body.password, user.login.password)
                .then(valid => {
                    if (valid) return user;
                    else return false;
                })
        }).catch(err => {
            return false
        })




}