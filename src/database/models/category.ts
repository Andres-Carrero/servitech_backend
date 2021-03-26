import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, PrimaryKey, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { productsDB } from "./products";
import { StatusDB } from "./status";
import { UsersDB } from "./users";

@Table({
    tableName: 'Categories',
})
export class CategoryDB extends Model<CategoryDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    description: string

    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})
    status_id: number;

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date


    @HasMany(() => productsDB)
    products: productsDB

    @BelongsTo(() => StatusDB)
    StatusDB: StatusDB;
}

/*
    id: number
    unique_id: string
    title: string
    description: string
    status_id: number;
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
*/