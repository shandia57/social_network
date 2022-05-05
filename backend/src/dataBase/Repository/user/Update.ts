import "reflect-metadata";
import { User } from "../../entity/User";

export async function updateUser(request, connection, id) {

    let bool = true;

    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);
    user.firstname = request.body.firstname;
    user.lastname = request.body.lastname;
    user.address = request.body.address;
    user.birthday = new Date(request.body.birthday);

    await userRepository.save(user)
        .then(() => {
            console.log("Updated user with id: " + user.id);

        })
        .catch(err => {
            bool = false;
        })

    return bool;
}