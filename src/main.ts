import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // validation pipe is used to validate request data before it reaches the route handler 
  // validation pipe nest js has built in validation pipe
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
