import { 
    Table, 
    Model, 
    AllowNull,
    DataType, 
    DeletedAt, 
    Unique, Column,  
    BelongsToMany, 
    ForeignKey, 
    BelongsTo,
    HasMany
 } from "sequelize-typescript";
import { BillsDB } from "./bills";
import { CategoryDB } from "./category";
import { IdentificationDB } from "./identification";
import { ImagesDB } from "./images";
import { RolesDB } from "./roles";
import { StatusDB } from "./status";
import { StatusPaymentDB } from "./statusPayment";
import { UsersDB } from "./users";
import { VendorsDB } from "./vendors";
import { _BillsDB_ProductsDB } from "./_bills-products";

@Table({
    tableName: 'Products',
})
export class productsDB extends Model<productsDB>{

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    name: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    description: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    price: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    amountAvailable: string

    @AllowNull(false) 
    @ForeignKey(() => VendorsDB)
    @Column({type: DataType.INTEGER})
    vendor_id: number

    @AllowNull(false) 
    @ForeignKey(() => CategoryDB)
    @Column({type: DataType.INTEGER})
    category_id: number

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date

    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})
    status_id: number;


    @HasMany(() => ImagesDB)
    images: ImagesDB

    @BelongsTo(() => StatusDB)
    status: StatusDB;
    
    @BelongsTo(() => CategoryDB)
    category: CategoryDB;

    @BelongsTo(() => VendorsDB)
    vendor: VendorsDB;

    @BelongsToMany(() => BillsDB, () => _BillsDB_ProductsDB)
    bills: BillsDB[]
}