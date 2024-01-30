import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { OrdersModule } from './orders.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
