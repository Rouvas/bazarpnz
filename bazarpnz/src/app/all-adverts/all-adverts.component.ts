import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all-adverts',
  templateUrl: './all-adverts.component.html',
  styleUrls: ['./all-adverts.component.css']
})
export class AllAdvertsComponent implements OnInit {

  id: number;
  cdatabase: {};
  countbase: {};
  adverts: {
  };

  

  countadv = 0;

  objectKeys = Object.keys;

  constructor(private activateRoute: ActivatedRoute, public db: AngularFireDatabase, private SpinnerService: NgxSpinnerService) {
    this.SpinnerService.show();
    this.id = activateRoute.snapshot.params['id'];
    this.getCategory(this.id);
    this.getCountAdverts(this.id);
    this.getAdverts(this.id);
  }

  ngOnInit() {

  }

  getCategory(id) {
    this.db.object('category/' + this.id).valueChanges().subscribe(val => {

      this.cdatabase = val; // Полная бд


    });

  }

  getAdverts(id){
    this.db.object('adverts').valueChanges().subscribe(val => {
    
     this.adverts = val; // Полная бд

     let sorting: Array<Object>;
     for (let i of this.objectKeys(this.adverts)){
      if (this.adverts[i]['category']!=id || this.adverts[i]['status'] != 1){
        delete this.adverts[i];
      }
     }
   
     this.SpinnerService.hide();

   });
   
  }

  getCountAdverts(id) {
    this.db.object('adverts').valueChanges().subscribe(val => {

      this.countbase = val; // Полная бд

      let count = 0;
      for (let i of this.objectKeys(this.countbase)) {
        if (this.countbase[i]['category'] == id) {
          count = count + 1;

        }
      }

      this.countadv = count;

    });

  }


}
