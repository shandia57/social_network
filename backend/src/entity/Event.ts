import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Folder } from "./Folder";

@Entity({ name: "events" })
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Folder, folder => folder.event_, { onDelete: "CASCADE" })
    folder_: Folder;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "datetime" })
    created_at: Date;

    @Column()
    time: number;
}