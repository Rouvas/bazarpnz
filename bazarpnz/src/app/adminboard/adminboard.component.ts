import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})


export class AdminboardComponent implements OnInit {
  modalRef: BsModalRef;

  //Для фильтрации
  searchAdv ='';
  searchAcc = '';
  searchCat = '';
  searchPla = '';
  searchNews = '';
  searchAbu = '';

  adverts = [];
  advertsval = {};

  users = [];
  usersval = {};

  categories = [];
  categoriesval = {};

  userId: any;
  email: any;

  database: any;
  password: string;
  name: string;
  number: string;
  role: number;
  rolename: string;
  place: string;
  mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  thisname: string;
  thisnumber: string;

  openedacc: string;

  alladverts = {};
  countadverts = {};

  allaccounts: Number;
  allcategory = {};

  objectKeys = Object.keys;





  resultsLength3: any;

  constructor(public db: AngularFireDatabase, public auth: AngularFireAuth, private modalService: BsModalService, private router: Router, private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
    this.getUsers();
    this.getAccounts();
    this.getAdverts();
    this.getCategories();


    this.auth.authState.subscribe(user => {
      if (user) this.userId = user.uid
      if (user) this.email = user.email

      this.getAccount(this.userId);

    })

  }

  allabuses = {}
  abuses = [];

  advertsforabuse = {}

  getAbuses() {
    this.db.object('abuses').valueChanges().subscribe(val => {

      this.allabuses = val; // Полная бд     



      for (let i of this.objectKeys(this.allabuses)) {
        if (this.allabuses[i]['status'] == 0) { this.allabuses[i]['status'] = 'Проверка' } else if (this.allabuses[i]['status'] == 1) { this.allabuses[i]['status'] = 'Блокировка публ.' } else { this.allabuses[i]['status'] = 'Блок.' }

      }



      let count = 0;
      for (let i of this.objectKeys(this.allabuses)) {
        this.abuses[count] = { name: this.allabuses[i]['name'], status: this.allabuses[i]['status'] };
        count = count + 1;

      }

    });
  }

takenaccount = {};
accname:any;
accnumber:any;
accrole:any;
accemail:any;
isupdateacc = 0;

