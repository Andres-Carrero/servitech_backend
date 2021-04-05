export class usersDto {
    id: number;
    codigo_usuario: string
    imagen: string
    primer_nombre: string
    segundo_nombre: string
    primer_apellido: string
    segundo_apellido: string
    tipoIdentificacion_id: number;
    numero_identificacion: number
    email: string
    contrasena: string
    fecha_nacimiento: Date
    role_id: number;
    estado_id: number;
    genero_id: number;
    numero_telefono: number
    numero_telefono2: number
    creado: Date
    actualizado: Date
    eliminado: Date
}

export class LoginDto {
    email: string;
    contrasena: string;
}