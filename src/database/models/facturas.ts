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
    Unique,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";
import { ProductosDB } from "./productos";
import { EstadoPagosDB } from "./estado_pagos";
import { UsuarioDB } from "./usuarios";
import { _FacturasDB_ProductosDB } from "./_facturas-productos";

@Table({
    tableName: 'Facturas',
})
export class FacturasDB extends Model<FacturasDB>{
     
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_facturas: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    asunto: string

    @AllowNull(false)
    @Column({type: DataType.DATE})
    fecha: Date

    @AllowNull(false) 
    @ForeignKey(() => UsuarioDB)
    @Column({type: DataType.INTEGER})
    cliente: number

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    unidades: number

    @AllowNull(false)
    @Column({type: DataType.STRING})
    total: string

    @AllowNull(false) 
    @ForeignKey(() => EstadoPagosDB)
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





    @BelongsToMany(() => ProductosDB, () => _FacturasDB_ProductosDB)
    productos: ProductosDB[]


    @BelongsTo(() => UsuarioDB)
    clientes: UsuarioDB[]

    @BelongsTo(() => EstadoPagosDB)
    estado: EstadoPagosDB;
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