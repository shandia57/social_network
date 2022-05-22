import "reflect-metadata";
import { Like } from "../../entity/Like";

export async function getLikes(results, connection, id) {

    // On récupère LES likes par rapport à la publication en question
    // On récupère tous ID des utilisateurs qui ont liké la publication
    // Il s'agit d'une QueryBuilder inspiré de la documentation Officiel de TYPEORM
    const like = await connection.getRepository(Like)
        .createQueryBuilder("like")
        .innerJoinAndSelect("like.user", "user")
        .where("like.publication = :id", { id })
        .getMany()


    if (like) {
        results.send(JSON.stringify(like));
        return true;
    } else {
        return false
    }

}


