import "reflect-metadata";
import { User } from "../../entity/User";

export async function insertUser(request, connection) {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstname = request.body.firstname;
    user.lastname = request.body.lastname;
    user.address = request.body.address;
    user.birthday = new Date(request.body.birthday);
    user.created_at = new Date();

    // get repository
    let userRepository = connection.getRepository(User);

    // saving a photo also save the metadata
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);
}