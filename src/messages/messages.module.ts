import { MessagesService } from './messages.service';
import { MeesagesRepository } from './messages.repository';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MeesagesRepository], // thingsThatcanBeUsedAsDependenciesForOtherClasses
})
export class MessagesModule {}
