import "reflect-metadata";
import { User } from "../../entity/User";
import { Like } from "../../entity/Like";
import { Publication } from "../../entity/Publication";

export async function InsertLike(request, connection) {

    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(request.user);

    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(request.publication);

    const like = new Like();
    like.user = user;
    like.publication = publication;

    // get repository
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