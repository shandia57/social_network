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

    // ManyToOne permet de faire la relation entre les deux entités Comment avec User
    // Cascade peremet dès lorsque nous supprimons un utilisateur, nous supprimons égalements tous ses commentaire AUTOMATIQUEMENT
    @ManyToOne(() => User, user => user.comments, { onDelete: "CASCADE" })
    user: User;

    // ManyToOne permet de faire la relation entre les deux entités Publication avec User
    // Cascade peremet dès lorsque nous supprimons une publication, nous supprimons égalements tous ses commentaire AUTOMATIQUEMENT
    @ManyToOne(() => Publication, publication => publication.comments, { onDelete: "CASCADE" })
    publication: Publication;

}