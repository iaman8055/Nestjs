/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty} from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    username:string;
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    age:string;
}