
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
    BelongsTo,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";
import { ProductosDB } from "./productos";
import { EstadoDB } from "./estado";


@Table({
    tableName: 'Proveedores',
})
export class ProveedoresDB extends Model<ProveedoresDB>{

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_proveedor: string

    @AllowNull(false)
    @Column({type: DataType.STRING(10000)})
    img: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    nombre_empresa: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    direccion: string

    /*@AllowNull(false)
    @Column({type: DataType.STRING})
    NIF_CIF: String*/

    @AllowNull(false)
    @Column({type: DataType.STRING(5000)})
    descripcion: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    frecuencia: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    contrato: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    web: string

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    numero_contacto: number

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    email: string

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    numero_telefono: number

    @AllowNull(false)
    @Column({type: DataType.STRING})
    fax: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    iva: string

    @AllowNull(false) 
    @ForeignKey(() => EstadoDB)
    @Column({type: DataType.INTEGER})   
    estado_id: number

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    @DeletedAt
    @Column({type: DataType.DATE})
    eliminado: Date




    

    @BelongsTo(() => EstadoDB)
    estado: EstadoDB;

    @HasMany(() => ProductosDB)
    productos: ProductosDB
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