import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {AcademyService} from '../../services/academy.service';
import {Cohort} from './cohort.model';

export class CohortDataSource extends DataSource<any> {

  constructor(private academyService: AcademyService) {
    super();
  }

  connect(): Observable<Cohort[]> {
    return this.academyService.findCohorts();
  }

  disconnect() {
  }
}
