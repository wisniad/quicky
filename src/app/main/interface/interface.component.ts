import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  constructor(private db: DatabaseService,
    private router: Router) { }

  ngOnInit() {
    this.db.loadDataFromLocalStorage();
  }

}
