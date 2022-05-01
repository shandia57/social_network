import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/auth/Login";
const jwt = require('jsonwebtoken');


exports.login = (request: any, results: any) => {
    connection.then(async connection => {
        repository.loginWithEmail(request, connection, results)
            .then(response => {
                if (response !== false) {
                    results.send(JSON.stringify({
                        userId: response.id,
                        // token: jwt.sign(
                        //     { userId: response.id },
                        //     'RANDOM_TOKEN_SECRET',
                        //     { expiresIn: '24h' }
                        // )
                    }));
                } else return results.sendStatus(400);

            })
    })

}
