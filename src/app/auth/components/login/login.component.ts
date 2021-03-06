import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthCredential } from '../../models/authCredential';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.min(3)]),
    password : new FormControl('', [Validators.required, Validators.min(8)]),
  });

  constructor(private router: Router, private authService: AuthService) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) { 
        this.router.navigate(['/home']);
    } }

  ngOnInit(): void {
  }

  onSubmit(){
  
    this.authService.login(
      new AuthCredential(
         this.loginform.get('username')?.value,
         this.loginform.get('password')?.value
       ))
        .subscribe(
          res => {
            console.log(res.data.jwt);
          }
        );
  }

}
