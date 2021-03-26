import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    DeletedAt, 
    Column, 
    ForeignKey, 
    BelongsTo, 
    BelongsToMany, 
    Unique
} from "sequelize-typescript";
import { productsDB } from "./products";
import { StatusPaymentDB } from "./statusPayment";
import { UsersDB } from "./users";
import { _BillsDB_ProductsDB } from "./_bills-products";

@Table({
    tableName: 'Bills',
})
export class BillsDB extends Model<BillsDB>{
     
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    affair: string

    @AllowNull(false)
    @Column({type: DataType.DATE})
    date: Date

    @AllowNull(false) 
    @ForeignKey(() => UsersDB)
    @Column({type: DataType.INTEGER})
    client_id: number

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    units: number

    @AllowNull(false)
    @Column({type: DataType.STRING})
    total: string

    @AllowNull(false) 
    @ForeignKey(() => StatusPaymentDB)
    @Column({type: DataType.INTEGER})
    status_id: number;

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date





    @BelongsToMany(() => productsDB, () => _BillsDB_ProductsDB)
    products: productsDB[]


    @BelongsTo(() => UsersDB)
    clients: UsersDB[]

    @BelongsTo(() => StatusPaymentDB)
    StatusDB: StatusPaymentDB;
}

/*
    id: number
    unique_id: string
    affair: string
    date: Date
    units: number
    client_id: number
    status_id: number
    deletedAt: Date
    createdAt: Date
    updatedAt: Date




*/