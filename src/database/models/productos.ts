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
    HasMany,
    CreatedAt,
    UpdatedAt
 } from "sequelize-typescript";
import { FacturasDB } from "./facturas";
import { CategoriaDB } from "./categorias";
import { ImagenesDB } from "./imagenes";
import { ProveedoresDB } from "./proveedores";
import { EstadoDB } from "./estado";
import { _FacturasDB_ProductosDB } from "./_facturas-productos";

@Table({
    tableName: 'Productos',
})
export class ProductosDB extends Model{

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_prod: string

    @AllowNull(false)
    @Column({type: DataType.STRING(50)})
    titulo: string

    @AllowNull(false)
    @Column({type: DataType.STRING(5000)})
    descripcion: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    precio: string

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    cantidad_disp: number

    @AllowNull(false) 
    @ForeignKey(() => ProveedoresDB)
    @Column({type: DataType.INTEGER})
    proveedor_id: number

    @AllowNull(false) 
    @ForeignKey(() => CategoriaDB)
    @Column({type: DataType.INTEGER})
    categoria_id: number

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    @DeletedAt
    @Column({type: DataType.DATE})
    eliminado: Date

    @AllowNull(false) 
    @ForeignKey(() => EstadoDB)
    @Column({type: DataType.INTEGER})
    estado_id: number;






    
    @HasMany(() => ImagenesDB)
    imagenes: ImagenesDB

    @BelongsTo(() => EstadoDB)
    estado: EstadoDB;
    
    @BelongsTo(() => CategoriaDB)
    categoria: CategoriaDB;

    @BelongsTo(() => ProveedoresDB)
    proveedor: ProveedoresDB;

    @BelongsToMany(() => FacturasDB, () => _FacturasDB_ProductosDB)
    facturas: FacturasDB[]
}