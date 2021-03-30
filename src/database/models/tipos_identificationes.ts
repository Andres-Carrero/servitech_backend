import { 
    Table,
    Model, 
    AllowNull, 
    DataType, 
    Unique, 
    Column, 
    HasMany,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";
import { UsuarioDB } from "./usuarios";

@Table({
    tableName: 'Identificationes',
})
export class IdentificationesDB extends Model<IdentificationesDB>{

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    tipo: string

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date
    
    /*@HasMany(() => UsersDB)
    users: UsersDB*/
}

/*
    id: number
    type: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
*/