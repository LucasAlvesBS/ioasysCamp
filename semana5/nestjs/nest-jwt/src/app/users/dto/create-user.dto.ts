import { IsNotEmpty, IsEmail, Matches } from 'class-validator';
import { MessageHelper } from 'src/helpers/message.helper';
import { RegExHelper } from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  @Matches(RegExHelper.name, { message: MessageHelper.NAME_VALID })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessageHelper.PASSWORD_VALID })
  password: string;
}
