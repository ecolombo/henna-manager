import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-meetings',
  templateUrl: './manage-meetings.component.html',
  styleUrls: ['./manage-meetings.component.css']
})
export class ManageMeetingsComponent {

  allClients = [
    {name: 'Select participant to add' }, 
    {name: 'James Bond' },
    {name: 'Austin Powers' }
  ]; 
  
  participants = [
    { name: 'James Bond' }
  ];

  addMeetingForm = new FormGroup(
    {
      title: new FormControl(""),
      location: new FormControl(""),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      clientToAdd: new FormControl(this.allClients)
    }
  );



  addMeetingToDB() {}

}
