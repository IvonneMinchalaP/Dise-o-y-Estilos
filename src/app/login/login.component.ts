import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/dto/credentials'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private userService: UserService) { }

  usuarioLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    let userToAuthenticate: Credentials = {
      username: this.usuarioLogin.value.username,
      password: this.usuarioLogin.value.password
    }

    if (this.userService.logIn(userToAuthenticate)) {
      this.router.navigate(['/cliente']);
      this.dialogRef.close();
    } else {
      this.router.navigate(['/error']);
      this.dialogRef.close();
      console.log("Ha ocurrido un error en la autenticación")
    }
  }


}