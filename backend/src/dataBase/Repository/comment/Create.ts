import "reflect-metadata";
import { User } from "../../entity/User";
import { Comment } from "../../entity/Comment";
import { Publication } from "../../entity/Publication";

export async function InsertComment(request, connection) {

    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(request.user);

    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(request.publication);

    const comment = new Comment();
    comment.text = request.text;
    comment.published = new Date();
    comment.user = user;
    comment.publication = publication;

    // get repository
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