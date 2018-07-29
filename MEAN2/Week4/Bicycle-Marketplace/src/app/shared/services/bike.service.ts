import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bike } from '@marketplace/models';

@Injectable()
export class BikeService {
  private base = '/api/bikes';

  constructor(private http: HttpClient) {}

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.base);
  }

  getBike(id: string): Observable<Bike> {
    return this.http.get<Bike>(`${this.base}/${id}`);
  }

  createBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.base, bike);
  }

  updateBike(bike: Bike): Observable<Bike> {
    return this.http.put<Bike>(`${this.base}/${bike._id}`, bike);
  }

  deleteBike(bike: Bike): Observable<Bike> {
    return this.http.delete<Bike>(`${this.base}/${bike._id}`);
  }
}
