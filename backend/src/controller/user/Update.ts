import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/user/Update";

exports.update = (request: any, results: any) => {

    connection.then(async connection => {
        repository.updateUser(request, connection, request.params.id)
            .then(result => {
                result ? results.sendStatus(200) : results.sendStatus(400)
            })
    })

}

exports.updatePhoto = (request: any, results: any) => {


    const profile = `${request.protocol}://${request.get('host')}/images/profile/${request.file.filename}`;
    // Je récupère l'image grâce au middleware, puis je reconstitue la nouvelle URL de l'image
    //  De cette façon
    // http://localhost:8000/images/profile/nom_de_l_image.jpg
    // L'image sera lue par une URL

    connection.then(async connection => {
        repository.updateUserProfile(request, connection, profile)
            .then(result => {
                result ? results.send(JSON.stringify({ profile: profile })) : results.sendStatus(400)
            })
    })


}