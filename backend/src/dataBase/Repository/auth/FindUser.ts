import "reflect-metadata";
import { User } from "../../entity/User";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export async function findUserByEmail(request, connection, results) {
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne({ email: request.body.email }, { relations: ["login"] });

    bcrypt.compare(request.body.password, user.login.password)
        .then(valid => {
            if (!valid) {
                return results.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            results.status(200).json({
                // userId: user.id,
                // token: jwt.sign(
                //     { userId: user.id },
                //     'RANDOM_TOKEN_SECRET',
                //     { expiresIn: '24h' }
                // )
            }
            );
        })


}