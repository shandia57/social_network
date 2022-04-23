import "reflect-metadata";
import { Folder } from "../../entity/Folder";

export async function updateFolder(request, connection, id) {
    let folderRepository = connection.getRepository(Folder);

    const folder = await folderRepository.findOne(id);

    folder.code = request.body.code;
    folder.description = request.body.description;
    folder.state = request.body.state;
    folder.date_end = request.body.date_end;
    folder.client_ = request.body.client_;

    // saving a photo also save the metadata
    await folderRepository.save(folder);
    console.log("Updated folder : " + folder.code);
}