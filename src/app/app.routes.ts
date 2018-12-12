import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApprenticeListPage} from './academy/apprentice-list.page';
import {CohortListPage} from './academy/cohort-list.page';
import {ApprenticeDetailPage} from './academy/apprentice-detail.page';
import {CohortDetailPage} from './academy/cohort-detail.page';
import {BookListPage} from './library/book-list.page';
import {MemberListPage} from './library/member-list.page';
import {StaffListPage} from './library/staff-list.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'academy/cohorts/list', component: CohortListPage},
    {path: 'academy/cohorts/:code', component: CohortDetailPage},
    {path: 'academy/apprentices/list', component: ApprenticeListPage},
    {path: 'academy/apprentices/:code', component: ApprenticeDetailPage},
    {path: 'library/book/list', component: BookListPage},
    {path: 'library/members/list', component: MemberListPage},
    {path: 'library/staff/list', component: StaffListPage},
  ]
}];
