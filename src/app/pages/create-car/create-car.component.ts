import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }
  onSubmit = (form: NgForm) => {
    console.log(form.value);
    this.carService.addCar(form.value);
  }
}
