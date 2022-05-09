import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Publication } from "./Publication"

@Entity({ name: "comments" })

export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    text: string;

    @Column({ type: "date" })
    published: Date;

    @ManyToOne(() => User, user => user.comments, { onDelete: "CASCADE" })
    user: User;

    @ManyToOne(() => Publication, publication => publication.comments, { onDelete: "CASCADE" })
    publication: Publication;

}