import "reflect-metadata";
import { User } from "../../entity/User";

export async function insertUser(request, connection) {
    // console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstname = request.firstname;
    user.lastname = request.lastname;
    user.birthday = new Date(request.birthday);
    user.email = request.email;


    // get repository
    let userRepository = connection.getRepository(User);

    // saving a photo also save the metadata
    await userRepository.save(user);
    // console.log("Saved a new user with id: " + user.id);
    console.log(`[${user.lastname.toUpperCase()} ${user.firstname}] has been correctly added into users`);
}