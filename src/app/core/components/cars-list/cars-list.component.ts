import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: any;

  imgUrl = '../../../../assets';   // images

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.carService.getCars()
      .subscribe(res => {
        this.cars = res;
        console.log(res);
      });
  }

}
