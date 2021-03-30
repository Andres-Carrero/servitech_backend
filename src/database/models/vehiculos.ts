import { Table, Model, AllowNull, DataType, Column, HasMany, Unique, ForeignKey, BelongsTo, DeletedAt, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { EstadoDB } from "./estado";
import { TipoVehiculosDB } from "./tipo_vehiculos";
import { UsuarioDB } from "./usuarios";


@Table({
    tableName: 'Vehiculos',
})
export class VehiculosDB extends Model<VehiculosDB>{

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_vehiculo: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    alias: string

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    placa: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    marca: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    modelo: string  

    @AllowNull(false)
    @Column({type: DataType.STRING})
    color:string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    km_actual: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    velocidad_max: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    velocidad_min: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    tipo_motor:string

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
    @ForeignKey(() => TipoVehiculosDB)
    @Column({type: DataType.INTEGER})   
    tipoVehiculo_id: number

    @AllowNull(false) 
    @ForeignKey(() => EstadoDB)
    @Column({type: DataType.INTEGER})
    estado_id: number;

    @AllowNull(false) 
    @ForeignKey(() => UsuarioDB)
    @Column({type: DataType.INTEGER})   
    usuario_id: number




    @BelongsTo(() => TipoVehiculosDB)
    tipo_vehiculo: TipoVehiculosDB;
    
    @BelongsTo(() => EstadoDB)
    estado: EstadoDB;

    @BelongsTo(() => UsuarioDB)
    usuario: UsuarioDB;
}