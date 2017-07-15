import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styles: [`
    .even { background-color: lightblue; }
    .odd { background-color: deepskyblue; }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .badge {
      display: inline-block;
      padding: 0.8em 0.7em 0 0.7em;
      line-height: 1em;
      position: relative;
      left: -1px;
      height: 1.4em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;  
    }
    `]
})
export class EmployeeComponent {

    empList: any = [
        {name: 'Adarva', age: 42, company: 'Aaa', gender: 'male', role: 'User'},
        {name: 'Lawrence', age: 50, company: 'Facebook', gender: 'male', role: 'Admin'},
        {name: ' Anjalai ', age: 61, company: 'Twitter', gender: 'female', role: 'Supervisor'},
        {name: ' Rahul', age: 21, company: 'Uber', gender: 'male', role: 'Super Admin'},
        {name: 'Ameerkhan', age: 55, company: 'LinkedIn', gender: 'male', role: 'Supervisor'},
        {name: 'Julie', age: 20, company: 'Airbnb', gender: 'male', role: 'User'},
        {name: 'Kautam ', age: 23, company: 'Google', gender: 'female', role: 'Supervisor'},
        {name: 'Nirmal', age: 33, company: 'Tesla', gender: 'male', role: 'User'}

    ]

    selectedEmployee: EmployeeComponent;
    onSelect(employee: EmployeeComponent): void {
        this.selectedEmployee = employee;
    }
}
