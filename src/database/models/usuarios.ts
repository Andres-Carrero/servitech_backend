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
export class UsuarioDB extends Model<UsuarioDB>{

    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    codigo_usuario: string

    @AllowNull(false)
    @Column({type: DataType.STRING(10000)})
    imagen: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    primer_nombre: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    secundo_nombre: string

    @AllowNull(false)
    @Column({type: DataType.STRING})
    primer_apellido: string
    
    @AllowNull(false)
    @Column({type: DataType.STRING})
    segundo_nombre: string

    @AllowNull(false) 
    @ForeignKey(() => IdentificationesDB)
    @Column({type: DataType.INTEGER})
    tipoIdentificacion_id: number;
      
    @Unique(true)
    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    numero_identificacion: number

    @Unique(true)
    @IsEmail
    @AllowNull(false)
    @Column({type: DataType.STRING})
    email: string

    @AllowNull(false)
    @Length({min: 8})
    @Column({type: DataType.STRING})
    contraseña: string

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

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    numero_telefono: number

    @AllowNull(false)
    @Column({type: DataType.INTEGER})
    numero_telefono2: number

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