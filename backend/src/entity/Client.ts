import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Folder } from "./Folder";

@Entity({ name: "clients" })
export class Client {
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

    @ManyToMany(() => Folder, folder => folder.client_)
    folder_: Folder[];
}