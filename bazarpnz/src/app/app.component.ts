import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bazarpnz';

  constructor(public auth: AngularFireAuth, private router: Router) {}
  onLogout() {
    this.auth.auth.signOut();
    this.router.navigate(['/'])
  }

  onSetup(){
    this.router.navigate['/settings'];
  }
  
}
