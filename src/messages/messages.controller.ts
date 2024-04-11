import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// issues with inversion control is that the service is creating its own dependencies on the repository
// dependency between the service and the repository

@Controller('messages') // routes to messages(CLASS LEVEL DECORATOR)
export class MessagesController {
  constructor(public messagesService: MessagesService) {
    // creates only 1 instance of the service or copy of the service
    // inversion of control principle : dont create instances of classes in the class itself instead inject them(resuable code)
  }
  //body and param are arguments to the decorator pipe is used to validate request data before it reaches the route handler validation pipe nest js has built in validation pipe
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const messages = await this.messagesService.findOne(id);
    if (!messages) {
      throw new NotFoundException('message not found');
    }
    return messages;
  }
}
