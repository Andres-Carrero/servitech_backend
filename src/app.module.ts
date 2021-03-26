import { GeneralController } from './app/controllers/general.controller';
import { GeneralService } from './app/services/general.service';
import { IndexModule } from './app/index.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    IndexModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'servitech',
      autoLoadModels: true,
      synchronize: true,
      models: [__dirname + '/database/models/*{.ts}'],
    }),
  ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
