import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/comment/Read";




exports.findByPublicationId = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.getCommentsByIdPublication(results, connection, request.params.id)
                .then(response => {
                    if (!response) results.sendStatus(404);
                })

        })

}