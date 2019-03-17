import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './core/components/cars-list/cars-list.component';
import { CarDetailsComponent } from './core/components/car-details/car-details.component';


const routes: Routes = [
   { path: '', redirectTo: 'carslist', pathMatch: 'full' },
   { path: 'carslist', component: CarsListComponent  },
   { path: 'car/:id', component: CarDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
