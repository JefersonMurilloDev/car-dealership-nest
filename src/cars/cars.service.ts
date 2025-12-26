import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos/index';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Testa',
            model: 'S'
        },
        {
            id: uuid(),
            brand: 'BWD',
            model: 'Puper Test'
        }
    ];

    findAll() {
        console.log(this.cars);
        return this.cars;
        
    }

    findAllById(id: string) {
        const car = this.cars.find( car => car.id === id);

        if (!car) throw new NotFoundException(`Car with ID "${id}" not found`);
        return car;

    } 

    create(createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);

        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.findAllById( id );

        this.cars = this.cars.map(car => {

            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }

                return carDB
            }

            return car
        })

        return carDB;

    }

    delete(id: string) {
        const car = this.findAllById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
}
