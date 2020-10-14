import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, share, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'city', 'companyName', 'website'];
  loading$: Observable<boolean>;
  users$: Observable<User[]>;
  viewUserListing = environment?.features?.VIEW_USER_LISTING;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if (this.viewUserListing) {
      this.users$ = this.userService.getUsers().pipe(
        share()
      );

      this.loading$ = this.users$.pipe(
        mapTo(false),
        startWith(true)
      );
    }
  }
}
