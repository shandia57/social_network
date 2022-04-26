import "reflect-metadata";
import { User } from "../../entity/User";

export async function updateUser(request, connection, id) {
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);
    user.firstname = request.body.firstname;
    user.lastname = request.body.lastname;
    user.address = request.body.address;
    user.birthday = new Date(request.body.birthday);

    // saving a photo also save the metadata
    await userRepository.save(user);
    console.log("Updated user with id: " + user.id);
}