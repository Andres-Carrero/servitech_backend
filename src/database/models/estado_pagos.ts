import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    Column, 
    CreatedAt, 
    UpdatedAt 
} from "sequelize-typescript";
import { FacturasDB } from "./facturas";


@Table({
    tableName: 'EstadoPagos',
})
export class EstadoPagosDB extends Model<EstadoPagosDB>{

    @AllowNull(false)
    @Column({type: DataType.STRING})
    estado: string

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date



   /* @HasMany(() => FacturasDB)
    bills: FacturasDB*/

}


/*
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
*/