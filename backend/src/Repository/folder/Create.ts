import "reflect-metadata";
import { Folder } from "../../entity/Folder";

export async function insertFolder(request, connection) {
    const folder = new Folder();
    folder.code = request.body.code;
    folder.description = request.body.description;
    folder.date_start = new Date();
    folder.state = false;
    folder.client_ = request.body.client_;

    // get repository
    let folderRepository = connection.getRepository(Folder);

    // saving a photo also save the metadata
    await folderRepository.save(folder);
    console.log("Saved a new folder : " + folder.code);
}