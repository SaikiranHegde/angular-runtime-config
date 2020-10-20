import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { UserListingComponent } from './listing/containers/user-listing/user-listing.component';
import { UserService } from './listing/services/user.service';
import { appLoader } from './app.loader';
import { ConfigService } from './config.service';
import { FeatureToggleModule } from './feature-toggle/feature-toggle.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    FeatureToggleModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appLoader,
      deps: [ConfigService],
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
