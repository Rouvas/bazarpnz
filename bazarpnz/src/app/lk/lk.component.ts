import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

const numberMask = createNumberMask({
  prefix: '',
  suffix: ' $' // This will put the dollar sign at the end, with a space.
})

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.css']
})
export class LkComponent implements OnInit {



  email: string;
  password: string;
  name : string;
  number : string;
  role : number;
  rolename : string = 'Loading';
  place : string;
  mask = ['+','7',' ','(',/[1-9]/, /\d/, /\d/,')' ,' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/];
  maskPrice = [' ',/\d/,'₽'];

  readcategory: any;
  readname: any;
  readprice: any;
  readdate: any;

  thisname:any;
  thisnumber:any;
  isloggined: any;
  isregistered:any;
  isrecovered:any;
  isnewadvert:any;
  ischanged:any;

  cdatabase:any;
  database:any;
  pdatabase:any;
  myadverts= {};

  categories:any;
  places:any;

  userId:any;
  
  objectKeys = Object.keys;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalRef: BsModalRef;

  constructor(public auth: AngularFireAuth,private router: Router, public db: AngularFireDatabase, private modalService: BsModalService, private SpinnerService: NgxSpinnerService) { 
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
 this.getCategory();
 this.getPlaces();

   
  }

  onNewAdvert(category:string,newadvertname:string,place:string,price:number,additional:string){
    
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
                 
    let myDate = new Date();
    let fullDate =  myDate.getDate() + " " + months[myDate.getMonth()] + 
                    " " + myDate.getFullYear() + ", " + days[myDate.getDay()];


    let obj = {
      category: category,
      date: fullDate,   
      name: newadvertname,
      owner: this.userId,
      place: place,
      price: price,
      status: 0,
      text: additional 
    }

    console.log(obj);
    this.db.list('adverts').push(obj);
    this.isnewadvert = 1;
    
  }

  onChangeData(thisname,thisnumber){
    let obj = {
      name:thisname,
      number:thisnumber
    }
    this.db.object('accounts/'+this.userId).update(obj);
    this.ischanged = 1;
  }

  getCategory(){
    this.db.object('category').valueChanges().subscribe(val => {
    
     this.cdatabase = val; // Полная бд
    this.categories = this.objectKeys(this.cdatabase);

   });
   
  }

  getPlaces(){
    this.db.object('place').valueChanges().subscribe(val => {
    
     this.pdatabase = val; // Полная бд
    this.places = this.objectKeys(this.pdatabase);

   });
   
  }

  getAdverts(userid){
    this.db.object('adverts').valueChanges().subscribe(val => {
    
     this.myadverts = val; // Полная бд

     let sorting: Array<Object>;
     for (let i of this.objectKeys(this.myadverts)){
      if (this.myadverts[i]['owner']!=userid){
        delete this.myadverts[i];
      }
     }
   
    console.log(this.myadverts);

   });
   
  }

  blocked = 0;

  getAccount(userid){
    this.db.object('accounts/' + userid).valueChanges().subscribe(val => {
    
     this.database = val; // Полная бд
      console.log(this.database);

      this.blocked = this.database['blocked'];
      if (this.blocked == 1) {this.router.navigate(['/error']);}

      this.role = this.database['role'];
      if (this.role == 0) {this.rolename = 'Пользователь'} else if (this.role==1){this.rolename='Редактор'} else {this.rolename = 'Администратор'}
      this.number = this.database['number'];
      this.thisnumber = this.number;
      this.name = this.database['name'];
      this.thisname = this.name;
      this.SpinnerService.hide();
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
