import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Login } from "./login";
import { Publication } from "./Publication";
import { Comment } from "./Comment"
import { Like } from "./Like"

@Entity({ name: "users" })

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    firstname: string;

    @Column({ length: 100 })
    lastname: string;

    @Column({ type: "date" })
    birthday: Date;

    @Column({ length: "255", unique: true })
    email: string;

    @Column({ type: "text" })
    profile: string;

    @OneToMany(() => Comment, comment => comment.user)
    @JoinColumn()
    comments: Comment[];

    @OneToMany(() => Like, like => like.user)
    @JoinColumn()
    likes: Like[];

    @OneToMany(() => Publication, publication => publication.user)
    @JoinColumn()
    publications: Publication[];

    @OneToOne(() => Login)
    @JoinColumn()
    login: Login;


}