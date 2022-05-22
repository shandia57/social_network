import "reflect-metadata";
import { Comment } from "../../entity/Comment";

export async function getCommentsByIdPublication(results, connection, id) {

    // On récupère LES commentaires par rapport à la publication en question
    let commentRepository = connection.getRepository(Comment);

    // Relation User permet de récupérer l'utilisateur qui a publier le commentaire
    const comments = await commentRepository.find({ where: { publication: id }, relations: ["user"] });
    if (comments) {
        results.send(JSON.stringify(comments));
        return true;
    } else {
        return false
    }
}