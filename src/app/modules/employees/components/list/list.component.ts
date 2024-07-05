import { Component, OnInit } from '@angular/core';
import { Employees } from '../../models/employees.model';
import { EmployeeService } from '../../services/employees.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  providers: [CurrencyPipe, DatePipe],
})
export class EmployeeListComponent implements OnInit {
  employees: Employees[] = [];
  searchTerm: string = '';
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  pageSizes: number[] = [10, 20, 50, 100];
  savedSearchTerm: string = '';
  savedCurrentPage: number = 1;
  paginatedEmployees: Employees[] = [];
  sortDirection: boolean = true;
  sortField: string = '';

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.savedSearchTerm = params['searchTerm'] || '';
      this.savedCurrentPage = +params['page'] || 1;

      this.searchTerm = this.savedSearchTerm;
      this.currentPage = this.savedCurrentPage;

      this.employeeService.getEmployees().subscribe((data) => {
        this.employees = data || [];
        this.updatePagination();
      });
    });
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getPageButtonClass(pageNumber: number): string {
    return `flex items-center justify-center text-sm py-2 px-3 leading-tight ${
      pageNumber === this.currentPage
        ? 'text-primary-700 bg-primary-200 hover:bg-primary-300 focus:ring-primary-500 focus:ring-2 ring-primary-400'
        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
    }`;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateEmployees();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateEmployees();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateEmployees();
    }
  }

  paginateEmployees(): void {
    const filteredEmployees = this.filterEmployees();
    this.paginatedEmployees = filteredEmployees.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  filterEmployees(): Employees[] {
    const searchTermLower = this.searchTerm.toLowerCase();
    const filteredEmployees = this.employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchTermLower) ||
        employee.status.toLowerCase().includes(searchTermLower) ||
        employee.group.toLowerCase().includes(searchTermLower)
    );
    return filteredEmployees;
  }

  updatePagination(): void {
    const filteredEmployees = this.filterEmployees();
    this.totalPages = Math.ceil(filteredEmployees.length / this.pageSize);
    this.paginateEmployees();
  }

  showToast(status: string) {
    let options: Partial<IndividualConfig> = {
      toastClass: '',
    };

    if (status === 'warning') {
      options.toastClass = 'ngx-toastr bg-yellow-300 rounded-lg';
      this.toastr.warning('Data updated successfully.', 'Edit', options);
    } else if (status === 'error') {
      options.toastClass = 'ngx-toastr bg-red-400 rounded-lg';
      this.toastr.error('Data deleted successfully', 'Delete', options);
    }
  }
  navigateToDetail(id: number) {
    this.router.navigate(['/employee-management/employees/detail', id], {
      queryParams: {
        searchTerm: this.searchTerm,
        page: this.currentPage,
      },
    });
  }
}
