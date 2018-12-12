import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {LibraryService} from '../../services/library.service';
import {Staff} from './staff.model';


@Component({
  selector: 'trg-staff-list',
  templateUrl: './staff-list.page.html',

})
export class StaffListPage {

  public columns = ['staffId', 'staffName', 'staffIc', 'staffAge',
                      'staffEmail','staffAddress', 'staffBankAccount',
                      'staffPosition','workingHour', 'salary'];
  public dataSource: Observable<Staff[]>;

  constructor(private libService : LibraryService) {
  }

  ngOnInit(): void {
    this.dataSource = this.libService.findStaffs();
  }

  view(Staff: Staff): void {
    console.log(JSON.stringify(Staff));
  }
}
