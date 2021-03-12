import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, PrimaryKey, HasMany } from "sequelize-typescript";
import { BillsDB } from "./bills";
import { IdentificationDB } from "./identification";
import { RolesDB } from "./roles";
import { UsersDB } from "./users";

@Table({
    tableName: 'Status',
})
export class StatusDB extends Model<StatusDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string




    @HasMany(() => UsersDB)
    users: UsersDB

    @HasMany(() => BillsDB)
    bills: BillsDB

    @HasMany(() => IdentificationDB)
    identifications: IdentificationDB

    @HasMany(() => RolesDB)
    roles: RolesDB

}