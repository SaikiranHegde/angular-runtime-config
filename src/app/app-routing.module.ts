import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListingComponent } from './listing/containers/user-listing/user-listing.component';


const routes: Routes = [
  {
    path: 'listing', component: UserListingComponent
  },
  {
    path: '', redirectTo: '/listing', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
