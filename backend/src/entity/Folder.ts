import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Client } from "./Client";
import { Event } from "./Event";

@Entity({ name: "folders" })
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: true })
    code: string;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "boolean" })
    state: boolean;

    @Column({ type: "datetime" })
    date_start: Date;

    @Column({ type: "datetime", nullable: true })
    date_end: Date;

    @OneToMany(() => Event, event => event.folder_)
    event_: Event[];

    @ManyToMany(() => Client, client => client.folder_)
    @JoinTable({ name: "folders_clients" })
    client_: Client[];

}