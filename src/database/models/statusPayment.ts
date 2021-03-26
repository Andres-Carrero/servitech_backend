import { Table, Model, AllowNull, DataType, Column, HasMany } from "sequelize-typescript";
import { BillsDB } from "./bills";
import { IdentificationDB } from "./identification";
import { productsDB } from "./products";
import { RolesDB } from "./roles";
import { UsersDB } from "./users";

@Table({
    tableName: 'StatusPayments',
})
export class StatusPaymentDB extends Model<StatusPaymentDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @HasMany(() => BillsDB)
    bills: BillsDB

}


/*
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
*/