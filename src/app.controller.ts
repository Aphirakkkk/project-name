import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('/it')
  getit(): string {
    return 'it works!';
  }

  @Get('/it2')
  getit2(): string {
    return '555555S.';
  }

  @Get('/it3')
  getit3(): string {
    return 'sdsds.';
  }
}
