import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./Advert.component.css']
})
export class AdvertComponent implements OnInit {

  ModalRef: BsModalRef;

  anyAlerts: any = [];
 

  database;
  

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

  time = {
    0: '8.00 - 8.40',
    1: '8.50 ― 9.30',
    2: '9.40 ― 10.20',
    3: '10.35 ― 11.15',
    4: '11.30 ― 12.10',
    5: '12.25 ― 13.05',
    6: '13.10 ― 13.50'
  };

  time2 = {
    0: '8.00 - 8.40',
    1: '8.50 - 9.30',
    2: '9.35 - 10.15',
    3: '10.20 - 11.00',
    4: '11.05 - 11.45',
    5: '11.50 - 12.30',
    6: '12.35 - 13.15'
  }



  constructor(private modalService: BsModalService, public db: AngularFireDatabase, 
    private SpinnerService: NgxSpinnerService
    ) { 
  }

  num: string = "";

  ngOnInit(): void {
    this.SpinnerService.show();
    this.getSchedule();
    this.getAlerts();

    this.day = new Date().getDay() -1;

    if (localStorage.getItem('class') == null) {this.SpinnerService.hide();}

  }

  getAlerts(){
    this.db.object('alerts').valueChanges().subscribe(val => {

      this.anyAlerts = val;
    });
    
  }

  getSchedule(){
    this.db.object('schedule').valueChanges().subscribe(val => {
    
     this.database = val; // Полная бд
     this.classes = this.objectKeys(val).sort();  // Список классов
     if (localStorage.getItem('class') != null) {
      this.num = localStorage.getItem('class');
      this.openRasp();
     this.SpinnerService.hide();
    }
    
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
  openRasp() {

    

    localStorage.setItem('class', this.num);

    if (Object.keys(this.database).includes(this.num.toLowerCase())) {  
      this.pageClass = this.num.toUpperCase().replace(/(\d+)/g, '$1 "');;
      this.classShedule = this.database[this.num.toLowerCase()]; 
      
      this.localst = this.pageClass.toLowerCase();
      

    } else {
      //Выводим модалку с ошибкой
      this.causeError = 1;
      localStorage.setItem('class', '');
      this.num = '';
    }

  }


}
