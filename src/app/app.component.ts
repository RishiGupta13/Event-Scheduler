import { Component } from '@angular/core';
import {View,EventSettingsModel} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  template:'<ejs-schedule [eventSettings]="eventObject" [selectedDate]="setDate"></ejs-schedule>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event-Scheduler';
  public setDate:Date=new Date(2023,3,15);
  // public setView:View='Workweek';
  public eventObject:EventSettingsModel={
    dataSource:[{
      Subject:"Study React",
      StartTime:new Date(2023,0,4,0),
      EndTime:new Date(2023,0,10,6,0),
      IsReadonly:true,
      // IsBlock:true  : this will block the cell and will not let us add anything
      // RecurrenceRule:"FREQ-DAILY;INTERVAL=1;COUNT=10"
    }],
    // fields:{
    //   subject:{name:'EventTitle'},
    //   startTime:{name:'EventStart'},
    //   endTime:{name:'EventEnd'}
    // }
  }

}
