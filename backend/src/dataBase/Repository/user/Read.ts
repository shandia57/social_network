import "reflect-metadata";
import { User } from "../../entity/User";

export async function getUsers(results, connection) {
    let userRepository = connection.getRepository(User);
    const users = await userRepository.find();
    if (users) {
        results.send(JSON.stringify(users));
        return true;
    } else {
        return false
    }

}

export async function getUserById(results, connection, id) {
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id, { relations: ["publications", "login"] });
    if (user) {
        results.send(JSON.stringify(user));
        return true;
    } else {
        return false
    }
}

