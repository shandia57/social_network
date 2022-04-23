import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    firstname: string;

    @Column({ length: 100 })
    lastname: string;

    @Column({ length: 255 })
    address: string;

    @Column({ type: "date" })
    birthday: Date;

    @Column({ type: "datetime" })
    created_at: Date;

}