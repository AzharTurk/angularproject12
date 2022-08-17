import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/service/http.service';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  msg: string = "";

  constructor(private _fb: FormBuilder, private _toastr: ToastrService,
    private _httpService: HttpService, private _authService: AuthService) { }

  formInit() {
    this.loginForm = this._fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formInit();
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this._httpService.post(environment.BASE_API_PATH + "CustomerMaster/Login/", this.loginForm.value).subscribe(res => {
        if (res.isSuccess) {
          this._authService.Auth(res.data);
          this.msg = this._authService.getMessage();
          if (this.msg != "") {
            this._toastr.error(this.msg, "Login");
            this.loginForm.reset();
          }
        } else {
          this._toastr.error("Invalid Credentials !!", "Login");
          this.loginForm.reset();
        }
      });
    } else {
      this._toastr.error("Login Failed !!", "Login");
      this.loginForm.reset();
    }
  }
}
