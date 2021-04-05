import { 
    Table, 
    Model, 
    AllowNull, 
    DataType,
    Unique,
    DeletedAt, 
    Column, 
    HasMany, 
    ForeignKey, 
    BelongsTo, 
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";
import { ProductosDB } from "./productos";
import { EstadoDB } from "./estado";

@Table({
    tableName: 'Categorias',
})
export class CategoriaDB extends Model{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_categoria: string

    @AllowNull(false)
    @Column({type: DataType.STRING(50)})
    titulo: string

    @AllowNull(false)
    @Column({type: DataType.STRING(5000)})
    descripcion: string

    @AllowNull(false) 
    @ForeignKey(() => EstadoDB)
    @Column({type: DataType.INTEGER})
    estado_id: number;

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    @DeletedAt
    @Column({type: DataType.DATE})
    eliminado: Date


    @HasMany(() => ProductosDB)
    productos: ProductosDB

    @BelongsTo(() => EstadoDB)
    estado: EstadoDB;
}

/*
    id: number
    unique_id: string
    title: string
    description: string
    status_id: number;
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
*/