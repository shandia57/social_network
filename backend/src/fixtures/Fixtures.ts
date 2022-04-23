import "reflect-metadata";
import { connection } from './../index';

import DATA_CLIENTS from "./data/clients";
import DATA_EVENTS from './data/events';
import DATA_FOLDERS from './data/folders';

import ClientInterface from "../interface/ClientInterface";
import FolderInterface from "../interface/FolderInterface";

import { Client } from "../entity/Client";
import { Event } from "../entity/Event";
import { Folder } from "../entity/Folder";

import * as library from "./../library/library";


export function loadClients() {
    DATA_CLIENTS.forEach((clientData: ClientInterface) => {
        connection
            .then(async connection => {
                const client = new Client();
                client.id = clientData.id;
                client.firstname = clientData.firstname;
                client.lastname = clientData.lastname;
                client.address = clientData.address;
                client.birthday = new Date(clientData.birthday);
                client.created_at = new Date();

                let clientRepository = connection.getRepository(Client);
                await clientRepository.save(client);

                console.log(`[${client.lastname.toUpperCase()} ${client.firstname}] has been correctly added into clients`);
            })

            .catch(error => console.log(error));
    })
}

export async function loadFolders() {
    DATA_FOLDERS.forEach((folderData: FolderInterface) => {
        connection
            .then(async connection => {

                let clientRepository = connection.getRepository(Client);
                let clients = await clientRepository.find();

                // CREATE NEW FOLDER
                const folder = new Folder();
                folder.id = folderData.id;
                folder.code = folderData.code;
                folder.description = folderData.description;
                folder.date_start = new Date(folderData.date_start);
                folder.state = folderData.state;

                // GET RANDOM CLIENT
                const randomClient1 = library.getRandomInt(clients.length);
                folder.client_ = [clients[randomClient1]];

                // CREATE NEW RANDOM EVENT
                const randomEvent = library.getRandomInt(DATA_EVENTS.length);
                const event = new Event();
                event.description = DATA_EVENTS[randomEvent].description;
                event.created_at = new Date(DATA_EVENTS[randomEvent].created_at);
                event.time = DATA_EVENTS[randomEvent].time;

                // SAVE THE EVENT WITH THE FOLDER
                let eventRepository = connection.getRepository(Event);
                await eventRepository.save(event);

                // SAVE THE FOLDER WITH THE EVENT
                folder.event_ = [event];

                // get repository
                let folderRepository = connection.getRepository(Folder);

                // saving a folder 
                await folderRepository.save(folder);

                console.log(`Folder [${folder.code}] has been correctly added into folders`);
            })

            .catch(error => console.log(error));
    })
}