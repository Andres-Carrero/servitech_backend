import { Table, Model, AllowNull, DataType, Column, HasMany } from "sequelize-typescript";
import { UsersDB } from "./users";

@Table({
    tableName: 'Genders',
})
export class genderDB extends Model<genderDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @HasMany(() => UsersDB)
    users: UsersDB

}

/*
    id: number
    title: string
    createdAt: Date
    updatedAt: Date

*/