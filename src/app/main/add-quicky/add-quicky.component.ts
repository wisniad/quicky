import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
@Component({
  selector: 'app-add-quicky',
  templateUrl: './add-quicky.component.html',
  styleUrls: ['./add-quicky.component.scss']
})
export class AddQuickyComponent implements OnInit {
  public selectedTime = '18:33';

  // add new
  addNew = true;

  // settings
  timeSpaces = [5, 10, 15, 30, 45, 60];
  currentTime;


  // quicky creation
  timeForDecision: 5;
  addedTimes = [];
  quickyDescription = '';

  // current chosen time on clock
  chosenTime;

  constructor(private atp: AmazingTimePickerService,
    private db: DatabaseService) { }

  ngOnInit() {
    this.currentTime = new Date().getHours() + ':';
    if( new Date().getMinutes() < 10) {
      this.currentTime = this.currentTime + '0' + new Date().getMinutes()
    }
    else {
      this.currentTime = this.currentTime + new Date().getMinutes()

    }
  }

  addQuicky() {

    const quicky = {
      limit: this.timeForDecision,
      times: this.addedTimes,
      description: this.quickyDescription,

    }
    this.db.memory.quickyList.push(quicky);

    console.log('New quicky', quicky);

    console.log('all quickies', this.db.memory.quickyList);
    this.db.saveDataToLocalStorage();
  }

  open() {
    const amazingTimePicker = this.atp.open({
        time:  this.currentTime,
    });
    amazingTimePicker.afterClose().subscribe(time => {
        this.chosenTime = time;
    });
}

  addTime() {
    this.addedTimes.push(this.chosenTime);
    this.chosenTime = '';
  }

  removeTime(delTime: string) {
    this.addedTimes = this.addedTimes.filter( time => time !== delTime) 
  }
}
