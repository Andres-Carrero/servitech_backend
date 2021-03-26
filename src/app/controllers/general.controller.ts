import { Body, Controller, Post } from '@nestjs/common';
import { 
    GendersDto, 
    IdentificationsDto, 
    RolesDto, 
    StatusDto, 
    StatusPaymentDto, 
    TypesVehiclesDto 
} from '../complements/dto/general.dto';
import { GeneralService } from '../services/general.service';

@Controller('general')
export class GeneralController {
    constructor(private services: GeneralService){}

    @Post('all')
    createAll(){
        return this.services.CreateAll()
    }

    @Post('genders')
    createGender(@Body() data: GendersDto){
        return this.services.CreateGender(data)
    }

    @Post('identifications')
    createIdentifications(@Body() data: IdentificationsDto){
        return this.services.CreateIdentification(data)
    }

    @Post('roles')
    createRoles(@Body() data: RolesDto){
        return this.services.CreateRoles(data)
    }

    @Post('types_vehicles')
    createTypeVehicles(@Body() data: TypesVehiclesDto){
        return this.services.CreateTypeVehicle(data)
    }

    @Post('status_payments')
    createStatusPayment(@Body() data: StatusPaymentDto){
        return this.services.CreateStatusPayment(data)
    }

    @Post('status')
    createStatus(@Body() data: StatusDto){
        return this.services.CreateStatus(data)
    }

}
