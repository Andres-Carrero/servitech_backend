import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { isEmail } from 'class-validator';
import { UsuarioDB } from 'src/database/models/usuarios';
import * as bcrypt from "bcrypt";
import * as moment from 'moment';
import * as jwt from "jsonwebtoken";
import { RolesDB } from 'src/database/models/roles';
import { TokenService } from './token.service';
import { GenerosDB } from 'src/database/models/generos';
import { IdentificationesDB } from 'src/database/models/tipos_identificationes';
import { VehiculosDB } from 'src/database/models/vehiculos';
import { PaginationOptionsInterface } from '../complements/interfaces/paginator.interface';
import { EstadoDB } from 'src/database/models/estado';
import { FacturasDB } from 'src/database/models/facturas';


@Injectable()
export class UsersService {
constructor(
    @InjectModel(UsuarioDB)
        private UserModel: typeof UsuarioDB,

    @InjectModel(EstadoDB)
        private EstadoModel: typeof EstadoDB,

    private TokenServices: TokenService
){}


async findAllUSers(options: PaginationOptionsInterface):Promise<any>{
try {
    const status = options.filter.status
    const order = [options.filter.column, options.filter.orden]
    const limits = options.filter.limits
    const pages = options.filter.pages

    const {rows, count} = await this.UserModel.findAndCountAll({
        where: {    estado_id: status   },
        //order: [    order   ],
        //limit: limits,
        //offset: pages
        include: [{ 
            model: RolesDB,
            attributes: [
                "id",
                "codigo_rol",
                "rol",
                "descripcion"
            ]
        },{
            model: GenerosDB,
            attributes: [
                "id",
                "genero"
            ]
        },{
            model: IdentificationesDB,
            attributes: [
                "id",
                "tipo"
            ]
        },{
            model: VehiculosDB
        },{
            model: FacturasDB
        }] 

    })
    return {
        message: 'todos los datos',
        status: 200, 
        body: {data: rows, length: count} 
    } 
} 
catch (error) {
    console.log(error);
    return {
        message: ""+error,
        status: 400,
        errors: true
    } 
}

}

async updateUser(id, body){
try {
    if(body.contrasena){
      const hashPassword = bcrypt.hashSync(body.contrasena, 10)
      body.contrasena = hashPassword
    }

    const update = await this.UserModel.update(body, {
        where: {    codigo_usuario: id  }
    })

    return {
        message: `Se Actualizo, ${body.primer_nombre} ${body.primer_apellido}`,
        status: 200, 
        body: body 
    }   
} 
catch (error) {
    console.log(error);
    return {
        message: ""+error,
        status: 400,
        errors: true
    } 
}
}


async Login(body){
try {
    if(
        body.email == "" || body.email == null,
        body.contrasena == "" || body.contrasena == null
    ){  throw new Error("Debe llenar email y/o contraseña")   }

    const findUser = await this.UserModel.findOne({ 
        where: {
            email: body.email, 
            estado_id: 1
        }, 
        include: [{ 
            model: RolesDB,
            attributes: [
                "id",
                "codigo_rol",
                "rol",
                "descripcion"
            ]
        },{
            model: GenerosDB,
            attributes: [
                "id",
                "genero"
            ]
        },{
            model: IdentificationesDB,
            attributes: [
                "id",
                "tipo"
            ]
        },{
            model: VehiculosDB
        }]  
    })
    if(!findUser){  throw new Error("Usuario o contraseña incorrectos!") }

    const passwordHash = findUser.contrasena
    const verifyPassword = await bcrypt.compareSync(body.contrasena, passwordHash)
      if(!verifyPassword){  throw new Error("Usuario o contraseña incorrectos!") }
        
    const token = await this.TokenServices.createToken(findUser)
    if(!token){ throw new Error("token erroneo") }

    const id = findUser.id
    const unique_id = findUser.codigo_usuario
    const fName = findUser.primer_nombre
    const sName = findUser.segundo_nombre
    const fLastName = findUser.primer_apellido
    const sLastName = findUser.segundo_apellido
    const numberPhone = findUser.numero_identificacion
    const numberPhoneAlternative = findUser.numero_telefono2
    const email = findUser.email
    const birthDate = findUser.fecha_nacimiento
    const role = findUser.rol
    const typeIdentification = findUser.tipo_identificacion
    const gender = findUser.genero
    const vehicle = findUser.vehiculos
    
      return {
        message: `Bienvenido: ${fName} ${fLastName}`,
        success: true,
        token,
        identity: {
            id,
            unique_id,
            fName,
            sName,
            fLastName,
            sLastName,
            numberPhone,
            numberPhoneAlternative,
            email,
            birthDate,
            role,
            typeIdentification,
            gender,
            vehicle
        }
      }
} 
catch (error) {
    console.log(error);
    return {
        message: ""+error,
        status: 400,
        errors: true
    }   
}

}

async createUser(body){
try {
    if(
        //body.imagen == "" || body.imagen == null,
        body.primer_nombre == "" || body.primer_nombre == null,
        body.segundo_nombre == "" || body.segundo_nombre == null,
        body.primer_apellido == "" || body.primer_apellido == null,
        body.segundo_apellido == "" || body.segundo_apellido == null,
        body.tipoIdentificacion_id == "" || body.tipoIdentificacion_id == null,
        body.numero_identificacion == "" || body.numero_identificacion == null,
        body.email == "" || body.email == null,
        body.contrasena == "" || body.contrasena == null,
        body.fecha_nacimiento == "" || body.fecha_nacimiento == null,
        body.role_id == "" || body.role_id == null,
        body.genero_id == "" || body.genero_id == null,
        body.numero_telefono == "" || body.numero_telefono == null,
        body.numero_telefono2 == "" || body.numero_telefono2 == null
    ){  throw new Error("Debe llenar todo el formulario")   }
        
    
    const emailVerify = isEmail(body.email)
    if(emailVerify == false){
        throw new Error(body.email + " no es valido")
    }
        
    const findUser = await this.UserModel.findAll({
        attributes: [
            'id',
            'email',
            'numero_telefono',
            'numero_identificacion'
        ]
    })
    
    for (let i = 0; i < findUser.length; i++) {
        const findUserIndex = findUser[i];

        if(body.id == findUserIndex.id){
            throw new Error("intentelo nuevamente")
        }
        if(body.email == findUserIndex.email){
            throw new Error("debe cambiar: email")
        }
        if(body.numero_telefono == findUserIndex.numero_telefono){
            throw new Error("debe cambiar: numero de telefono")
        }
        if(body.numero_identificacion == findUserIndex.numero_identificacion){
            throw new Error("debe cambiar: numero de identificacion")
        }

    }

    const password = body.contrasena
    const hashPassword = bcrypt.hashSync(password, 10)

    body.creado = moment.utc(new Date)
    body.contrasena = hashPassword
    //body.codigo_usuario = uuidv4()
    //body.estado_id = 1

    const createUser = await this.UserModel.create(body)
    if(!createUser){    throw new Error("No se creo este usuario")  }

    return {
        message: `Bienvenido a SERVITECH, ${body.primer_nombre} ${body.primer_apellido}`,
        status: 200, 
        body: createUser 
    }        
} 
    catch (error) {
        console.log(error);
        return {
            message: ""+error,
            status: 400,
            errors: true
        }
    }
}




}
