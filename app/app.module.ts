import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmpDetailComponent } from "./emp-detail/emp-detail.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, UserComponent, EmployeeComponent, EmpDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
  