import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email: string;
  password: string;
  mask = ['+','7',' ','(',/[1-9]/, /\d/, /\d/,')' ,' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/];

  isloggined: any;
  isregistered:any;
  isrecovered:any;

  condition: boolean=true;
     
  toggle(){
      this.condition=!this.condition;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalRef: BsModalRef;

  constructor(public auth: AngularFireAuth, public db: AngularFireDatabase, private modalService: BsModalService) { }

  ngOnInit() {
  }

  onLogin(email:string,password:string){
  
    let promise = new Promise((resolve, reject) => {
    
      this.auth.auth.signInWithEmailAndPassword(email, password).then(
        result => {this.isloggined =1 ; window.location.reload()},
        error => this.isloggined = 2 
      );
    
    });
    
     
      
  }

  onRegister(email:string,password:string,name:string,number:string){
  
    console.log(email,password,name,number)
     let promise = new Promise((resolve, reject) => {
    
      this.auth.auth.createUserWithEmailAndPassword(email, password).then(
        result => {
          this.isregistered =1 ; 
          console.log(result.user.uid);
          let updates = {};
          updates[result.user.uid] = { name : name, number : number, role : 0 };
          this.db.object('accounts').update(updates);
        },
        error => this.isregistered = 2 
       );
    
     });
   
  }

  onRecovered(email){
    console.log(email);
    this.auth.auth.sendPasswordResetEmail(email).then(
      result => {
        this.isrecovered=1;
      },
      error => this.isrecovered =2
    )
  }

}
