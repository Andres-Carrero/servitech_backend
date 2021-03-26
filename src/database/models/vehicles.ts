import { Table, Model, AllowNull, DataType, Column, HasMany, Unique, ForeignKey, BelongsTo, DeletedAt } from "sequelize-typescript";
import { StatusDB } from "./status";
import { TypeVehicleDB } from "./type_vehicles";
import { UsersDB } from "./users";


@Table({
    tableName: 'Vehicles',
})
export class VehiclesDB extends Model<VehiclesDB>{

    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    unique_id: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    alias: string

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    plate: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    brand: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    model: string  

    @AllowNull(false)
    @Column({type: DataType.STRING})
    displacement:string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    color:string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    current_KM: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    speed_max: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    speed_min: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    typeMotor:string

    @DeletedAt
    @Column({type: DataType.DATE})
    deletedAt: Date

    @AllowNull(false) 
    @ForeignKey(() => TypeVehicleDB)
    @Column({type: DataType.INTEGER})   
    typeVehicle_id: number

    @AllowNull(false) 
    @ForeignKey(() => StatusDB)
    @Column({type: DataType.INTEGER})
    status_id: number;

    @AllowNull(false) 
    @ForeignKey(() => UsersDB)
    @Column({type: DataType.INTEGER})   
    user_id: number




    @BelongsTo(() => TypeVehicleDB)
    type_vehicle: TypeVehicleDB;
    
    @BelongsTo(() => StatusDB)
    status: StatusDB;

    @BelongsTo(() => UsersDB)
    user: UsersDB;
}