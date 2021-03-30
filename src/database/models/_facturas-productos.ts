import { 
    Table, 
    Model, 
    DataType, 
    DeletedAt, 
    Column, 
    ForeignKey, 
    CreatedAt, 
    UpdatedAt
} from "sequelize-typescript";
import { FacturasDB } from "./facturas";
import { ProductosDB } from "./productos";

@Table({
    tableName: 'Facturas_Productos',
})
export class _FacturasDB_ProductosDB extends Model<_FacturasDB_ProductosDB>{

    @ForeignKey(() => FacturasDB)
    @Column({type: DataType.INTEGER})
    factura_id: number
  
    @ForeignKey(() => ProductosDB)
    @Column({type: DataType.INTEGER})
    producto_id: number

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    @DeletedAt
    @Column({type: DataType.DATE})
    eliminado: Date
}

/*
    bills_id: number
    products_id: number
    createdAt: Date
    updatedAt: Date
*/