import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() public myCar: Car;
  @Input() public carIndex: number;
  @Output() public deleteCar = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit delete car event
   */
  public onCarDelete = () => {
    this.deleteCar.emit(this.carIndex);
  }

}
