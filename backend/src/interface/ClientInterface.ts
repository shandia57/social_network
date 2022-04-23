import FolderInterface from "./FolderInterface";

interface ClientInterface {
    id: number,
    firstname: string,
    lastname: string,
    address: string,
    birthday: string,
    created_at: string;
    folder_: FolderInterface[];
}

export default ClientInterface;