import { Table, Model, AllowNull, DataType, Column, HasMany, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { CategoriaDB } from "./categorias";
import { ProductosDB } from "./productos";
import { RolesDB } from "./roles";
import { UsuarioDB } from "./usuarios";
import { VehiculosDB } from "./vehiculos";
import { ProveedoresDB } from "./proveedores";

@Table({
    tableName: 'Estado',
})
export class EstadoDB extends Model{

    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    estado: string

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

   /* @HasMany(() => UsersDB)
    users: UsersDB

    @HasMany(() => ProductosDB)
    products: ProductosDB

    @HasMany(() => CategoriaDB)
    category: CategoriaDB

    @HasMany(() => ProveedoresDB)
    vendors: ProveedoresDB

    @HasMany(() => VehiclesDB)
    vehicles: VehiclesDB*/
}

/*
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
*/