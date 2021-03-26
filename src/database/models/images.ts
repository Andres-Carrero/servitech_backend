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


@Table({
    tableName: 'Images',
})
export class ImagesDB extends Model<ImagesDB>{
     
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @AllowNull(false)
    @Column({type: DataType.STRING(10000)})
    content: string

    @AllowNull(false) 
    @ForeignKey(() => productsDB)
    @Column({type: DataType.INTEGER})
    product_id: number

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date


    @BelongsTo(() => productsDB)
    product: productsDB;

}