import "reflect-metadata";
import { Event } from "../../entity/Event";


export async function deleteEvent(request, connection, id) {
    let eventRepository = connection.getRepository(Event);
    const event = await eventRepository.findOne(id);

    // saving a photo also save the metadata
    await eventRepository.remove(event);
    console.log("Removed event :  " + id);
}