  openModal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template);
    this.openedacc = id;
   
    if (id != undefined){
      this.db.object('accounts/'+ id).valueChanges().subscribe(val => {

        this.takenaccount = val;
        this.accname = this.takenaccount['name'];
        this.accnumber = this.takenaccount['number'];
        this.accrole = this.takenaccount['role'];
        if(this.takenaccount['role'] == 0) {this.accrole = 'Пользователь'} else if (this.takenaccount['role'] == 1) {this.accrole = 'Редактор'} else {this.accrole = 'Администратор'}
        this.accemail = this.takenaccount['email'];

        
  
      });
    }
  }

  deleteAccount(id){
   
    let obj = {
      blocked: 1
    }
    this.db.object('accounts/'+ id).update(obj);
  }

  onEditAcc(id,name,number,role){

    if(role == 'Пользователь') {role = 0} else if (role == 'Редактор') {role = 1} else {role = 2}

    let obj = {
      name: name,
      number: number,
      role: role,
    }
 
    this.db.object('accounts/'+ id).update(obj);
  }

  getCountAdverts() {
    this.db.object('adverts').valueChanges().subscribe(val => {

      this.countadverts = val;

      for (let i of this.objectKeys(this.countadverts)) {
        if (this.countadverts[i]['status'] != 1) {
          delete this.countadverts[i];
        }
      }

    });
  }

  //  True False for сортировка. Всех , желающих остаться в живых, просьба не читать далее код

  //Объявления
  data1 = false;
  data2 = false;
  data3 = false;
  //Аккаунты
  data4 = false;
  data5 = false;
  //Категории
  data6 = false;
  //Районы
  data7 = false;
  //Жалобы
  data8 = false;
  data9 = false;

  Click(what, id) {
    if (what == 1) {
      if (id == 1) {
        if (this.data1 == false) {
          this.adverts.sort((prev, next) => {
            if (prev.category < next.category) return -1;
            if (prev.category < next.category) return 1;
          });
          this.data1 = true;
        } else {
          this.adverts.sort((prev, next) => {
            if (prev.category > next.category) return -1;
            if (prev.category > next.category) return 1;
          });
          this.data1 = false;
        }
      } else if (id == 2) {
        if (this.data2 == false) {
          this.adverts.sort((prev, next) => {
            if (prev.name < next.name) return -1;
            if (prev.name < next.name) return 1;
          });
          this.data2 = true;
        } else {
          this.adverts.sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name > next.name) return 1;
          });
          this.data2 = false;
        }

      }
      // else if (id == 3) {
      //   if (this.data3 == false) {
      //     this.adverts.sort((prev, next) => {
      //       if (prev.status < next.status) return -1;
      //       if (prev.status < next.status) return 1;
      //     });
      //     this.data3= true;
      //   } else {
      //     this.adverts.sort((prev, next) => {
      //       if (prev.status > next.status) return -1;
      //       if (prev.status > next.status) return 1;
      //     });
      //     this.data3= false;
      //   }

      // }

    } else
      if (what == 2) {
        if (id == 1) {
          if (this.data4 == false) {
            this.accs.sort((prev, next) => {
              if (prev.id < next.id) return -1;
              if (prev.id < next.id) return 1;
            });
            this.data4 = true;
          } else {
            this.accs.sort((prev, next) => {
              if (prev.id > next.id) return -1;
              if (prev.id > next.id) return 1;
            });
            this.data4 = false;
          }
        } else if (id == 2) {
          if (this.data5 == false) {
            this.accs.sort((prev, next) => {
              if (prev.name < next.name) return -1;
              if (prev.name < next.name) return 1;
            });
            this.data5 = true;
          } else {
            this.accs.sort((prev, next) => {
              if (prev.name > next.name) return -1;
              if (prev.name > next.name) return 1;
            });
            this.data5 = false;
          }
  
        }

      } else
      if (what == 3) {
        if (id == 1) {
          if (this.data6 == false) {
            this.categories.sort((prev, next) => {
              if (prev.name < next.name) return -1;
              if (prev.name < next.name) return 1;
            });
            this.data6 = true;
          } else {
            this.categories.sort((prev, next) => {
              if (prev.name > next.name) return -1;
              if (prev.name > next.name) return 1;
            });
            this.data6 = false;
          }
        } 

      } else
      if (what == 4) {
        if (id == 1) {
          if (this.data7 == false) {
            this.allplaces.sort((prev, next) => {
              if (prev.name < next.name) return -1;
              if (prev.name < next.name) return 1;
            });
            this.data7 = true;
          } else {
            this.allplaces.sort((prev, next) => {
              if (prev.name > next.name) return -1;
              if (prev.name > next.name) return 1;
            });
            this.data7 = false;
          }
        } 

      } else
      if (what == 6) {
        if (id == 1) {
          if (this.data8 == false) {
            this.abuses.sort((prev, next) => {
              if (prev.name < next.name) return -1;
              if (prev.name < next.name) return 1;
            });
            this.data8 = true;
          } else {
            this.abuses.sort((prev, next) => {
              if (prev.name > next.name) return -1;
              if (prev.name > next.name) return 1;
            });
            this.data8 = false;
          }
        } else if (id == 2) {
          if (this.data9 == false) {
            this.abuses.sort((prev, next) => {
              if (prev.status < next.status) return -1;
              if (prev.status < next.status) return 1;
            });
            this.data9 = true;
          } else {
            this.abuses.sort((prev, next) => {
              if (prev.status > next.status) return -1;
              if (prev.status > next.status) return 1;
            });
            this.data9 = false;
          }
  
        }

      }
  }

  getAdverts() {
    this.db.object('adverts').valueChanges().subscribe(val => {

      this.alladverts = val; // Полная бд

      for (let i of this.objectKeys(this.alladverts)) {
        if (this.alladverts[i]['status'] == 0) { this.alladverts[i]['status'] = 'Проверка' } else if (this.alladverts[i]['status'] == 1) { this.alladverts[i]['status'] = 'Опубл.' } else { this.alladverts[i]['status'] = 'Блок.' }
      }

      let count = 0;
      for (let i of this.objectKeys(this.alladverts)) {
        this.adverts[count] = { category: this.alladverts[i]['category'], name: this.alladverts[i]['name'], status: this.alladverts[i]['status'], id: i };
        count = count + 1;
      }



    });
  }

  allaccs = {};
  accs = [];

  getAccounts() {
    this.db.object('accounts').valueChanges().subscribe(val => {

      this.allaccs = val; // Полная бд

      for (let i of this.objectKeys(this.allaccs)) {
        if (this.allaccs[i]['role'] == 0) { this.allaccs[i]['role'] = 'Пользователь' } else if (this.allaccs[i]['role'] == 1) { this.allaccs[i]['role'] = 'Редактор' } else { this.allaccs[i]['role'] = 'Админ' }
      }

      let count = 0;
      for (let i of this.objectKeys(this.allaccs)) {
        this.accs[count] = { category: this.allaccs[i]['category'], name: this.allaccs[i]['name'], status: this.allaccs[i]['status'], id: i };
        count = count + 1;
      }


    });
  }

  anyAlerts = {};
  Alerts = [];

  getAlerts() {
    this.db.object('alerts').valueChanges().subscribe(val => {

      this.anyAlerts = val;
      let count = 0;
      for (let i of this.objectKeys(this.anyAlerts)) {
        this.Alerts[count] = { msg: this.anyAlerts[i]['msg'] };
        count = count + 1;

      }
    });

  }

  getCategories() {
    this.db.object('category').valueChanges().subscribe(val => {

      this.allcategory = val; // Полная бд
      let count = 0;
      for (let i of this.objectKeys(this.allcategory)) {
        this.categories[count] = { name: i };
        count = count + 1;
      }



      this.resultsLength3 = count;

    });

  }

  allplacesval = {};
  allplaces = [];



  getPlaces() {
    this.db.object('place').valueChanges().subscribe(val => {

      this.allplacesval = val; // Полная бд
      let count = 0;
      for (let i of this.objectKeys(this.allplacesval)) {
        this.allplaces[count] = { name: i };
        count = count + 1;
      }



    });

  }



  ngOnInit() {



    this.getCountAdverts();
    this.getAdverts();
    this.getCategories();
    this.getPlaces();
    this.getAlerts();
    this.getAbuses();
  }

  blocked = 0;

  getAccount(userid) {
    this.db.object('accounts/' + userid).valueChanges().subscribe(val => {

      this.database = val; // Полная бд

      this.blocked = this.database['blocked'];
      if (this.blocked == 1) {this.router.navigate(['/error']);}

      this.role = this.database['role'];
      if (this.role != 2) { this.router.navigate(['/lk']); }
      if (this.role == 0) { this.rolename = 'Пользователь' } else if (this.role == 1) { this.rolename = 'Редактор' } else { this.rolename = 'Администратор' }
      this.number = this.database['number'];
      this.thisnumber = this.number;
      this.name = this.database['name'];
      this.thisname = this.name;
      this.SpinnerService.hide();
    });

  }
  newcategory:any;
  newcategorytext:any;
  iscategoryadd = 0;

  addCategory(newcategory,newcategorytext){
    this.db.object('category/'+newcategory).set(newcategorytext);
    this.iscategoryadd = 1;
  }

  newplace:any;
  newplacetext = 'Пенза';
  isplaceadd = 0;
  
  addPlace(newplace,newplacetext){
    this.db.object('place/'+newplace).set(newplacetext);
    this.isplaceadd = 1;
  }

  newnewsstyle:any;
  newnewstext:any;
  isnewsadd = 0;
  
  addNews(text,style){
    let obj = {
      msg: text,
      type: style    
    }

    this.db.list('alerts').push(obj);
    this.isnewsadd = 1;
  }







  getUsers() {
    this.db.object('accounts').valueChanges().subscribe(val => {

      this.usersval = val; // Полная бд
      for (let i of this.objectKeys(this.usersval)) {
        if (this.usersval[i]['role'] == 0) { this.usersval[i]['role'] = 'Польз.' } else if (this.usersval[i]['role'] == 1) { this.usersval[i]['role'] = 'Редактор' } else { this.usersval[i]['role'] = 'Админ.' }
      }

      let count = 0;
      for (let i of this.objectKeys(this.usersval)) {
        this.users[count] = { name: this.usersval[i]['name'], id: i, role: this.usersval[i]['role'] };
        count = count + 1;
      }

      this.allaccounts = this.users.length;



    });

  }

}
