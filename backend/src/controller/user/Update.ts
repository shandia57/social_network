import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/user/Update";



var fs = require('fs');


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

    connection.then(async connection => {
        repository.updateUserProfile(request, connection, profile)
            .then(result => {
                result ? results.send(JSON.stringify({ profile: profile })) : results.sendStatus(400)
            })
    })


}