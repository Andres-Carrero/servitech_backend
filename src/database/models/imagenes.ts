import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    DeletedAt, 
    Column, 
    ForeignKey, 
    BelongsTo,  
    Unique,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";
import { ProductosDB } from "./productos";


@Table({
    tableName: 'Imagenes',
})
export class ImagenesDB extends Model<ImagenesDB>{
     
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_imagen: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    titulo: string

    @AllowNull(false)
    @Column({type: DataType.STRING(90000)})
    contenido: string

    @AllowNull(false) 
    @ForeignKey(() => ProductosDB)
    @Column({type: DataType.INTEGER})
    producto_id: number

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    @DeletedAt
    @Column({type: DataType.DATE})
    eliminado: Date



    @BelongsTo(() => ProductosDB)
    producto: ProductosDB;

}