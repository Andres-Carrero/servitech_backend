import { Table, Model, AllowNull, DataType, DeletedAt, Unique, Column, PrimaryKey, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { BillsDB } from "./bills";
import { IdentificationDB } from "./identification";
import { RolesDB } from "./roles";
import { StatusDB } from "./status";

@Table({
    tableName: 'Users',
})
export class UsersDB extends Model<UsersDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    first_name: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    second_name: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    first_surname: string
    
    @AllowNull(false)
    @Column({type: DataType.STRING})
    second_surname: string

    @AllowNull(false) 
    @ForeignKey(() => IdentificationDB)
    @Column({type: DataType.INTEGER})
    type_identification_ID: number;
      
    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    identification: number 

    @AllowNull(false)
    @Column({type: DataType.DATE})
    date_birth: Date

    @AllowNull(false) 
    @ForeignKey(() => RolesDB)
    @Column({type: DataType.INTEGER})
    role_id: number;

    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})
    status_id: number;

    @DeletedAt
    @Column({type: DataType.STRING})
    deletedAt: string





    @HasMany(() => BillsDB)
    bills: BillsDB

    @BelongsTo(() => IdentificationDB)
    type_identification: IdentificationDB;

    @BelongsTo(() => StatusDB)
    Status: StatusDB;

    @BelongsTo(() => RolesDB)
    rol: RolesDB;
}

/*
    unique_id: string
    first_name: string
    second_name: string
    first_surname: string
    second_surname: string
    type_identification_ID: number;
    identification: number 
    date_birth: Date
    status_id: number;



*/