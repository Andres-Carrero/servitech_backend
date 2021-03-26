import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BillsDB } from 'src/database/models/bills';
import { CategoryDB } from 'src/database/models/category';
import { genderDB } from 'src/database/models/gender';
import { IdentificationDB } from 'src/database/models/identification';
import { ImagesDB } from 'src/database/models/images';
import { productsDB } from 'src/database/models/products';
import { RolesDB } from 'src/database/models/roles';
import { StatusDB } from 'src/database/models/status';
import { StatusPaymentDB } from 'src/database/models/statusPayment';
import { TypeVehicleDB } from 'src/database/models/type_vehicles';
import { UsersDB } from 'src/database/models/users';
import { VehiclesDB } from 'src/database/models/vehicles';
import { VendorsDB } from 'src/database/models/vendors';
import { _BillsDB_ProductsDB } from 'src/database/models/_bills-products';
import { GeneralController } from './controllers/general.controller';
import { GeneralService } from './services/general.service';

@Module({
    imports: [
        SequelizeModule.forFeature([
            _BillsDB_ProductsDB,
            IdentificationDB,
            StatusPaymentDB,
            TypeVehicleDB,
            VehiclesDB,
            productsDB,
            CategoryDB,
            VendorsDB,
            ImagesDB,
            genderDB,
            StatusDB,
            UsersDB,
            RolesDB,
            BillsDB,
        ]),
    ],
    controllers: [
        GeneralController,
    ],
    providers: [
        GeneralService
    ],
})
export class IndexModule {}
