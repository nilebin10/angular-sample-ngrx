import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "employees",
    component: EmployeeListComponent,
    children: [
      { path: ":id", component: EmployeeDetailsComponent },
      { path: ":id/edit", component: EmployeeEditComponent },
    ],
  },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
