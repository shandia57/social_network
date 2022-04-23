import "reflect-metadata";
import { Event } from "../../entity/Event";


export async function updateEvent(request, connection, id) {
    let eventRepository = connection.getRepository(Event);

    const event = await eventRepository.findOne(id);

    event.description = request.body.description;
    event.time = request.body.time;

    // saving a photo also save the metadata
    await eventRepository.save(event);
    console.log("Updated event : " + event.id);
}