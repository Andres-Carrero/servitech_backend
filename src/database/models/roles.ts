import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    DeletedAt, 
    Unique, 
    Column, 
    HasMany, 
    CreatedAt, 
    UpdatedAt 
} from "sequelize-typescript";
import { UsuarioDB } from "./usuarios";

@Table({
    tableName: 'Roles',
})
export class RolesDB extends Model{
    
    @Unique
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_rol: string

    @AllowNull(false)
    @Column({type: DataType.STRING(30)})
    rol: string

    @AllowNull(false)
    @Column({type: DataType.STRING(5000)})
    descripcion: string

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    @DeletedAt
    @Column({type: DataType.DATE})
    eliminado: Date



    
    @HasMany(() => UsuarioDB)
    usuarios: UsuarioDB  

}

/*
    id: number
    unique_id: string
    title: string
    description: string
    status_id: number;
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
*/