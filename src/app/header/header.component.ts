import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../components/login/login.component';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog, private userService: UserService, private router: Router) { }

  openDialogSesion() {
    this.dialog.open(LoginComponent)
  }

  getUsername(): string {
    return this.userService.getLoggedUser();
  }

  backToHomePage() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }
}
