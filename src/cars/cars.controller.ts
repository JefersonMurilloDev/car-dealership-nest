import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    
    return this.carsService.findAllById(id); 
  }

  @Post()
  createCar( @Body() createCarDto: CreateCarDto ) {
    console.log(createCarDto);
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar( 
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto) {
    console.log(updateCarDto);
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id: string ) {
    return this.carsService.delete(id);
  }
}
