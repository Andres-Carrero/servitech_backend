import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, PrimaryKey, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { StatusDB } from "./status";
import { UsersDB } from "./users";

@Table({
    tableName: 'Identifications_type',
})
export class IdentificationDB extends Model<IdentificationDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    type: string

    @HasMany(() => UsersDB)
    users: UsersDB

    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})
    status_id: number;

    @DeletedAt
    @Column({type: DataType.STRING})
    deletedAt: string
    


    

    @BelongsTo(() => StatusDB)
    StatusDB: StatusDB;
}