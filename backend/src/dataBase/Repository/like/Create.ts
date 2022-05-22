import "reflect-metadata";
import { User } from "../../entity/User";
import { Like } from "../../entity/Like";
import { Publication } from "../../entity/Publication";

export async function InsertLike(request, connection) {

    // On récupère l'utilisateur pour pouvoir lié un like à un utilisaateur
    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(request.user);

    // On récupère la publication pour pouvoir lié un like à une publication
    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(request.publication);

    // On créer le like avec les données envoyés
    const like = new Like();
    like.user = user;
    like.publication = publication;

    // On inseère le like en BDD
    let likeRepository = connection.getRepository(Like);
    return await likeRepository.save(like)
        .then(() => {
            console.log(`[${like.id}] has been correctly added into likes`);
            return true;
        })
        .catch(error => {
            console.log(error);
            return false;
        })

}