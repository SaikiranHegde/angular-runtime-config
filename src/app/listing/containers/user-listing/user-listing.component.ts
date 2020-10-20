import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, share, startWith } from 'rxjs/operators';
import { ConfigService } from 'src/app/config.service';
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
  viewUserListing: boolean;
  featureName = 'VIEW_USER_LISTING';

  constructor(private configService: ConfigService, private userService: UserService) {
    this.viewUserListing = this.configService.getFeatureValue('VIEW_USER_LISTING');
  }

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
