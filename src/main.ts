import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Adding global validation for pipes rather than parameter level or handler-level
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
