
import "reflect-metadata";
import { Comment } from "../../entity/Comment";


export async function deleteComment(request, connection, id) {

    // On récupère le commentaire en question
    let commentRepository = connection.getRepository(Comment);
    const comment = await commentRepository.findOne(id);

    // On supprime le commentaire 
    return await commentRepository.remove(comment)
        .then(() => {
            console.log("Comment deleted with the ID : ", id);
            return true;
        })
        .catch((error) => {
            return false;
        })
}
