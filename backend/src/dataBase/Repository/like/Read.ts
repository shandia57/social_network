import "reflect-metadata";
import { Like } from "../../entity/Like";

export async function getLikes(results, connection, id) {
    let likeRepository = connection.getRepository(Like);
    // const like = await likeRepository.find({ publication: id }, { relations: ["user"] });
    const like = await connection.getRepository(Like)
        .createQueryBuilder("like") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
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


export async function getLikeById(results, connection, id) {
    let likeRepository = connection.getRepository(Like);
    const like = await likeRepository.findOne({ publication: id }, { relations: ["user"] });
    if (like) {
        results.send(JSON.stringify(like));
        return true;
    } else {
        return false
    }

}

