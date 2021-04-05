import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenerosDB } from 'src/database/models/generos';
import { IdentificationesDB } from 'src/database/models/tipos_identificationes';
import { RolesDB } from 'src/database/models/roles';
import { EstadoDB } from 'src/database/models/estado';
import { EstadoPagosDB } from 'src/database/models/estado_pagos';
import { TipoVehiculosDB } from 'src/database/models/tipo_vehiculos';
import * as moment from 'moment';
import { UsersService } from './users.service';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class GeneralService {
constructor(
    @InjectModel(IdentificationesDB)
        private readonly IdentificationModel: typeof IdentificationesDB,

    @InjectModel(GenerosDB)
        private readonly GenderModel: typeof GenerosDB,

    @InjectModel(RolesDB)
        private readonly RolesModel: typeof RolesDB,

    @InjectModel(TipoVehiculosDB)
        private readonly TypeVehicleModel: typeof TipoVehiculosDB,

    @InjectModel(EstadoPagosDB)
        private readonly StatusPaymentModel: typeof EstadoPagosDB,

    @InjectModel(EstadoDB)
        private readonly EstadoModel: typeof EstadoDB,
    
    private UserServices: UsersService
){}

async CreateAll(){
    const Status1 = {
        id: 1,
        estado: 'Activo',
        creado: moment.utc(new Date)
    }
    const Status2 = {
        id: 2,
        estado: 'Pendiente',
        creado: moment.utc(new Date)
    }
    const Status3 = {
        id: 3,
        estado: 'Inactivo',
        creado: moment.utc(new Date)
    }
    const Status4 = {
        id: 4,
        estado: 'Eliminado',
        creado: moment.utc(new Date)
    }


    const StatusPayment1 = {
        id: 1,
        estado: 'Pagado',
        creado: moment.utc(new Date)
    }
    const StatusPayment2 = {
        id: 2,
        estado: 'Pendiente',
        creado: moment.utc(new Date)
    }
    const StatusPayment3 = {
        id: 3,
        estado: 'Cancelado',
        creado: moment.utc(new Date)
    }


    const Gender1 = {
        id: 1,
        genero: 'Masculino',
        creado: moment.utc(new Date)
    }
    const Gender2 = {
        id: 2,
        genero: 'Femenino',
        creado: moment.utc(new Date)
    }
    const Gender3 = {
        id: 3,
        genero: 'Indefinido',
        creado: moment.utc(new Date)
    }


    const role1 = {
        id: 1,
        codigo_rol: 'ADMIN_ROLE',
        rol: 'Administrador',
        descripcion: 'V1',
        creado: moment.utc(new Date)
    }
    const role2 = {
        id: 2,
        codigo_rol: 'CLIENTE_ROLE',
        rol: 'Cliente',
        descripcion: 'V1',
        creado: moment.utc(new Date)
    }


    const identification1 = {
        id: 1,
        tipo: 'Cedula de Ciudadania',
        creado: moment.utc(new Date)
    }
    const identification2 = {
        id: 2,
        tipo: 'Tarjeta de Identidad',
        creado: moment.utc(new Date)
    }
    const identification3 = {
        id: 3,
        tipo: 'Cedula Extranjera',
        creado: moment.utc(new Date)
    }

    const typeVehicle1 = {
        id: 1,
        codigo_tipoVehiculo: 'TYPE_AUTOMOVIL',
        tipo: 'Automovil',
        creado: moment.utc(new Date)
    }
    const typeVehicle2 = {
        id: 2,
        codigo_tipoVehiculo: 'TYPE_MOTOCICLETA',
        tipo: 'Motocicleta',
        creado: moment.utc(new Date)
    }
    const typeVehicle3 = {
        id: 3,
        codigo_tipoVehiculo: 'TYPE_BICICLETA',
        tipo: 'Bicicleta',
        creado: moment.utc(new Date)
    }
    const typeVehicle4 = {
        id: 4,
        codigo_tipoVehiculo: 'TYPE_FURGON',
        tipo: 'Furgon/Furgoneta',
        creado: moment.utc(new Date)
    }
    const typeVehicle5 = {
        id: 5,
        codigo_tipoVehiculo: 'TYPE_CAMION',
        tipo: 'Camion',
        creado: moment.utc(new Date)
    }

    const userAdmin = {
        id: 9999,
        codigo_usuario: uuidv4(),
        primer_nombre: 'ADMIN',
        segundo_nombre: '.',
        primer_apellido: 'GENERAL',
        segundo_apellido: '.',
        tipoIdentificacion_id: 1,
        numero_identificacion: '0000000000',
        email: 'ADMIN@SERVITECH.COM',
        contrasena: 'admin123',
        fecha_nacimiento: new Date,
        role_id: 1,
        estado_id: 1,
        genero_id: 3,
        numero_telefono: '0000000000',
        numero_telefono2: '0000000000'
    }
    
    const userClient = {
        id: 9998,
        codigo_usuario: uuidv4(),
        primer_nombre: 'CLIENTE',
        segundo_nombre: '.',
        primer_apellido: 'GENERAL',
        segundo_apellido: '.',
        tipoIdentificacion_id: 1,
        numero_identificacion: '0000000001',
        email: 'CLIENT@SERVITECH.COM',
        contrasena: 'CLIENT123',
        fecha_nacimiento: new Date,
        role_id: 2,
        estado_id: 1,
        genero_id: 3,
        numero_telefono: '0000000001',
        numero_telefono2: '0000000001'
    }

    const newStatus1 = await this.CreateStatus(Status1)
    const newStatus2 = await this.CreateStatus(Status2)
    const newStatus3 = await this.CreateStatus(Status3)
    const newStatus4 = await this.CreateStatus(Status4)

    const newStatusPayment1 = await this.CreateStatusPayment(StatusPayment1)
    const newStatusPayment2 = await this.CreateStatusPayment(StatusPayment2)
    const newStatusPayment3 = await this.CreateStatusPayment(StatusPayment3)

    const newGender1 = await this.CreateGender(Gender1)
    const newGender2 = await this.CreateGender(Gender2)
    const newGender3 = await this.CreateGender(Gender3)

    const newRole1 = await this.CreateRoles(role1)
    const newRole2 = await this.CreateRoles(role2)

    const newIdentification1 = await this.CreateIdentification(identification1)
    const newIdentification2 = await this.CreateIdentification(identification2)
    const newIdentification3 = await this.CreateIdentification(identification3)

    const newTypeVehicle1 = await this.CreateTypeVehicle(typeVehicle1)
    const newTypeVehicle2 = await this.CreateTypeVehicle(typeVehicle2)
    const newTypeVehicle3 = await this.CreateTypeVehicle(typeVehicle3)
    const newTypeVehicle4 = await this.CreateTypeVehicle(typeVehicle4)
    const newTypeVehicle5 = await this.CreateTypeVehicle(typeVehicle5)

    const newUserAdmin = await this.UserServices.createUser(userAdmin)
    const newUserClient = await this.UserServices.createUser(userClient)

    return {
        Status: {
            newStatus1,
            newStatus2,
            newStatus3,
            newStatus4
        },
        Status_Payment: {
            newStatusPayment1,
            newStatusPayment2,
            newStatusPayment3
        },
        Genders: {
            newGender1,
            newGender2,
            newGender3
        },
        Roles: {
            newRole1,
            newRole2,
        },
        Identifications: {
            newIdentification1,
            newIdentification2,
            newIdentification3
        },
        Type_Vehicle: {
            newTypeVehicle1,
            newTypeVehicle2,
            newTypeVehicle3,
            newTypeVehicle4,
            newTypeVehicle5
        },
        users: {
            newUserAdmin,
            newUserClient
        }
    }

}



async CreateStatus(body):Promise<any>{
    try {
        const id = body.id
        const estado = body.estado
        const findAll = await this.EstadoModel.findAll({
            attributes: [
                'id',
            ]
        })
            
            for (let i = 0; i < findAll.length; i++) {
            const index = findAll[i];
    
                if(id == index.id){
                    throw new Error(
                        "Ya existe: id = "+id
                    )
                }
    
            }  
            
        const create = await this.EstadoModel.create(body)
    
            if(!create){
                throw new Error(
                    "Fallo al crear: "+estado
                )
            }
            
        return {
            message: estado + ' creado exitosamente',
            status: 200, 
            body: create 
        }
    }
    catch (error) {
        console.log(error);
        return {
            message: 'se presento un ' + error,
            status: 400,
            errors: true
        }
    }
            
}


async CreateStatusPayment(body):Promise<any>{
    try {
        const id = body.id
        const title = body.estado
        const findAll = await this.StatusPaymentModel.findAll({
            attributes: [
                'id',
            ]
        })
            
            for (let i = 0; i < findAll.length; i++) {
            const index = findAll[i];
    
                if(id == index.id){
                    throw new Error(
                        "Ya existe: id = "+id
                    )
                }
    
            }  
            
        const create = await this.StatusPaymentModel.create(body)
    
            if(!create){
                throw new Error(
                    "Fallo al crear: "+title
                )
            }
            
        return {
            message: title + ' creado exitosamente',
            status: 200, 
            body: create 
        }
    }
    catch (error) {
        console.log(error);
        return {
            message: 'se presento un ' + error,
            status: 400,
            errors: true
        }
    }
            
}




async CreateTypeVehicle(body):Promise<any>{
    try {
        const id = body.id
        const unique_id = body.codigo_tipoVehiculo
        const title = body.tipo
        const findAll = await this.TypeVehicleModel.findAll({
            attributes: [
                'id',
                'codigo_tipoVehiculo'
            ]
        })
            
            for (let i = 0; i < findAll.length; i++) {
            const index = findAll[i];
    
                if(id == index.id){
                    throw new Error(
                        "Ya existe: id = "+id
                    )
                }

                if(unique_id == index.codigo_tipoVehiculo){
                    throw new Error(
                        "Ya existe: Codigo unico = "+unique_id
                    )
                }
    
            }  
            
        const create = await this.TypeVehicleModel.create(body)
    
            if(!create){
                throw new Error(
                    "Fallo al crear: "+title
                )
            }
            
        return {
            message: title + ' creado exitosamente',
            status: 200, 
            body: create 
        }
    }
    catch (error) {
        console.log(error);
        return {
            message: 'se presento un ' + error,
            status: 400,
            errors: true
        }
    }
            
}


async CreateRoles(body):Promise<any>{
try {
    const id = body.id
    const title = body.rol
    const findAll = await this.RolesModel.findAll({attributes: ['id']})
        
        for (let i = 0; i < findAll.length; i++) {
        const index = findAll[i];

            if(id == index.id){
                throw new Error(
                    "Ya existe: id = "+id
                )
            }

        }  
        
    const create = await this.RolesModel.create(body)

        if(!create){
            throw new Error(
                "Fallo al crear: "+title
            )
        }
        
    return {
        message: title + ' creado exitosamente',
        status: 200, 
        body: create 
    }
}
catch (error) {
    console.log(error);
    return {
        message: 'se presento un ' + error,
        status: 400,
        errors: true
    }
}
        
}


async CreateIdentification(body):Promise<any>{
try {
    const id = body.id
    const type = body.tipo
    const findAll = await this.IdentificationModel.findAll({attributes: ['id', 'tipo']})
    
        for (let i = 0; i < findAll.length; i++) {
        const index = findAll[i];
        
            if(id == index.id){
                throw new Error(
                    "Ya existe: id = " + id
                )
            }

            if(type == index.tipo){
                throw new Error(
                    "Ya existe: tipo = " + type
                )
            }

        }  
    
    const create = await this.IdentificationModel.create(body)
        if(!create){
            throw new Error("Fallo al crear: " + type)
        }
    
    return {
        message: type + ' creado exitosamente',
        status: 200, 
        body: create
    }
}
catch (error) {
    console.log(error);
    return {
        message: 'Se Presento Un ' + error,
        status: 400,
        errors: true
    }
}
    
}



async CreateGender(body):Promise<any>{
try {
    const id = body.id
    const title = body.genero
    const findAll = await this.GenderModel.findAll({attributes: ['id']})

        for (let i = 0; i < findAll.length; i++) {
            const indexGender = findAll[i];

            if(id == indexGender.id){
                throw new Error(
                    "Ya existe: id = " +  id
                )
            }

        }  

    const create = await this.GenderModel.create(body)

    if(!create){
        throw new Error(
            "Fallo al crear: " + title
        )
    }

    return {
        message: title + ' creado exitosamente',
        status: 200, 
        body: create 
    }
}
catch (error) {
        console.log(error);
    return {
        message: 'se presento un ' + error,
        status: 400,
        errors: true
    }
}

}



}
