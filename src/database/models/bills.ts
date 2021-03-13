import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, PrimaryKey, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { StatusDB } from "./status";
import { UsersDB } from "./users";

@Table({
    tableName: 'Bills',
})
export class BillsDB extends Model<BillsDB>{
     
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @AllowNull(false)
    @Column({type: DataType.DATE})
    date: Date

    @AllowNull(false) 
    @ForeignKey(() => UsersDB)
    @Column({type: DataType.INTEGER})
    client_id: number


    @AllowNull(false) ////relations
    @Column({type: DataType.STRING})
    products: string  



    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})
    status_id: number;

    @DeletedAt
    @Column({type: DataType.STRING})
    deletedAt: string
    


    @BelongsTo(() => UsersDB)
    client: UsersDB;

    @BelongsTo(() => StatusDB)
    StatusDB: StatusDB;
}