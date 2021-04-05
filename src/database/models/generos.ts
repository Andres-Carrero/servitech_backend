import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    Column, 
    CreatedAt, 
    UpdatedAt 
} from "sequelize-typescript";

@Table({
    tableName: 'Generos',
})
export class GenerosDB extends Model{

    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    genero: string

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

}

/*
    id: number
    title: string
    createdAt: Date
    updatedAt: Date

*/