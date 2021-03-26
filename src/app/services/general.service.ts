import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { genderDB } from 'src/database/models/gender';
import { IdentificationDB } from 'src/database/models/identification';
import { RolesDB } from 'src/database/models/roles';
import { StatusDB } from 'src/database/models/status';
import { StatusPaymentDB } from 'src/database/models/statusPayment';
import { TypeVehicleDB } from 'src/database/models/type_vehicles';

@Injectable()
export class GeneralService {
constructor(
    @InjectModel(IdentificationDB)
        private readonly IdentificationModel: typeof IdentificationDB,

    @InjectModel(genderDB)
        private readonly GenderModel: typeof genderDB,

    @InjectModel(RolesDB)
        private readonly RolesModel: typeof RolesDB,

    @InjectModel(TypeVehicleDB)
        private readonly TypeVehicleModel: typeof TypeVehicleDB,

    @InjectModel(StatusPaymentDB)
        private readonly StatusPaymentModel: typeof StatusPaymentDB,

    @InjectModel(StatusDB)
        private readonly StatusModel: typeof StatusDB,

){}

async CreateAll(){
    const Status1 = {
        id: 1,
        title: 'Activo'
    }
    const Status2 = {
        id: 2,
        title: 'Pendiente'
    }
    const Status3 = {
        id: 3,
        title: 'Inactivo'
    }
    const Status4 = {
        id: 4,
        title: 'Eliminado'
    }


    const StatusPayment1 = {
        id: 1,
        title: 'Pagado'
    }
    const StatusPayment2 = {
        id: 2,
        title: 'Pendiente'
    }
    const StatusPayment3 = {
        id: 3,
        title: 'Cancelado'
    }


    const Gender1 = {
        id: 1,
        title: 'Masculino'
    }
    const Gender2 = {
        id: 2,
        title: 'Femenino'
    }
    const Gender3 = {
        id: 3,
        title: 'Indefinido'
    }


    const role1 = {
        id: 1,
        unique_id: 'ADMIN_ROLE',
        title: 'Administrador',
        description: 'V1'
    }
    const role2 = {
        id: 2,
        unique_id: 'MODERADOR_ROLE',
        title: 'Moderador',
        description: 'V1'
    }
    const role3 = {
        id: 3,
        unique_id: 'CLIENTE_ROLE',
        title: 'Cliente',
        description: 'V1'
    }

    const identification1 = {
        id: 1,
        type: 'Cedula de Ciudadania'
    }
    const identification2 = {
        id: 2,
        type: 'Tarjeta de Identidad'
    }
    const identification3 = {
        id: 3,
        type: 'Cedula Extranjera'
    }

    const typeVehicle1 = {
        id: 1,
        unique_id: 'TYPE_AUTOMOVIL',
        title: 'Automovil'
    }
    const typeVehicle2 = {
        id: 2,
        unique_id: 'TYPE_MOTOCICLETA',
        title: 'Motocicleta'
    }
    const typeVehicle3 = {
        id: 3,
        unique_id: 'TYPE_BICICLETA',
        title: 'Bicicleta'
    }
    const typeVehicle4 = {
        id: 4,
        unique_id: 'TYPE_FURGON',
        title: 'Furgon/Furgoneta'
    }
    const typeVehicle5 = {
        id: 5,
        unique_id: 'TYPE_CAMION',
        title: 'Camion'
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
    const newRole3 = await this.CreateRoles(role3)

    const newIdentification1 = await this.CreateIdentification(identification1)
    const newIdentification2 = await this.CreateIdentification(identification2)
    const newIdentification3 = await this.CreateIdentification(identification3)

    const newTypeVehicle1 = await this.CreateTypeVehicle(typeVehicle1)
    const newTypeVehicle2 = await this.CreateTypeVehicle(typeVehicle2)
    const newTypeVehicle3 = await this.CreateTypeVehicle(typeVehicle3)
    const newTypeVehicle4 = await this.CreateTypeVehicle(typeVehicle4)
    const newTypeVehicle5 = await this.CreateTypeVehicle(typeVehicle5)

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
            newRole3
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
        }
    }

}





async CreateStatus(body):Promise<any>{
    try {
        const id = body.id
        const title = body.title
        const findAll = await this.StatusModel.findAll({
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
            
        const create = await this.StatusModel.create(body)
    
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


async CreateStatusPayment(body):Promise<any>{
    try {
        const id = body.id
        const title = body.title
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
        const unique_id = body.unique_id
        const title = body.title
        const findAll = await this.TypeVehicleModel.findAll({
            attributes: [
                'id',
                'unique_id'
            ]
        })
            
            for (let i = 0; i < findAll.length; i++) {
            const index = findAll[i];
    
                if(id == index.id){
                    throw new Error(
                        "Ya existe: id = "+id
                    )
                }

                if(unique_id == index.unique_id){
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
    const title = body.title
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
    const type = body.type
    const findAll = await this.IdentificationModel.findAll({attributes: ['id', 'type']})
    
        for (let i = 0; i < findAll.length; i++) {
        const index = findAll[i];
        
            if(id == index.id){
                throw new Error(
                    "Ya existe: id = " + id
                )
            }

            if(type == index.type){
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
    const title = body.title
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
