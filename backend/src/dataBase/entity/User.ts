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


    // OneToMany permet de faire la relation entre les deux entités Users avec Comments
    @OneToMany(() => Comment, comment => comment.user)
    @JoinColumn()
    comments: Comment[];

    // OneToMany permet de faire la relation entre les deux entités Users avec Like
    @OneToMany(() => Like, like => like.user)
    @JoinColumn()
    likes: Like[];

    // OneToMany permet de faire la relation entre les deux entités Users avec Publications
    @OneToMany(() => Publication, publication => publication.user)
    @JoinColumn()
    publications: Publication[];

    // OneToOne permet de faire la relation entre les deux entités Users avec Login
    @OneToOne(() => Login)
    @JoinColumn()
    login: Login;


}