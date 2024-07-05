import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../models/employees.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private jsonURL = 'assets/data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.jsonURL);
  }

  getEmployeeById(id: number): Observable<Employees | undefined> {
    return this.getEmployees().pipe(
      map((employees: Employees[]) =>
        employees.find((employee) => employee.id === id)
      )
    );
  }
}
