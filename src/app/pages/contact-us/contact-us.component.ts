import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/service/global';
import { HttpService } from 'src/app/shared/service/http.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactusForm: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _toastr: ToastrService, private _httpService: HttpService) { }

  formInit() {
    this.contactusForm = this._fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      MobileNo: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      Message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formInit();
  }

  get f() {
    return this.contactusForm.controls;
  }

  save() {
    this.submitted = true;

    if (this.contactusForm.invalid) {
      return;
    }

    this._httpService.post(Global.BASE_API_PATH + "ContactUs/Save", this.contactusForm.value).subscribe(res => {
      if (res.isSuccess) {
        this._toastr.success("Your Message has been sent to sahosoft mall team", "Contact Us");
        this.contactusForm.reset();
        this.submitted = false;
      } else {
        this._toastr.error(res.errors[0], "Contact Us");
      }
    });

    // this._httpService.post(environment.BASE_API_PATH + "ContactUs/Save", this.contactusForm.value).subscribe(res => {
    //   if (res.isSuccess) {
    //     this._toastr.success("Your Message has been sent to sahosoft mall team", "Contact Us");
    //     this.contactusForm.reset();
    //   } else {
    //     this._toastr.error(res.errors[0], "Contact Us");
    //   }
    // });

  }

}
