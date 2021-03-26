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
    HasMany
} from "sequelize-typescript";
import { productsDB } from "./products";
import { VehiclesDB } from "./vehicles";


@Table({
    tableName: 'typesVehicles',
})
export class TypeVehicleDB extends Model<TypeVehicleDB>{
     
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    title: string

    @HasMany(() => VehiclesDB)
    vehicles: VehiclesDB

}