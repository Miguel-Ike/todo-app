import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Cambia esto según tu configuración
      port: 5432, // Cambia esto según tu configuración
      username: 'postgres', // Cambia esto según tu configuración
      password: '123456', // Cambia esto según tu configuración
      database: 'TestNestJs', // Cambia esto según tu configuración
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // No se recomienda en producción
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
