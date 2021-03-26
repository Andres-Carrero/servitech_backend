import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, PrimaryKey, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { BillsDB } from "./bills";
import { productsDB } from "./products";
import { StatusDB } from "./status";
import { UsersDB } from "./users";

@Table({
    tableName: 'Bills_Products',
})
export class _BillsDB_ProductsDB extends Model<_BillsDB_ProductsDB>{

    @ForeignKey(() => BillsDB)
    @Column({type: DataType.INTEGER})
    bills_id: number
  
    @ForeignKey(() => productsDB)
    @Column({type: DataType.INTEGER})
    products_id: number
}

/*
    bills_id: number
    products_id: number
    createdAt: Date
    updatedAt: Date
*/