import {Component, OnInit} from '@angular/core';
import {IdentityService} from '../../services/identity.service';
import {ApprenticeDataSource} from './apprentice.data-source';

@Component({
  selector: 'app-apprentice-list',
  templateUrl: './apprentice-list.page.html',
  styleUrls: ['./apprentice-list.page.scss']
})
export class ApprenticeListPage implements OnInit {

  public displayedColumns = ['id', 'displayName'];
  public dataSource: ApprenticeDataSource;

  constructor(private identityService: IdentityService) {
  }

  ngOnInit() {
    this.dataSource = new ApprenticeDataSource(this.identityService);
  }
}
