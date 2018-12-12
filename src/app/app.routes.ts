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
import {FineListPage} from './library/fine-list.page';
import {LendingListPage} from './library/lending-list.page';
import {MembershipListPage} from './library/membership-list.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'academy/cohorts/list', component: CohortListPage},
    {path: 'academy/cohorts/:code', component: CohortDetailPage},
    {path: 'academy/apprentices/list', component: ApprenticeListPage},
    {path: 'academy/apprentices/:code', component: ApprenticeDetailPage},
    {path: 'library/book/list', component: BookListPage},
    {path: 'library/members/list', component: MemberListPage},
    {path: 'library/user/members/list', component: MemberListPage},
    {path: 'library/user/staff/list', component: StaffListPage},
    {path: 'library/book/fine', component: FineListPage},
    {path: 'library/book/lending', component: LendingListPage},
    {path: 'library/user/membership/list', component: MembershipListPage},
  ]
}];
