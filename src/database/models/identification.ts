import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, HasMany, } from "sequelize-typescript";
import { UsersDB } from "./users";

@Table({
    tableName: 'Identifications',
})
export class IdentificationDB extends Model<IdentificationDB>{

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    type: string

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date
    
    @HasMany(() => UsersDB)
    users: UsersDB
}

/*
    id: number
    type: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
*/