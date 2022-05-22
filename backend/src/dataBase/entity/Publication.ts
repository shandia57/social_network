import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment"
import { Like } from "./Like";
@Entity({ name: "publications" })

export class Publication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: "text" })
    text: string;

    @Column({ type: "date" })
    published: Date;

    @Column({ nullable: true })
    image: string;

    // ManyToOne permet de faire la relation entre les deux entités Publications avec Users
    // Cascade peremet que dès lors que nous supprimons un utilisateur, nous supprimons égalements toutes ses publications AUTOMATIQUEMENT :)
    @ManyToOne(() => User, user => user.publications, { onDelete: "CASCADE" })
    user: User;

    // OneToMany permet de faire la relation entre les deux entités Publications avec Comments
    @OneToMany(() => Comment, comment => comment.publication)
    @JoinColumn()
    comments: Comment[];

    // OneToMany permet de faire la relation entre les deux entités Publications avec Likes
    @OneToMany(() => Like, like => like.publication)
    @JoinColumn()
    likes: Like[];

}