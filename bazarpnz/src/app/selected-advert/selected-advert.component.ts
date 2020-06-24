import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-selected-advert',
  templateUrl: './selected-advert.component.html',
  styleUrls: ['./selected-advert.component.css']
})
export class SelectedAdvertComponent implements OnInit {

  id: string;
  cdatabase: {};
  udatabase: {};
  objectKeys = Object.keys;

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


  constructor(private activateRoute: ActivatedRoute, public db: AngularFireDatabase) {
    this.id = activateRoute.snapshot.params['id'];
    this.getAdvert(this.id)
   }

  ngOnInit() {
  }

  getAdvert(id){
    this.db.object('adverts/'+ this.id).valueChanges().subscribe(val => {
     this.cdatabase = val; // Полная бд
          this.category = this.cdatabase['category'];
          this.name = this.cdatabase['name'];
          this.price = this.cdatabase['price'];
          this.date = this.cdatabase['date'];
          this.place = this.cdatabase['place'];
          this.advertid = this.id;
          this.text = this.cdatabase['text'];



     this.db.object('accounts/'+ this.cdatabase['owner']).valueChanges().subscribe(val => {
      this.udatabase = val; // Полная бд
      console.log(this.udatabase);
      this.ownername = this.udatabase['name'];
      this.ownernumber = this.udatabase['number'];
      this.ownermail = this.udatabase['email'];
      
    });
   });
   
  }
}
