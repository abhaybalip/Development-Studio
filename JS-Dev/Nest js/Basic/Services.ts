import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(): string[] {
    return ['cat1', 'cat2', 'cat3'];
  }
}

// Register in module 

// import { Module } from '@nestjs/common';
// import { CatsController } from './cats.controller';
// import { CatsService } from './cats.service';

// @Module({
//     controllers: [CatsController],
//     providers: [CatsService]
// })
// export class CatsModule {}


// Implement in controller

// import { Controller, Get } from '@nestjs/common';
// import { CatsService } from './cats.service';

// @Controller('cats')
// export class CatsController {
//     constructor(private catsService: CatsService) {}

//     @Get()
//     findAll(): string[] {
//         return this.catsService.findAll();
//     }
// }
