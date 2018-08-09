import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchEmployeeComponent } from '../fetchemployee/fetchemployee.component';
import { EmployeeService } from '../../empService.service';
import { retry } from 'rxjs/operator/retry';

@Component({
    templateUrl: './AddEmployee.component.html',
})
export class AddEmployeeComponent implements OnInit {
    employeeForm: FormGroup;
    title: string = "Create";
    employeeID: number = 0;
    errorMessage: any;
    qualificationList: Array<any> = [];
    experienceList: Array<any> = [];
    languagesList: Array<any> = [];
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _employeeService: EmployeeService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.employeeID = this._avRoute.snapshot.params["id"];
        }
        this.employeeForm = this._fb.group({
            employeeID: 0,
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            contactno: ['', [Validators.required]],
            address: ['', [Validators.required]],
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            experience: ['', [Validators.required]],
            codingLanguages: ['', [Validators.required]],
        })
    }
    ngOnInit(): void {

        this._employeeService.getQualificationList().subscribe(
            data => this.qualificationList = data)

        this._employeeService.getexperinceList().subscribe(
             data => this.experienceList=data
        )

        this._employeeService.getlanguages().subscribe(
            data => this.languagesList = data)

        if (this.employeeID > 0) {
            this.title = "Edit";
            this._employeeService.getEmployeeById(this.employeeID)
                .subscribe(resp => this.employeeForm.setValue(resp), error => this.errorMessage = error)
        }

        console.log(this.experienceList);

        console.log(this.qualificationList);
    }

    save() {
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeForm.value).subscribe((data) => {
                this._router.navigate(['/fetch-employee']);
            }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe((data) => { this._router.navigate(['/fetch-employee']);}, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-employee']);
    }

    get firstName() {
        return this.employeeForm.get('firstName');
    }
    get lastName() {
        return this.employeeForm.get('lastName');
    }
    get email() {
        return this.employeeForm.get(' email');
    }
    get contactno() {
        return this.employeeForm.get('contactno');
    }
    get address() {
        return this.employeeForm.get('address');
    }
    get userName() {
        return this.employeeForm.get('userName');
    }
    get password() {
        return this.employeeForm.get('password');
    }
    get gender() {
        return this.employeeForm.get('gender');
    }
    get qualification() {
        return this.employeeForm.get('qualification');
    }
    get experience() {
        return this.employeeForm.get('experience');
    }
    get codingLanguages() {
        return this.employeeForm.get('codingLanguages');
    }
}