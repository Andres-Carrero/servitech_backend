import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    DeletedAt, 
    Unique, 
    Column, 
    ForeignKey, 
    BelongsTo, 
    HasMany, 
    Length,
    IsEmail
} from "sequelize-typescript";

import { BillsDB } from "./bills";
import { genderDB } from "./gender";
import { IdentificationDB } from "./identification";
import { RolesDB } from "./roles";
import { StatusDB } from "./status";
import { VehiclesDB } from "./vehicles";

@Table({
    tableName: 'Users',
})
export class UsersDB extends Model<UsersDB>{

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING(10000)})
    img: string

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
      
    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    identification: number

    @Unique(true)
    @IsEmail
    @AllowNull(false)
    @Column({type: DataType.STRING})
    email: string

    @AllowNull(false)
    @Length({min: 8})
    @Column({type: DataType.STRING})
    password: string

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

    @AllowNull(false) 
    @ForeignKey(() => genderDB)
    @Column({type: DataType.INTEGER})
    gender_id: number;

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    phoneNumber: number

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    alternatePhoneNumber: number

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date





    @HasMany(() => BillsDB)
    bills: BillsDB[]

    @HasMany(() => VehiclesDB)
    vehicles: VehiclesDB[]

    @BelongsTo(() => genderDB)
    gender: genderDB;

    @BelongsTo(() => IdentificationDB)
    type_identification: IdentificationDB;

    @BelongsTo(() => StatusDB)
    Status: StatusDB;

    @BelongsTo(() => RolesDB)
    rol: RolesDB;
}

/*
    id: number
    unique_id: string
    first_name: string
    second_name: string
    first_surname: string
    second_surname: string
    type_identification_ID: number;
    identification: number 
    email: string
    password: string
    date_birth: Date
    img: string
    status_id: number;
    deletedAt: Date
    phoneNumber: number
    alternatePhoneNumber: number
    createdAt: Date
    updatedAt: Date




*/