import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit{
  vehiclesList: any;
  
  constructor(private vehicleService: VehicleService){
    
  }

  ngOnInit(): void {
  
    this.vehicleService.getDetailVehicle();

  }



  

  

}
