import FolderInterface from "./FolderInterface";

interface EventInterface {
    id: number,
    description: string,
    created_at: string,
    time: number,
    folder_: FolderInterface;
}

export default EventInterface;