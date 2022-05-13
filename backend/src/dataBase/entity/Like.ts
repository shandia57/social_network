import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Publication } from "./Publication"

@Entity({ name: "likes" })

export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.likes, { onDelete: "CASCADE" })
    user: User;

    @ManyToOne(() => Publication, publication => publication.likes, { onDelete: "CASCADE" })
    publication: Publication;

}