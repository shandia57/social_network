import "reflect-metadata";
import { User } from "../../entity/User";
// import { Comment } from "../../entity/Comment";
import { Publication } from "../../entity/Publication";

export async function InsertPublication(request, connection, image) {

    let userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(request.userId);

    const publication = new Publication();
    publication.title = request.title;
    publication.text = request.text;
    publication.published = request.published ?? new Date();
    publication.image = image ?? null;
    publication.user = user;

    // get repository
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