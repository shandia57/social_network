
import "reflect-metadata";
import { User } from "../../entity/User";


export async function deleteUser(request, connection, id) {
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);

    // saving a photo also save the metadata
    return await userRepository.remove(user)
        .then(() => {
            console.log("User deleted with the ID : ", id);
            return true;
        })
        .catch((error) => {
            return false;
        })
}
