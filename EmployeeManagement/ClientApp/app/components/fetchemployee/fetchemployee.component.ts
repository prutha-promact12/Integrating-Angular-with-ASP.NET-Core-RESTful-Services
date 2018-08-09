

import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../empService.service';

@Component({
    templateUrl: './fetchemployee.component.html',
})
export class FetchEmployeeComponent {
     empList: EmployeeData[] =[];
    constructor(public http: Http, private _router: Router, private _employeeservice: EmployeeService) {
        this.getEmployees();
    }
    getEmployees() {
        this._employeeservice.getEmployees().subscribe(data => this.empList = data)
    }
    delete(employeeID) {
        var ans = confirm("Do you want to delete employee with Id:" + employeeID);
        if (ans) {
            this._employeeservice.deleteEmployee(employeeID).subscribe((data) => {
                this.getEmployees();
            }, error => console.error(error))
        }
    }
}
interface EmployeeData {
    employeeID: string;
    firstName: string;
    lastName: string;
    email: string;
    contactno: string;
    address: string;
    userName: string;
    password: string;
    gender: string;
    qualification: string;
    experience: string;
    codingLanguages: string;
}