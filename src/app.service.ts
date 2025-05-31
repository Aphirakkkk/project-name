import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
       name: 'Aphirak Sainui',
       id:'66112806',     
    };
  }
}
