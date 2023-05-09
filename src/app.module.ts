import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CoreModule } from './modules/core/core.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
