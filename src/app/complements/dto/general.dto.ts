export class GendersDto {
    id: number;
    genero: string; 
    creado: Date
    actualizado: Date
}

export class IdentificationsDto {
    id: number;
    tipo: string; 
    creado: Date
    actualizado: Date
}

export class RolesDto {
    id: number;
    codigo_rol: string;
    rol: string;
    descripcion: string
    creado: Date
    actualizado: Date
    eliminado: Date
}

export class TypesVehiclesDto {
    id: number;
    codigo_tipoVehiculo:string
    tipo: string; 
    creado: Date
    actualizado: Date
}

export class StatusPaymentDto {
    id: number;
    estado: string;
    creado: Date
    actualizado: Date
}

export class StatusDto {
    id: number;
    estado: string;
    creado: Date
    actualizado: Date
}