import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('protected')
@UseGuards(AuthGuard)
export class ProtectedController {
  @Get()
  getHello() {
    return 'Hello from protected route';
  }
}
