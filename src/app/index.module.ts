import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FacturasDB } from 'src/database/models/facturas';
import { CategoriaDB } from 'src/database/models/categorias';
import { GenerosDB } from 'src/database/models/generos';
import { IdentificationesDB } from 'src/database/models/tipos_identificationes';
import { ImagenesDB } from 'src/database/models/imagenes';
import { ProductosDB } from 'src/database/models/productos';
import { RolesDB } from 'src/database/models/roles';
import { EstadoDB } from 'src/database/models/estado';
import { EstadoPagosDB } from 'src/database/models/estado_pagos';
import { TipoVehiculosDB } from 'src/database/models/tipo_vehiculos';
import { UsuarioDB } from 'src/database/models/usuarios';
import { VehiculosDB } from 'src/database/models/vehiculos';
import { ProveedoresDB } from 'src/database/models/proveedores';
import { _FacturasDB_ProductosDB } from 'src/database/models/_facturas-productos';
import { GeneralController } from './controllers/general.controller';
import { GeneralService } from './services/general.service';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TokenService } from './services/token.service';

@Module({
    imports: [
        SequelizeModule.forFeature([
            _FacturasDB_ProductosDB,
            IdentificationesDB,
            TipoVehiculosDB,
            EstadoPagosDB,
            ProveedoresDB,   
            ProductosDB,
            CategoriaDB,
            VehiculosDB,
            ImagenesDB,
            FacturasDB,
            GenerosDB,
            UsuarioDB,
            EstadoDB,
            RolesDB,
        ]),
    ],
    controllers: [
        GeneralController,
        UsersController,
    ],
    providers: [
        GeneralService,
        UsersService,
        TokenService,
    ],
    exports: [SequelizeModule]
})
export class IndexModule {}
