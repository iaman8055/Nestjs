/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService:UsersService){ }
  // @Get()
  // getuser() {
  //   return [{ username: 'Aman', email: 'amanchauhan93@gmail.com' }];
  // }
  // @Get()
  // getUsers(@Query('sortDesc',ParseBoolPipe) sortDesc:boolean) {
  //   return [{ username: 'Aman', email: 'amanchauhan93@gmail.com' }];
  // }
  @Get()
  getUsers(@Query('sortDesc',ParseBoolPipe) sortDesc:boolean) {
    return this.usersService.fetchUsers();
  }
  
  @Get('posts')
  getUserPost() {
    return [
      {
        username: 'Aman',
        email: 'iamanchauhan93@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
          {
            id: 3,
            title: 'Post 3',
          },
        ],
      },
    ];
  }
  //with express
//   @Post()
//   createUser(@Req() request: Request, @Res() response: Response) {
//     console.log(request.body);
//     response.send('created');
//   }

//with nest
//without provider
  // @Post('create')
  // @UsePipes(new ValidationPipe())
  // createUser(@Body() userdata:createUserDto) {
  //   console.log(userdata)
  //   return {}
  // }
  //with providers
  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userdata:createUserDto) {
    console.log(userdata.age.toPrecision())
    return this.usersService.createUser(userdata);
  }

  //with express
//   @Get(':id')
//   getUserById(@Req() request:Request, @Res() response:Response){
//     console.log(request.params)
//   }
//with nest.js
@Get(':id')
getUserById(@Param('id',ParseIntPipe) id:number ){
  
  const user=this.usersService.fetchUserById(id);
  if(!user) throw new HttpException('User Not Found',HttpStatus.BAD_REQUEST)
    return user;
}

}

