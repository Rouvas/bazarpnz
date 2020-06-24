import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { auth } from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';

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


  database:any;

  userId:any;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalRef: BsModalRef;

  constructor(public auth: AngularFireAuth, public db: AngularFireDatabase, private modalService: BsModalService) { 
    this.auth.authState.subscribe(user => {
      if(user) this.userId = user.uid
      if (user) this.email = user.email
      console.log(this.userId);
      this.getAccount(this.userId);
    }) 
  }

  ngOnInit() {
  }

  getAccount(userid){
    this.db.object('accounts/' + userid).valueChanges().subscribe(val => {
    
     this.database = val; // Полная бд
      console.log(this.database);
      this.role = this.database['role'];
      if (this.role == 0) {this.rolename = 'Пользователь'} else if (this.role==1){this.rolename='Редактор'} else {this.rolename = 'Администратор'}
      this.number = this.database['number'];
      this.name = this.database['name'];
   });
   
  }

}
