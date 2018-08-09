import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EmployeeService } from './empService.service';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee.component';
import { createemployee } from './components/addemployee/addemployee.component';
import { AddEmployeeComponent } from './components/employee/addemployee.component';
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        FetchEmployeeComponent,
        createemployee,
        HomeComponent,
        AddEmployeeComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-employee', component: FetchEmployeeComponent },
            { path: 'register-employee', component: AddEmployeeComponent },
            { path: 'employee/edit/:id', component: AddEmployeeComponent},
            //{ path: 'register_employee', component: createemployee },  
          //  { path: 'employee/edit/:id', component: createemployee},  
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [EmployeeService] 
})
export class AppModuleShared {
}
