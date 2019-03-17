import { Injectable } from '@angular/core';
import { Config } from '../models/config.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  config: Config = {
    apiUrl: environment.apiUrl
  };

  constructor(private httpClient: HttpClient) { }

  getCars() {
    return this.httpClient.get(`${this.config.apiUrl}/api/vehicles/`);
  }

  getCarDetail(id) {
    return this.httpClient.get(`${this.config.apiUrl}/api/vehicle/${id}`);
  }

}
