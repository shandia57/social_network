import "reflect-metadata";
import { Event } from "../../entity/Event";

export async function getEvents(results, connection) {
    let eventRepository = connection.getRepository(Event);
    const events = await eventRepository.find({ relations: ["folder_"] });

    results.send(JSON.stringify(events));
}


export async function getEventById(results, connection, id) {
    let eventRepository = connection.getRepository(Event);
    const event = await eventRepository.findOne(id, { relations: ["folder_"] });
    results.send(JSON.stringify(event));
}

export async function getLastEvents(result, connection, limit) {
    let eventRepository = connection.getRepository(Event);
    const event = await eventRepository.find({ relations: ["folder_"] });

    if (event.length < limit) {
        result.send(JSON.stringify(event));
    } else {
        result.send(JSON.stringify(event.slice(event.length - limit, event.length)));
    }
}