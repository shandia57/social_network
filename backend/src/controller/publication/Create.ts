import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/publication/Create";

exports.create = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.InsertPublication(request.body, connection, null)
                .then(result => {
                    result ? results.sendStatus(200) : results.sendStatus(400);
                })
        })

}

exports.createWithImage = (request: any, results: any) => {
    const profile = `${request.protocol}://${request.get('host')}/images/publications/${request.file.filename}`

    // Je récupère l'image grâce au middleware, puis je reconstitue la nouvelle URL de l'image
    //  De cette façon
    // http://localhost:8000/images/profile/nom_de_l_image.jpg
    // L'image sera lue par une URL

    connection
        .then(async connection => {
            repository.InsertPublication(request.body, connection, profile)
                .then(result => {
                    result ? results.sendStatus(200) : results.sendStatus(400);
                })
        })
}
