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
    // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,

    console.log("updatePhoto", request);
}