import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchEmployeeComponent } from '../fetchemployee/fetchemployee.component';
import { EmployeeService } from '../../empService.service';

@Component({
    templateUrl: './AddEmployee.component.html',
})

export class createemployee implements OnInit {
    employeeFrom: FormGroup;
    title: string = "Create";
    employeeId: number=0;
    errorMesage: any;
    qaulificationList: Array<any> = [];
    experinceList: Array<any> = [];
    languageList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.employeeId = this._avRoute.snapshot.params["id"];
        }
        this.employeeFrom = this._fb.group({
            employeeId: 0,
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            contactno: ['', [Validators.required]],
            addr: ['', [Validators.required]],
            userName: ['', [Validators.required]],
            pwd: ['', [Validators.required]],
            qaulification: ['', [Validators.required]],
            experince: ['', [Validators.required]],
            codinglanguages: ['', [Validators.required]]
        })
    }
    ngOnInit() {

        this._employeeService.getQualificationList().subscribe(
            data => this.qaulificationList = data)

        this._employeeService.getexperinceList().subscribe(
            data => this.experinceList = data)

        this._employeeService.getlanguages().subscribe(
            data => this.languageList = data)

        //if (this.employeeId > 0) {
        //    this.title = "Edit";
        //    this._employeeService.getEmployeeById(this.employeeId).subscribe(resp => this.employeeFrom.setValue(resp), error => this.errorMesage = error)
        //}
    }

    save() {
        if (!this.employeeFrom.valid) {
            return;
        }

        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeFrom.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-employee']);
                }, error => this.errorMesage = error)  
        }

        //else if (this.title == "Edit") {
        //    this._employeeService.updateEmployee(this.employeeFrom.value)
        //        .subscribe((data) => {
        //            this._router.navigate(['/fetch-employee']);
        //        }, error => this.errorMesage = error)
        //}
    }

    cancel() {
        this._router.navigate(['/fetch-employee']);
    }
    get firstName() {
        return this.employeeFrom.get('firstName');
    }
    get lastName() {
        return this.employeeFrom.get('lastName');
    }
    get email() {
        return this.employeeFrom.get('email');
    }
    get contactno() {
        return this.employeeFrom.get('contactno');
    }
    get addr() {
        return this.employeeFrom.get('addr');
    }
    get userName() {
        return this.employeeFrom.get('userName');
    }
    get pwd() {
        return this.employeeFrom.get('pwd');
    }
    get gender() {
        return this.employeeFrom.get('gender');
    }
    get qualification() {
        return this.employeeFrom.get('qualification');
    }
    get experince() {
        return this.employeeFrom.get('exprince');
    }
    get languages() {
        return this.employeeFrom.get('languages');
    }
}
