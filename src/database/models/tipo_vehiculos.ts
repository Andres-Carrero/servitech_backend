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
    HasMany,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";
import { VehiculosDB } from "./vehiculos";


@Table({
    tableName: 'TipoVehiculos',
})
export class TipoVehiculosDB extends Model<TipoVehiculosDB>{
     
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_tipoVehiculo: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    tipo: string
    
    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    /*@HasMany(() => VehiclesDB)
    vehicles: VehiclesDB*/

}