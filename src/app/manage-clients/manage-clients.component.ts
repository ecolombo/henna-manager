import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.css']
})
export class ManageClientsComponent {

  addClientForm = new FormGroup(
    {
      fullName: new FormControl(""),
      email: new FormControl(""),
      streetAndNr: new FormControl(""),
      city: new FormControl(""),
      country: new FormControl(""),    
      phone: new FormControl("") 
    }

  );

  addClientToDB() {}

}
