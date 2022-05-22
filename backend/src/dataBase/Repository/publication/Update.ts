import "reflect-metadata";
import { User } from "../../entity/User";
import { Publication } from "../../entity/Publication";

export async function updatePublication(request, connection) {
    // On récupère la publication à modifier
    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(request.params.id);

    // On modifie la publication
    publication.title = request.body.title;
    publication.text = request.body.text;

    // On enregistre la publication
    return await publicationRepository.save(publication)
        .then(() => {
            console.log(`[${publication.id}] has been correctly added into publications`);
            return true;
        })
        .catch(error => {
            console.log(error);
            return false;
        })


}

export async function updatePublicationWithImage(request, connection, image) {

    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(request.params.id);

    publication.title = request.body.title;
    publication.text = request.body.text;
    publication.image = image;

    return await publicationRepository.save(publication)
        .then(() => {
            console.log(`[${publication.id}] has been correctly added into publications`);
            return true;
        })
        .catch(error => {
            console.log(error);
            return false;
        })


}