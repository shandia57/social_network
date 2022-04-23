import "reflect-metadata";
import { Client } from "../../entity/Client";

export async function insertClient(request, connection) {
    console.log("Inserting a new user into the database...");
    const client = new Client();
    client.firstname = request.body.firstname;
    client.lastname = request.body.lastname;
    client.address = request.body.address;
    client.birthday = new Date(request.body.birthday);
    client.created_at = new Date();

    // get repository
    let clientRepository = connection.getRepository(Client);

    // saving a photo also save the metadata
    await clientRepository.save(client);
    console.log("Saved a new user with id: " + client.id);
}