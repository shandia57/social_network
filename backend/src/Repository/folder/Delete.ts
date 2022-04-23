import "reflect-metadata";
import { Folder } from "../../entity/Folder";


export async function deleteFolder(request, connection, id) {
    let folderRepository = connection.getRepository(Folder);
    const folder = await folderRepository.findOne(id);

    // saving a photo also save the metadata
    await folderRepository.remove(folder);
    console.log("Removed folder :  " + folder?.code);
}
