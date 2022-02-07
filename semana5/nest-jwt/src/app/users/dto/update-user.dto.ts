import { IsNotEmpty, Matches } from 'class-validator';
import { MessageHelper } from 'src/helpers/message.helper';
import { RegExHelper } from 'src/helpers/regex.helper';

export class UpdateUserDto {
  @IsNotEmpty()
  @Matches(RegExHelper.name, { message: MessageHelper.NAME_VALID })
  name: string;
}
