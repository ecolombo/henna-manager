import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { ManageMeetingsComponent } from './manage-meetings/manage-meetings.component';

const routes: Routes = [
 { path: 'manageClients', component: ManageClientsComponent } ,
 { path: 'manageMeetings', component: ManageMeetingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
