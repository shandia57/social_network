import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/publication/Update";


exports.update = (request: any, results: any) => {
    connection.then(async connection => {
        repository.updatePublication(request, connection)
            .then(result => {
                result ? results.sendStatus(200) : results.sendStatus(400)
            })
    })

}

exports.updateWithImage = (request: any, results: any) => {

    const image = `${request.protocol}://${request.get('host')}/images/publications/${request.file.filename}`;

    connection.then(async connection => {
        repository.updatePublicationWithImage(request, connection, image)
            .then(result => {
                result ? results.send(JSON.stringify({ image: image })) : results.sendStatus(400)
            })
    })
}
