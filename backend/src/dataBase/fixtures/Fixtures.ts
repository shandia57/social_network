import "reflect-metadata";
import { connection } from '../../index';



import DATA_USERS from "./data/users";
import UserInterface from "../interface/UserInterface";
import { insertUser } from "../Repository/user/Create";

import DATA_PUBLICATIONS from "./data/publications";
import PublicationInterface from "../interface/PublicationInterface";
import { InsertPublication } from "../Repository/publication/Create";

import DATA_COMMENTS from "./data/comments";
import CommentInterface from "../interface/CommentInterface";
import { InsertComment } from "../Repository/comment/Create";

export function loadUsers() {
    DATA_USERS.forEach((userData: UserInterface) => {
        connection
            .then(async connection => {
                insertUser(userData, connection);
            })
            .catch(error => console.log(error));
    })
}

export function loadPublications() {
    DATA_PUBLICATIONS.forEach((publicationData: PublicationInterface) => {
        connection
            .then(async connection => {
                InsertPublication(publicationData, connection, null);
            })
            .catch(error => console.log(error));
    })
}

export function loadComments() {
    DATA_COMMENTS.forEach((commentData: CommentInterface) => {
        connection
            .then(async connection => {
                InsertComment(commentData, connection);
            })
            .catch(error => console.log(error));
    })
}

