import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/service/global';
import { HttpService } from 'src/app/shared/service/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _toastr: ToastrService,
    private _httpService: HttpService, private router: Router) { }

  formInit() {
    this.registerForm = this._fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formInit();
  }

  get f() {
    return this.registerForm.controls;
  }

  save() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this._httpService.post(environment.BASE_API_PATH + "CustomerMaster/Save", this.registerForm.value).subscribe(res => {
      if (res.isSuccess) {
        this._toastr.success("Your Registration has been success", "Registration");
        this.registerForm.reset();
        this.submitted = false;
        this.router.navigate(['/pages/login']);
      } else {
        this._toastr.error(res.errors[0], "Contact Us");
      }
    });
  }

}
