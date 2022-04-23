import "reflect-metadata";
import { Event } from "../../entity/Event";


export async function insertEvent(request, connection) {
    console.log("Inserting a new event into the database...");
    const event = new Event();
    event.description = request.body.description;
    event.created_at = new Date();
    event.time = request.body.time;
    event.folder_ = request.body.folder_;

    // get repository
    let eventRepository = connection.getRepository(Event);

    // saving a photo also save the metadata
    await eventRepository.save(event);
    console.log("Saved a new event with id: " + event.id);
}