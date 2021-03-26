import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    DeletedAt,
    Unique, 
    Column, 
    HasMany, 
    ForeignKey, 
    BelongsTo} from "sequelize-typescript";
import { productsDB } from "./products";
import { StatusDB } from "./status";


@Table({
    tableName: 'Vendors',
})
export class VendorsDB extends Model<VendorsDB>{

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING(10000)})
    img: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    nameCompany: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    address: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    NIF_CIF: String

    @AllowNull(false)
    @Column({type: DataType.STRING(5000)})
    description: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    frequency: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    termsAgainst: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    web: string

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    numberContact: number

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    email: string

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    numberPhone: number

    @AllowNull(false)
    @Column({type: DataType.STRING})
    fax: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    iva: string

    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})   
    status_id: number

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date




    

    @BelongsTo(() => StatusDB)
    status: StatusDB;

    @HasMany(() => productsDB)
    products: productsDB
}

/*
    id: number
    title: string
    img: string
    createdAt: Date
    updatedAt: Date
    address: string
    NIF_CIF: String
    description: string
    frequency: string
    termsAgainst: string
    web: string
    numberContact: number
    email: string
    numberPhone: number
    fax: number
    iva: string
    status_id: number
    deletedAt: Date
*/