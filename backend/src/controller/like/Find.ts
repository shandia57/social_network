import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/like/Read";




exports.findLikeById = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.getLikes(results, connection, request.params.id)
                .then(response => {
                    if (!response) results.sendStatus(404);
                })

        })

}