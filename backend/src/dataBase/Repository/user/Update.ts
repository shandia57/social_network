import "reflect-metadata";
import { User } from "../../entity/User";

export async function updateUser(request, connection, id) {

    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);


    user.firstname = request.body.firstname;
    user.lastname = request.body.lastname;
    user.email = request.body.email;
    user.birthday = new Date(request.body.birthday);

    return await userRepository.save(user)
        .then(() => {
            console.log("Updated user with id: " + user.id);
            return true;
        })
        .catch(err => {
            console.log("error : ", err)
            return false
        })

}


export async function updateUserProfile(request, connection, profile) {
    let bool = true;

    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(request.params.id);
    user.profile = profile;

    console.log("profile: " + user.profile);

    return await userRepository.save(user)
        .then(() => {
            console.log("Updated user with id: " + user.id);
            return true;
        })
        .catch(err => {
            console.log("error : ", err)
            return false

        })

}