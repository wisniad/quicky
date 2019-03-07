import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  memory = {
    quickyList : [],
  }

  constructor() { }


  saveDataToLocalStorage() {
    console.log('Data saved', this.memory);
    localStorage.setItem('quickyData', JSON.stringify(this.memory));
  }

  loadDataFromLocalStorage() {
    JSON.parse(localStorage.getItem('quickyData')) == null ? this.memory = {quickyList : [] } : this.memory = JSON.parse(localStorage.getItem('quickyData')) 
    console.log('Data loaded', this.memory);

  }
}
