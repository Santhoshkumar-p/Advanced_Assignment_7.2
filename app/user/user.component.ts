import { Component } from '@angular/core';

@Component({
    selector: 'my-user',
    templateUrl: './user.component.html',
    styleUrls: ['../app.component.css']
})
export class UserComponent {
    userList: any = [
        {name: 'Adarva', age: 42, company: 'Aaa', gender: 'male', role: 'User'},
        {name: 'Lawrence', age: 50, company: 'Facebook', gender: 'male', role: 'Admin'},
        {name: ' Anjalai ', age: 61, company: 'Twitter', gender: 'female', role: 'Supervisor'},
        {name: ' Rahul', age: 21, company: 'Uber', gender: 'male', role: 'Super Admin'},
        {name: 'Ameerkhan', age: 55, company: 'LinkedIn', gender: 'male', role: 'Supervisor'},
        {name: 'Julie', age: 20, company: 'Airbnb', gender: 'male', role: 'User'},
        {name: 'Kautam ', age: 23, company: 'Google', gender: 'female', role: 'Supervisor'},
        {name: 'Nirmal', age: 33, company: 'Tesla', gender: 'male', role: 'User'}

    ]
}  