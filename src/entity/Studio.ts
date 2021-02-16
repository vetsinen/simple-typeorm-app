import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Studio  extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 80})
    shortName: string;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    description: string;
}