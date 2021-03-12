import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BillsDB } from 'src/database/models/bills';
import { IdentificationDB } from 'src/database/models/identification';
import { RolesDB } from 'src/database/models/roles';
import { StatusDB } from 'src/database/models/status';
import { UsersDB } from 'src/database/models/users';

@Module({
    imports: [
        SequelizeModule.forFeature([
            UsersDB,
            IdentificationDB,
            StatusDB,
            RolesDB,
            BillsDB,
        ]),
    ],
    controllers: [],
    providers: [],
})
export class IndexModule {}
