import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private message: string = "";

  constructor(private router: Router) { }

  Auth(objUserDetails: any) {
    if (objUserDetails.UserId === 0) {
      this.loggedIn = false;
      this.message = "Please enter valid username and password !!";
      localStorage.removeItem("userDetails");
    } else {
      this.loggedIn = true;
      this.message = "";
      localStorage.setItem("userDetails", JSON.stringify(objUserDetails));
      this.router.navigate(['/home/shop']);
    }
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/home/shop']);
  }

  public getMessage(): string {
    return this.message;
  }

}
