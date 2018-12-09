import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {CoreModule} from '../core/core.module';
import {MainComponent} from './main.layout';
import {DashboardModule} from '../dashboard/dashboard.module';
import {RouterModule} from '@angular/router';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CoreModule,
    MatSidenavModule,
    PerfectScrollbarModule,
    RouterModule,
    DashboardModule,
  ],
  declarations: [MainComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class MainModule {
}
