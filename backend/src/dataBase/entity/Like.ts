import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Publication } from "./Publication"

@Entity({ name: "likes" })

export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    // ManyToOne permet de faire la relation entre les deux entités Like avec User
    // Cascade peremet lorsque nous supprimons un utilisateur, nous supprimons égalements tout ses likes AUTOMATIQUEMENT :)
    @ManyToOne(() => User, user => user.likes, { onDelete: "CASCADE" })
    user: User;

    // ManyToOne permet de faire la relation entre les deux entités Publication avec Like
    // Cascade peremet que dès lors que nous supprimons une publication, nous supprimons égalements tout ses likes AUTOMATIQUEMENT :)
    @ManyToOne(() => Publication, publication => publication.likes, { onDelete: "CASCADE" })
    publication: Publication;

}