
import "reflect-metadata";
import { Publication } from "../../entity/Publication";


export async function deletePublication(request, connection, id) {
    // On récupère la publication à supprimer
    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(id);

    // On supprimer le publication
    return await publicationRepository.remove(publication)
        .then(() => {
            console.log("Publication deleted with the ID : ", id);
            return true;
        })
        .catch((error) => {
            return false;
        })
}
