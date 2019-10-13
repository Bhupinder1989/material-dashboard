import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-bootstrap-login-form",
  templateUrl: "./bootstrap-login-form.component.html",
  styleUrls: ["./bootstrap-login-form.component.scss"]
})
export class BootstrapLoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(): void {
    console.log("submit", this.loginForm.value);
  }
}
