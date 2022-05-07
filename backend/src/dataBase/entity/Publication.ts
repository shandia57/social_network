import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment"
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

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Comment, comment => comment.publication)
    @JoinColumn()
    comments: Comment[];

}