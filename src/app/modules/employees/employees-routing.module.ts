import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/list/list.component';
import { EmployeeDetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent,
  },
  {
    path: 'detail',
    component: EmployeeDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
