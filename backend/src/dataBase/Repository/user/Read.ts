import "reflect-metadata";
import { User } from "../../entity/User";

export async function getUsers(results, connection) {
    let userRepository = connection.getRepository(User);
    const users = await userRepository.find();
    results.send(JSON.stringify(users));
}

export async function getUserById(results, connection, id) {
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);
    results.send(JSON.stringify(user));
}

