import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
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

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(() => Publication, publication => publication.comments, { onDelete: "CASCADE" })
    @JoinColumn()
    publication: Publication;

}