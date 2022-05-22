import "reflect-metadata";
import { Publication } from "../../entity/Publication";

export async function getPublications(results, connection) {
    // On récupère toutes les publications
    let publicationRepository = connection.getRepository(Publication);
    // On met en relation 'user' , 'comments' et 'likes' pour pouvoir récupérer tous les utilsateurs, commentaires et likes pour chaque publications
    // Order By DESC permet un affichage dans l'odre décroisant par rapport à la date de publication
    const publications = await publicationRepository.find({ relations: ["user", "comments", "likes"], order: { published: "DESC" } });
    if (publications) {
        results.send(JSON.stringify(publications));
        return true;
    } else {
        return false
    }
}

export async function getPublicationById(results, connection, id) {
    // On récupère la publication par rapport à l'id
    let publicationRepository = connection.getRepository(Publication);
    // On met en relation 'user' , 'comments' et 'likes' pour pouvoir récupérer tous les utilsateurs, commentaires et likes pour chaque publications
    const publication = await publicationRepository.findOne(id, { relations: ["user", "comments", "likes"] })
    if (publication) {
        results.send(JSON.stringify(publication));
        return true;
    } else {
        return false
    }



}

