import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AcademyModule} from './academy/academy.module';
import {AcademyService} from '../services/academy.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {LibraryModule} from './library/library.module';
import {LibraryService} from '../services/library.service';
import {UserService} from './exercise/user.service';
import {UserModule} from './exercise/user.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MainModule,
    DashboardModule,
    AcademyModule,
    LibraryModule,
    UserModule
  ],
  providers: [AcademyService,LibraryService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
