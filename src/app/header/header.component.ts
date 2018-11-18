import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal'
import { $ } from 'protractor';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('logoutModal') public modal:ModalDirective;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogout(){
    this.router.navigate(['login']);
   
    }

}
