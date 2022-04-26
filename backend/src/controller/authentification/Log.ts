import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/auth/FindUser";


exports.login = (request: any, results: any) => {
    connection.then(async connection => {
        repository.findUserByEmail(request, connection, results);
    })

}
