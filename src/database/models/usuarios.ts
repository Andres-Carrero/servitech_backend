import { 
    Table, 
    Model, 
    AllowNull, 
    DataType, 
    DeletedAt, 
    Unique, 
    Column, 
    ForeignKey, 
    BelongsTo, 
    HasMany, 
    Length,
    IsEmail,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript";

import { FacturasDB } from "./facturas";
import { GenerosDB } from "./generos";
import { IdentificationesDB } from "./tipos_identificationes";
import { RolesDB } from "./roles";
import { EstadoDB } from "./estado";
import { VehiculosDB } from "./vehiculos";

@Table({
    tableName: 'Usuarios',
})
export class UsuarioDB extends Model{

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_usuario: string

    @Column({type: DataType.STRING(99999)})
    imagen: string

    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    primer_nombre: string

    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    segundo_nombre: string

    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    primer_apellido: string
    
    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    segundo_apellido: string

    @AllowNull(false) 
    @ForeignKey(() => IdentificationesDB)
    @Column({type: DataType.INTEGER})
    tipoIdentificacion_id: number;
      
    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    numero_identificacion: string

    @Unique(true)
    @IsEmail
    @AllowNull(false)
    @Column({type: DataType.STRING(50)})
    email: string

    @AllowNull(false)

    @Column({type: DataType.STRING(80)})
    contrasena: string

    @AllowNull(false)
    @Column({type: DataType.DATE})
    fecha_nacimiento: Date

    @AllowNull(false) 
    @ForeignKey(() => RolesDB)
    @Column({type: DataType.INTEGER})
    role_id: number;

    @AllowNull(false) 
    @ForeignKey(() => EstadoDB)
    @Column({type: DataType.INTEGER})
    estado_id: number;

    @AllowNull(false) 
    @ForeignKey(() => GenerosDB)
    @Column({type: DataType.INTEGER})
    genero_id: number;

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    numero_telefono: string

    @AllowNull(false)
    @Column({type: DataType.STRING(20)})
    numero_telefono2: string

    @CreatedAt
    @Column({type: DataType.DATE})
    creado: Date

    @UpdatedAt
    @Column({type: DataType.DATE})
    actualizado: Date

    @DeletedAt
    @Column({type: DataType.DATE})
    eliminado: Date





    @HasMany(() => FacturasDB)
    facturas: FacturasDB[]

    @HasMany(() => VehiculosDB)
    vehiculos: VehiculosDB[]

    @BelongsTo(() => GenerosDB)
    genero: GenerosDB;

    @BelongsTo(() => IdentificationesDB)
    tipo_identificacion: IdentificationesDB;

    @BelongsTo(() => EstadoDB)
    estado: EstadoDB;

    @BelongsTo(() => RolesDB)
    rol: RolesDB;
}

/*
    id: number
    unique_id: string
    first_name: string
    second_name: string
    first_surname: string
    second_surname: string
    type_identification_ID: number;
    identification: number 
    email: string
    password: string
    date_birth: Date
    img: string
    status_id: number;
    deletedAt: Date
    phoneNumber: number
    alternatePhoneNumber: number
    createdAt: Date
    updatedAt: Date




*/