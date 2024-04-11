import { IsString } from "class-validator";

export class CreateMessageDto{
    @IsString() // decorator to validate the content property
    content: string;
}