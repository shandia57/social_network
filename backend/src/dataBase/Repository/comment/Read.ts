import "reflect-metadata";
import { User } from "../../entity/User";
import { Comment } from "../../entity/Comment";
import { Publication } from "../../entity/Publication";

export async function getCommentsByIdPublication(results, connection, id) {
    let commentRepository = connection.getRepository(Comment);
    const comments = await commentRepository.find({ where: { publication: id }, relations: ["user"] });
    if (comments) {
        results.send(JSON.stringify(comments));
        return true;
    } else {
        return false
    }
}