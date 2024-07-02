/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreatedUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers=[{ username: 'Aman', email: 'amanchauhan93@gmail.com' }];
    fetchUsers(){
        return this.fakeUsers;
    }
    // createUser(userDetails:createUserDto){
    //     this.fakeUsers.push(userDetails)
    //     return ;
    // }
    createUser(userDetails:CreatedUserType){
        this.fakeUsers.push(userDetails)
        return;
    }
    fetchUserById(id:number){
        return {id,username:'Aman',email:'iamanchauhan92@gmail.com'}
    }
    
}
