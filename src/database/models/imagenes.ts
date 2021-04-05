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
export class ImagenesDB extends Model{
     
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_imagen: string

    @AllowNull(false)
    @Column({type: DataType.STRING(50)})
    titulo: string

    @AllowNull(false)
    @Column({type: DataType.STRING(99999)})
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