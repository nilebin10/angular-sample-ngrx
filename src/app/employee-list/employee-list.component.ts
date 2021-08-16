import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

export interface EmployeeList {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  birth_date: Date;
  hire_date: Date;
  dept_no: number;
  dept_name: string;
  manager_name: string;
  emp_id: string;
}


@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: [],
})
export class EmployeeListComponent implements OnInit {
  dataSource: EmployeeList[];
  displayedColumns: string[] = ['employee-id', 'employee-firstname', 'employee-lastname', 'employee-email','employee-gender',
  'employee-birthdate','employee-hiredate','employee-deptno','employee-deptname','employee-managername','employee-empid'];
  constructor(private httpSvc: AppService) {
    this.dataSource = [];
  }

  ngOnInit(): void {
    this.httpSvc.getEmployeeDetails().subscribe((res:any)=>{
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }
}
