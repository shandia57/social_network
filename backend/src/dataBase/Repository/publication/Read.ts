import "reflect-metadata";
import { Publication } from "../../entity/Publication";

export async function getPublications(results, connection) {
    let publicationRepository = connection.getRepository(Publication);
    const publications = await publicationRepository.find({ relations: ["user", "comments", "likes"], order: { published: "DESC" } });
    if (publications) {
        results.send(JSON.stringify(publications));
        return true;
    } else {
        return false
    }
}

export async function getPublicationById(results, connection, id) {
    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(id, { relations: ["user", "comments", "likes"] })
    if (publication) {
        results.send(JSON.stringify(publication));
        return true;
    } else {
        return false
    }



}

