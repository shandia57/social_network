
import "reflect-metadata";
import { User } from "../../entity/User";


export async function deleteUser(request, connection, id) {
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);

    // saving a photo also save the metadata
    await userRepository.remove(user);
    console.log("Removed user :  " + id);
}
