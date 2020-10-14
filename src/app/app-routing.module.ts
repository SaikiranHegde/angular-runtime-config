import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListingComponent } from './listing/containers/user-listing/user-listing.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/listing', pathMatch: 'full'
  },
  {
    path: 'listing', component: UserListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
