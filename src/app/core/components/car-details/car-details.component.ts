import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  carDetails: any;
  imgUrl = '../../../../assets/images/';   // images

  ngOnInit() {
    this.loadDataDetail();
  }

  loadDataDetail() {
    const id = this.route.snapshot.params['id'];
    this.carService.getCarDetail(id)
      .subscribe(res => {
        console.log(res);
        this.carDetails = res;
      });
  }

}
