import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed, expected a number');
    }
    return val;
  }
}

// import { Controller, Get, Param, UsePipes } from '@nestjs/common';
// import { ParseIntPipe } from './parse-int.pipe';

// @Controller('products')
// export class ProductsController {
//   @Get(':id')
//   @UsePipes(new ParseIntPipe())
//   findOne(@Param('id') id: number) {
//     // ...
//   }
// }
