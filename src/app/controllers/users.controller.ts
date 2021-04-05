import { Body, Controller, Get, Headers, Param, Post, Put, Request } from '@nestjs/common';
import { LoginDto, usersDto } from '../complements/dto/users.dto';
import { TokenService } from '../services/token.service';
import { UsersService } from '../services/users.service';

@Controller('user')
export class UsersController {
    constructor(
        private services: UsersService,
        private tokenServices: TokenService
        ){}

    @Post('create')
    CreateUSers(@Body() Body: usersDto){
        return this.services.createUser(Body)
    }

    @Post('login')
    login(@Body() Body: LoginDto){ 
        return this.services.Login(Body)
    }

    @Put(':id')
    async UpdateUser(
        @Body() body: usersDto, 
        @Param('id') id: string, 
        @Headers() headers: any
    ){
        const token = await this.tokenServices.verifyToken(headers.authorization)
        if(token.errors == true){
            return token
        }
        
        const update = await this.services.updateUser(id, body)
        return update
    }

    @Post()
    FindAllUSers(@Body() body){
        const users = this.services.findAllUSers({
            filter: {
                limits: body.limits,
                pages: body.pages,
                orden: body.orden,
                column: body.column,
                status: body.status,
                search: body.search,
                dateStart: body.dateStart,
                dateEnd: body.dateEnd
            }

        })
        return users
    }

}
