import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./Advert.component.css']
})
export class AdvertComponent implements OnInit {


  email: string;
  name : string;
  number : string;
  role : number;
  rolename : string;

  ModalRef: BsModalRef;

  anyAlerts: any = [];
 

  database;
  cdatabase = new Object();
  alladverts = new Object();
  
  userId:any;
  localst;
  pageClass: string;
  classShedule: Object = {};
  objectKeys = Object.keys;
  day;
  classes;
  causeError = 0;
  daysall = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]; // Дни недели
  daysallz = ["1","2","3","4","5","6"]; //Простите меня за это
  colour = "table-success"; //Для подстветки цвета




  constructor(private modalService: BsModalService, public db: AngularFireDatabase, 
    private SpinnerService: NgxSpinnerService, public auth: AngularFireAuth
    ) { 
      this.SpinnerService.show();
      this.auth.authState.subscribe(user => {
        if(user) this.userId = user.uid
        if (user) this.email = user.email
        this.getAccount(this.userId);
      }) 
      
  }

  num: string = "";

  ngOnInit(): void {
    
    // this.getSchedule();
    this.getAlerts();
    this.getCategory();
    this.getAdverts();
    this.day = new Date().getDay() -1;
    
    if (localStorage.getItem('class') == null) {this.SpinnerService.hide();}

  }

  getAlerts(){
    this.db.object('alerts').valueChanges().subscribe(val => {

      this.anyAlerts = val;
      this.SpinnerService.hide();
    });
    
  }

  getAdverts(){
    this.db.object('adverts').valueChanges().subscribe(val => {
    
     this.alladverts = val; // Полная бд

    //  this.classes = this.objectKeys(val).sort();  // Список классов
    //  if (localStorage.getItem('class') != null) {
    //   this.num = localStorage.getItem('class');
    //   this.openRasp();
    //  this.SpinnerService.hide();
    // }
    
   });
   
  }
 

  openModal(template: TemplateRef<any>) {
    this.ModalRef = this.modalService.show(template);
  }

  openError(template: TemplateRef<any>) {
    this.num = this.num.replace(/\s/g, '');
    if (Object.keys(this.database).includes(this.num.toLowerCase())) { } else { this.ModalRef = this.modalService.show(template); return false }
  }

  openTime() {
    this.pageClass = undefined;
  }
  // openRasp() {

    

  //   localStorage.setItem('class', this.num);

  //   if (Object.keys(this.database).includes(this.num.toLowerCase())) {  
  //     this.pageClass = this.num.toUpperCase().replace(/(\d+)/g, '$1 "');;
  //     this.classShedule = this.database[this.num.toLowerCase()]; 
      
  //     this.localst = this.pageClass.toLowerCase();
      

  //   } else {
  //     //Выводим модалку с ошибкой
  //     this.causeError = 1;
  //     localStorage.setItem('class', '');
  //     this.num = '';
  //   }

  // }

  getAccount(userid){
    this.db.object('accounts/' + userid).valueChanges().subscribe(val => {
    
     this.database = val; // Полная бд
      this.role = this.database['role'];
      if (this.role == 0) {this.rolename = 'Пользователь'} else if (this.role==1){this.rolename='Редактор'} else {this.rolename = 'Администратор'}
      this.number = this.database['number'];
      this.name = this.database['name'];
   });
   
  }

  getCategory(){
    this.db.object('category').valueChanges().subscribe(val => {
    
     this.cdatabase = val; // Полная бд
     console.log(this.cdatabase);

   });
   
  }


}
