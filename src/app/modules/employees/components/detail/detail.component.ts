import { Component } from '@angular/core';
import { Employees } from '../../models/employees.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './detail.component.html',
})
export class EmployeeDetailComponent {
  employee: Employees | undefined;
  searchTerm: string = '';
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.employeeService.getEmployeeById(id).subscribe((employee) => {
          this.employee = employee;
        });
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['searchTerm'] || '';
      this.page = +params['page'] || 1;
    });
  }

  goBackToList(): void {
    this.router.navigate(['/employee-management/employees/list'], {
      queryParams: {
        searchTerm: this.searchTerm,
        page: this.page,
      },
    });
  }
}
