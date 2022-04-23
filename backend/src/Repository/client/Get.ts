import { connection } from './../../index';
import "reflect-metadata";
import { Client } from "../../entity/Client";

export async function getClients(results, connection) {
    let clientRepository = connection.getRepository(Client);
    const clients = await clientRepository.find({ relations: ["folder_"] });
    results.send(JSON.stringify(clients));
}

export async function getClientById(results, connection, id) {
    let clientRepository = connection.getRepository(Client);
    const client = await clientRepository.findOne(id, { relations: ["folder_"] });
    results.send(JSON.stringify(client));
}

export async function getLastClients(result, connection, limit) {
    let clientRepository = connection.getRepository(Client);
    const clients = await clientRepository.find({ relations: ["folder_"] });
    
    if (clients.length < limit) {
        result.send(JSON.stringify(clients));
    } else {
        result.send(JSON.stringify(clients.slice(clients.length - limit, clients.length)));
    }
}