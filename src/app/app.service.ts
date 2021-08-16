import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

  authenticate(user: any) {
    const body: any = {
      ...user,
    };
    return this.http.post(`${environment.API_URI}/authenticate`, body);
  }

  getEmployeeDetails() {
    return this.http.get(`${environment.API_URI}/employees`);
  }

  addEmployee(employee: any) {
    const body = {
      employee,
    };
    return this.http.post(`${environment.API_URI}/employees`, body);
  }

  updateEmployee({ employee, id }: any) {
    const body = {
      employee,
      id,
    };
    return this.http.post(`${environment.API_URI}/employees`, body);
  }

  deleteEmployee(id: any) {
    const body = {
      id,
    };
    return this.http.delete(`${environment.API_URI}/employees`, { body });
  }
}
