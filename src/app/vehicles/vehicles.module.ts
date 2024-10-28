import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';
import { HttpClient, HttpHandler, provideHttpClient } from '@angular/common/http';
import { VehicleService } from './services/vehicle.service';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DetailComponent
  ],
  providers: [
    HttpClient,
    VehicleService,
    provideHttpClient()
  ]
})
export class VehiclesModule { 
}
