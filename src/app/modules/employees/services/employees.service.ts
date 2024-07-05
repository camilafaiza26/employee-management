import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../models/employees.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private jsonURL = 'assets/data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.jsonURL);
  }
}
