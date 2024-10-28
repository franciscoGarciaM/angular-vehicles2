import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getDetailVehicle (){
    const url = '/api/vehiculos/1';
    this.http.get(url,{responseType:'json'}).subscribe(data => {
      console.log('--->',data);
    });
  }
}
