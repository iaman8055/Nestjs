import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { throws } from 'assert';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    const parseAge = parseInt(value.age.toString());
    if (isNaN(parseAge)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data type for property age ',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { ...value, age: parseAge };

    return value;
  }
}
