
import "reflect-metadata";
import { Client } from "../../entity/Client";


export async function deleteClient(request, connection, id) {
    let clientRepository = connection.getRepository(Client);
    const client = await clientRepository.findOne(id);

    // saving a photo also save the metadata
    await clientRepository.remove(client);
    console.log("Removed client :  " + id);
}
