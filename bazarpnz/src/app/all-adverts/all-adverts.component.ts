import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-all-adverts',
  templateUrl: './all-adverts.component.html',
  styleUrls: ['./all-adverts.component.css']
})
export class AllAdvertsComponent implements OnInit {

  id: number;
  cdatabase: {};

  constructor(private activateRoute: ActivatedRoute, public db: AngularFireDatabase) {
    this.id = activateRoute.snapshot.params['id'];
    this.getCategory(this.id)
   }

  ngOnInit() {

  }

  getCategory(id){
    this.db.object('category/'+ this.id).valueChanges().subscribe(val => {
    
     this.cdatabase = val; // Полная бд
     console.log(this.cdatabase);

   });
   
  }

}
