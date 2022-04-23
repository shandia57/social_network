import "reflect-metadata";
import { Client } from "../../entity/Client";

export async function updateClient(request, connection, id) {
    let clientRepository = connection.getRepository(Client);
    const client = await clientRepository.findOne(id);
    client.firstname = request.body.firstname;
    client.lastname = request.body.lastname;
    client.address = request.body.address;
    client.birthday = new Date(request.body.birthday);

    // saving a photo also save the metadata
    await clientRepository.save(client);
    console.log("Updated user with id: " + client.id);
}