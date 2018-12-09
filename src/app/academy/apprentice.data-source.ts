import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {IdentityService} from '../../services/identity.service';
import {Apprentice} from './apprentice.model';

export class ApprenticeDataSource extends DataSource<any> {

  constructor(private identityService: IdentityService) {
    super();
  }

  connect(): Observable<Apprentice[]> {
    return this.identityService.findApprentices();
  }

  disconnect() {
  }
}
