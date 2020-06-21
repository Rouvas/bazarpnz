import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.css']
})
export class LkComponent implements OnInit {

  email: string;
  password: string;
  mask = ['+','7',' ','(',/[1-9]/, /\d/, /\d/,')' ,' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/];

  isloggined: any;
  isregistered:any;
  isrecovered:any;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalRef: BsModalRef;


  constructor(public auth: AngularFireAuth, public db: AngularFireDatabase, private modalService: BsModalService) { }

  ngOnInit() {
  }

}
