import { Table, Model, AllowNull, DataType, Column, HasMany } from "sequelize-typescript";
import { CategoryDB } from "./category";
import { productsDB } from "./products";
import { RolesDB } from "./roles";
import { UsersDB } from "./users";
import { VehiclesDB } from "./vehicles";
import { VendorsDB } from "./vendors";

@Table({
    tableName: 'Status',
})
export class StatusDB extends Model<StatusDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @HasMany(() => UsersDB)
    users: UsersDB

    @HasMany(() => productsDB)
    products: productsDB

    @HasMany(() => CategoryDB)
    category: CategoryDB

    @HasMany(() => VendorsDB)
    vendors: VendorsDB

    @HasMany(() => VehiclesDB)
    vehicles: VehiclesDB
}

/*
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
*/