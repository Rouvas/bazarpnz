import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedValue: string;
  selectedOption: any;

  objectKeys = Object.keys;

  Search: any[] = [{}];
  takeAdvert = {};

  onSelect(event: TypeaheadMatch): void {
   this.router.navigate(
    ['/advert', event.item['id']]
);
  }

  getAdverts(){
    this.db.object('adverts').valueChanges().subscribe(val => {
    
     this.takeAdvert = val; // Полная бд
      let count = 0;
     for (let i of this.objectKeys(this.takeAdvert)){
      this.Search[count] = {name: this.takeAdvert[i]['name'], id: i};
      count = count + 1;
     }
   });
   
   
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  modalRef: BsModalRef;

  constructor(public auth: AngularFireAuth, private router: Router, private modalService: BsModalService, public db: AngularFireDatabase) {
   
  }
  ngOnInit(): void {
    this.getAdverts();
    console.log('Найн!!! Тут может появляться сервисная информация, возможно эксепшены, но тут уже привет Firebase ._.')
  }
  onLogout() {
    this.auth.auth.signOut();
    this.router.navigate(['/'])
  }

  onSetup(){
    this.router.navigate['/settings'];
  }

  onClose(link){
    window.location.assign(link);
    this.modalRef.hide();
  }
  
}
