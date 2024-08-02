import { Controller, Get, UseGuards } from '@nestjs/common';
import { LoggingMiddleware } from './logging.middleware';

@Controller()
export class AppController {
  @Get()
  @UseGuards(LoggingMiddleware)
  getHello(): string {
    return 'Hello World!';
  }
}


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { LoggingMiddleware } from './logging.middleware';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.use(LoggingMiddleware);
//   await app.listen(3000);
// }
// bootstrap();
