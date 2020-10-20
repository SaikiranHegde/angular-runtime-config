import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { toUsers, User } from '../models/user.model';
import { ConfigService } from '../../config.service';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.configService.appConfig.userServiceUrl).pipe(
      map(toUsers)
    );
  }
}
