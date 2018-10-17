import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import * as _ from 'lodash';

@Injectable()

export class CarService {
  private carsArray: Car[] = [];
  public addCar(value: Car) {
    this.carsArray.push(value);
    console.log(this.carsArray);
  }
  public deleteCar(index: number) {
    this.carsArray.splice(index,1);
  }
  public getCarsList() {
    return _.cloneDeep(this.carsArray);
  }
}
