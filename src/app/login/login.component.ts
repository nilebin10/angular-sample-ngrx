import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import * as userAction from "../actions/user.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  error: any;
  userForm = this.fb.group({
    username: "",
    password: "",
  });
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.store.dispatch(
      userAction.loginUsers({ user: { ...this.userForm.value } })
    );
  }
}
