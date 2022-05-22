import "reflect-metadata";
import { User } from "../../entity/User";
import { Comment } from "../../entity/Comment";
import { Publication } from "../../entity/Publication";

export async function InsertComment(request, connection) {

    // On récupère l'utilisateur pour pouvoir lié un commentaire à un utilisaateur
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(request.user);

    // On récupère la publication pour pouvoir lié un commentaire à une publication
    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(request.publication);

    // On créer la publication avec les données envoyés
    const comment = new Comment();
    comment.text = request.text;
    comment.published = new Date();
    comment.user = user;
    comment.publication = publication;

    // On se connecte  à la BDD pour envoyer les données
    let commentRepository = connection.getRepository(Comment);
    return await commentRepository.save(comment)
        .then(() => {
            console.log(`[${comment.id}] has been correctly added into comments`);
            return true;
        })
        .catch(error => {
            console.log(error);
            return false;
        })

}