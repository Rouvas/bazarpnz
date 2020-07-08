import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { auth } from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  email: string;
  password: string;
  name : string;
  number : string;
  role : number;
  rolename : string;
  mask = ['+','7',' ','(',/[1-9]/, /\d/, /\d/,')' ,' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/];

  isloggined: any;
  isregistered:any;
  isrecovered:any;

  whatabuse:any;
  abusetext:any;
  whocreateabuse:any;

  newadverts:any;
  abuses = {};
  adverts = {};

  abuseid:any;

  info = {};
  infouser = {};
  userid:any;

  database:any;

  uid:any;

  // objectKeys = Object.keys;
  objectKeys(obj){
    if (obj === null || obj === undefined){
      return []
    } else{
      return Object.keys(obj);
    }
  }

  userId:any;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openAbuseModal(template: TemplateRef<any>,id,uid) {
    this.modalRef = this.modalService.show(template);
    this.whatabuse = id;
    this.getAbuseUser(id,uid);
  }


  Abuse(status,abuseid,whatabuse){
    
    if (status == 0){

      let obj = {
        status:2
      }

      this.db.object('adverts/'+whatabuse['advertid']).update(obj);
      this.db.object('abuses/' + this.uid).remove();
      this.modalRef.hide();
    } else {
      this.db.object('abuses/' + this.uid).remove();
      this.modalRef.hide();
    }
  }

  getAbuseUser(id,uid){
    console.log(id);
    console.log('UID'+uid);
    this.uid = uid;
    this.abuseid = id['advertid'];
     this.abusetext = id['text'];

      this.userid = id['bywho'];

      this.db.object('accounts/'+[this.userid]).valueChanges().subscribe(val => {
        this.infouser = val;
  
        this.whocreateabuse = this.infouser['name']
  
      });


   
  }

  modalRef: BsModalRef;

  constructor(public auth: AngularFireAuth, public db: AngularFireDatabase, private modalService: BsModalService, private router: Router, private SpinnerService: NgxSpinnerService) { 
    this.SpinnerService.show();
    this.auth.authState.subscribe(user => {
      if(user) this.userId = user.uid
      if (user) this.email = user.email
      console.log(this.userId);
      this.getAccount(this.userId);
      this.getAdverts(this.userId);
    }) 
  }

  ngOnInit() {
    this.getAbuses();
  }

  blocked = 0;

  getAccount(userid){
    this.db.object('accounts/' + userid).valueChanges().subscribe(val => {
    
     this.database = val; // Полная бд
      console.log(this.database);
      this.role = this.database['role'];
      this.blocked = this.database['blocked'];
      if (this.blocked == 1) {this.router.navigate(['/error']);}
      if (this.role != 1) {this.router.navigate(['/lk']);}
      if (this.role == 0) {this.rolename = 'Пользователь'} else if (this.role==1){this.rolename='Редактор'} else {this.rolename = 'Администратор'}
      this.number = this.database['number'];
      this.name = this.database['name'];
      this.SpinnerService.hide();
   });
   
  }

  getAdverts(userid){
    this.db.object('adverts').valueChanges().subscribe(val => {
    
     this.newadverts = val; // Полная бд

     let sorting: Array<Object>;
     for (let i of this.objectKeys(this.newadverts)){
      if (this.newadverts[i]['status']!=0){
        delete this.newadverts[i];
      }
     }
   
    console.log(this.newadverts);

   });
   
  }

  getAllAdverts(){
    this.db.object('adverts').valueChanges().subscribe(val => {
    
      this.adverts = val; // Полная бд
 
    });
  }

  getAbuses(){
    this.db.object('abuses').valueChanges().subscribe(val => {
    
     this.abuses = val; // Полная бд

     this.getAllAdverts();
     
   
 

   });
   
  }

}
