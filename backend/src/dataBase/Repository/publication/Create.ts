import "reflect-metadata";
import { User } from "../../entity/User";
// import { Comment } from "../../entity/Comment";
import { Publication } from "../../entity/Publication";

export async function InsertPublication(request, connection, image) {

    // On récupère l'utilisateur pour pouvoir lié une publication à un utilisaateur
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(request.userId);

    // On créer la publication avec les données envoyés
    const publication = new Publication();
    publication.title = request.title;
    publication.text = request.text;
    publication.published = request.published ?? new Date();
    publication.image = image ?? null;
    publication.user = user;

    // On se connecte  à la BDD pour envoyer les données
    let publicationRepository = connection.getRepository(Publication);

    return await publicationRepository.save(publication)
        .then(() => {
            console.log(`[${publication.title}] has been correctly added into publications`);
            return true;
        })
        .catch(error => {
            console.log(error);
            return false;
        })


}