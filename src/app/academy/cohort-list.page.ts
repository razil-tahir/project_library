import {Component, OnInit} from '@angular/core';
import {CohortDataSource} from './cohort.data-source';
import {AcademyService} from '../../services/academy.service';

@Component({
  selector: 'trg-cohort-list',
  templateUrl: './cohort-list.page.html',
  styleUrls: ['./cohort-list.page.scss']
})
export class CohortListPage implements OnInit {

  public columns = ['id', 'code', 'description'];
  public dataSource: CohortDataSource;

  constructor(private academyService: AcademyService) {
  }

  ngOnInit() {
    this.dataSource = new CohortDataSource(this.academyService);
  }
}
