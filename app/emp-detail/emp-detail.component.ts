import { Component, Input } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
    selector: 'my-emp-detail',
    templateUrl: './emp-detail.component.html'
})

export class EmpDetailComponent {
    @Input()
    employee: EmployeeComponent
}
   