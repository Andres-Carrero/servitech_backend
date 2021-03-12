import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, PrimaryKey, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { StatusDB } from "./status";
import { UsersDB } from "./users";

@Table({
    tableName: 'Roles',
})
export class RolesDB extends Model<RolesDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    descripcion: string

    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})
    status_id: number;

    @DeletedAt
    @Column({type: DataType.STRING})
    deletedAt: string



    
    @HasMany(() => UsersDB)
    users: UsersDB  

    @BelongsTo(() => StatusDB)
    StatusDB: StatusDB;


}