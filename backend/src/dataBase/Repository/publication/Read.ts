import "reflect-metadata";
import { Publication } from "../../entity/Publication";

export async function getPublications(results, connection) {
    let publicationRepository = connection.getRepository(Publication);
    const publications = await publicationRepository.find();
    results.send(JSON.stringify(publications));
}

export async function getPublicationById(results, connection, id) {
    let publicationRepository = connection.getRepository(Publication);
    const publication = await publicationRepository.findOne(id);
    results.send(JSON.stringify(publication));
}

