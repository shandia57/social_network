
import "reflect-metadata";
import { Publication } from "../../entity/Publication";


export async function deletePublication(request, connection, id) {
    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(id);

    // saving a photo also save the metadata
    return await publicationRepository.remove(publication)
        .then(() => {
            console.log("Publication deleted with the ID : ", id);
            return true;
        })
        .catch((error) => {
            return false;
        })
}
