import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    password: string;

    @Column()
    isAdmin: number;

}