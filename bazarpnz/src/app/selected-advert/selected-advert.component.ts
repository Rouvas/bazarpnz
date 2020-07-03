import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-selected-advert',
  templateUrl: './selected-advert.component.html',
  styleUrls: ['./selected-advert.component.css']
})
export class SelectedAdvertComponent implements OnInit, OnDestroy {
  
  modalRef: BsModalRef;

  id: string;
  cdatabase: {};
  udatabase: {};
  database: {};
  objectKeys = Object.keys;

  getSee = {};

  categories = [];
  catbase = {};
  places = [];
  plbase = {}

  getCategory(){
    this.db.object('category').valueChanges().subscribe(val => {
    
     this.catbase = val; // Полная бд
    this.categories = this.objectKeys(this.catbase);

   });
   
  }

  getPlaces(){
    this.db.object('place').valueChanges().subscribe(val => {
    
     this.plbase = val; // Полная бд
    this.places = this.objectKeys(this.plbase);

   });
   
  }

  //All about selected advert 
  category: string;
  date: string;
  name: string;
  owner: string;
  place: string;
  price: number;
  text: any;
  ownername: string;
  ownernumber: string;
  ownermail: string;
  advertid: string;
  status:string;

  abusetext:any;

  userId:any;

  statusselector:any;


  myrole: any;

  isnewabuse:any;

  condition = false;
  conditionwho = false;

  constructor(private activateRoute: ActivatedRoute, public db: AngularFireDatabase, private router: Router, public auth: AngularFireAuth, private modalService: BsModalService, private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
    this.id = activateRoute.snapshot.params['id'];
    this.getAdvert(this.id);

    this.auth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    }) 
    
   }

   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onDeleteAdvert(id){
    this.db.object('adverts/' + id).remove();
    this.router.navigate(['/']);
  }

  onChangeStatus(id,status){
   let obj={
    status: status
    }

    this.db.object('adverts/'+id).update(obj);

    this.modalRef.hide()
  }

  ngOnInit() {
    this.getCategory();
    this.getPlaces();
  }

  ngOnDestroy() {
    this.onChangeData();
   window.location.reload();
  }

  isnewadvert:any;
  onEditAdvert(name,price,category,place,text){

    let obj = {
      name: name,
      price: price,   
      category: category,
      place: place,
      status: 0,
      text: text 
    }

    this.db.object('adverts/'+this.advertid).update(obj);
    this.isnewadvert = 1;
    
  }

  addAbuse(abusetext){

    let obj = {
       text: abusetext,
       advertid: this.advertid,
       bywho: this.userId,
       status:0,
       name: this.name
    }

    console.log(obj);
    this.db.list('abuses').push(obj);
    this.isnewabuse = 1;
    
  }

  checkPerson(user,advert){

      
      if (user == null) { if(this.cdatabase['status'] != 1) {this.router.navigate(['/Sorry']);}} 
      
     if (user != null) {

      this.db.object('accounts/' + this.userId).valueChanges().subscribe(val => {
    
        this.database = val; // Полная бд
      
        this.myrole = this.database['role'];
       

        if(this.cdatabase['status'] != 1){
          if (this.userId != this.cdatabase['owner'] && this.myrole == 0){
            this.router.navigate(['/Sorry']);
    
          }
        }

     if (this.userId == this.cdatabase['owner'] || this.myrole > 0){
        this.condition = true;
        if (this.myrole > 0){
          this.conditionwho = true;
        }
      }

     
      this.SpinnerService.hide();
      });
       
 

      }






    // if (this.userId == this.cdatabase['owner']){
    //   console.log('Это твое объявление');
    // }

    

  }

  

  onChangeData(){
    this.db.object('counter').valueChanges().subscribe(val => {
      this.getSee = val; 
      this.getSee['all'] = this.getSee['all'] + 1;
      this.db.object('counter').update(this.getSee);
    });
    // count = count + 1;
    // this.db.object('counter').update(count);
  }

  getAdvert(id){
    this.db.object('adverts/'+ this.id).valueChanges().subscribe(val => {
      if (val == null ) {this.router.navigate(['/Sorry']);}
     this.cdatabase = val; // Полная бд
          this.category = this.cdatabase['category'];
          this.name = this.cdatabase['name'];
          this.price = this.cdatabase['price'];
          this.date = this.cdatabase['date'];
          this.place = this.cdatabase['place'];
          this.advertid = this.id;
          this.text = this.cdatabase['text'];
          this.status = this.cdatabase['status'];
          if (this.status == '0') {this.status = 'Проверка'} else if (this.status == '1') {this.status = 'Активно'} else {this.status='Закрыто'}

     

     this.db.object('accounts/'+ this.cdatabase['owner']).valueChanges().subscribe(val => {
      this.udatabase = val; // Полная бд
     
      this.ownername = this.udatabase['name'];
      this.ownernumber = this.udatabase['number'];
      this.ownermail = this.udatabase['email'];
      this.checkPerson(this.udatabase,this.cdatabase);
    });
    
   });
   
  }

  getAccount(userid){
    this.db.object('accounts/' + userid).valueChanges().subscribe(val => {
    
     this.database = val; // Полная бд

    

   });
   
  }  
}
