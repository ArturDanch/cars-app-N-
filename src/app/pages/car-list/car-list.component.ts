import { Component, OnInit } from '@angular/core';
import { Car } from './../../interfaces/car.interface';
import { CarService } from '../../services/car.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  public carsArray: Car[];
  public tableView = false;
  constructor(private carService: CarService) {}

  public ngOnInit() {
    setTimeout(() => {
      this.getCars();
    }, 3500);
  }

  /**
   * Clone array
   */
  public getCars = () => {
    this.carsArray = this.carService.getCarsList();
  }
  /**
   * Filter objects
   * @param {string} filterValue
   */
  public filterCars = (filterValue: string) => {
    this.getCars();
    switch (filterValue) {
      case 'new':
        this.carsArray = _.filter(this.carsArray, (e) => {
          return e.year > 2012;
        });
        break;
      case 'old':
        this.carsArray = _.filter(this.carsArray, (e) => {
          return e.year <= 2012;
        });
        break;
      case 'expensive':
        this.carsArray = _.filter(this.carsArray, (e) => {
          return e.price >= 100000;
        });
        break;
      case 'germany':
        this.carsArray = _.filter(this.carsArray, {country: 'Germany'});
        break;
      case 'italy':
        this.carsArray = _.filter(this.carsArray, {country: 'Italy'});
        break;
      case 'france':
        this.carsArray = _.filter(this.carsArray, {country: 'France'});
        break;
      case 'ukraine':
        this.carsArray = _.filter(this.carsArray, {country: 'Ukraine'});
        break;
      case 'japan':
        this.carsArray = _.filter(this.carsArray, {country: 'Japan'});
        break;
      default:
        this.getCars();
    }
  }
  /**
   * Sort cars by specific field
   * @param {string} sortValue
   */
  public sortCars = (sortValue: string) => {
    this.carsArray = _.sortBy(this.carsArray, [sortValue]);
  }
  /**
   * Remove selected car
   * @param {number} index
   */
  public onCarRemove = (index: number) => {
    console.log(`Delete car: ${this.carsArray[index].title} ${this.carsArray[index].model}`);
    this.carService.deleteCar(index);
    this.getCars();
  }
  /**
   * Change table/grid view
   */
  public changeView = () => {
    this.tableView = !this.tableView;
  }
}
