import ClientInterface from "./ClientInterface";
import EventInterface from "./EventInterface";

interface FolderInterface {
    id: number,
    code: string,
    description: string,
    date_start: string,
    date_end: string,
    state: boolean;
    client_: ClientInterface[];
    event_: EventInterface[];
}

export default FolderInterface;