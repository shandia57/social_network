import "reflect-metadata";
import { Folder } from "../../entity/Folder";

export async function getFolders(results, connection) {
    let folderRepository = connection.getRepository(Folder);
    const folders = await folderRepository.find({ relations: ["client_", "event_"] });
    results.send(JSON.stringify(folders));
}


export async function getFolderById(results, connection, id) {
    let folderRepository = connection.getRepository(Folder);
    const folder = await folderRepository.findOne(id, { relations: ["client_", "event_"] });
    results.send(JSON.stringify(folder));
}

export async function getLastFolders(result, connection, limit) {
    let folderRepository = connection.getRepository(Folder);
    const folders = await folderRepository.find({ relations: ["client_", "event_"] });

    if (folders.length < limit) {
        result.send(JSON.stringify(folders));
    } else {
        result.send(JSON.stringify(folders.slice(folders.length - limit, folders.length)));
    }
}