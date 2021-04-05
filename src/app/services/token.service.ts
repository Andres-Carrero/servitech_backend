import { Injectable } from '@nestjs/common';
import { secretJWT } from "src/database/config/jwt.config";
import * as moment from 'moment';
import * as jwt from "jsonwebtoken";

@Injectable()
export class TokenService {

createToken(body){
try {
    const newTime = moment()
    const info = {
        id: body.id,
        codigo_usuario: body.codigo_usuario,
        primer_nombre: body.primer_nombre,
        segundo_nombre: body.segundo_nombre,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        tipoIdentificacion_id: body.tipoIdentificacion_id,
        numero_identificacion: body.numero_identificacion,
        email: body.email,
        fecha_nacimiento: body.fecha_nacimiento,
        role_id: body.role_id,
        estado_id: body.estado_id,
        genero_id: body.genero_id,
        numero_telefono: body.numero_telefono,
        numero_telefono2: body.numero_telefono2,
        iat: newTime.unix(),
        exp: newTime.add(24, 'hours').unix()
    }
    const token = jwt.sign(info, secretJWT)
    if(!token){ throw new Error("Autorizacion no creada")}

    return token
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

verifyToken(headers){
try {
    //console.log('Headers Verify-Token', headers);

    const headersToken = headers
    if(!headersToken || headersToken == ''){  throw new Error("token no encontrado")  }

  const payload = jwt.verify(headersToken, secretJWT )
    if (!payload) { throw new Error("token no valido")  }
      
    console.log('Headers Verify-Token', payload)
      return payload

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
