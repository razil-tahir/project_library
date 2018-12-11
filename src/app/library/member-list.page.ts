import {Component} from '@angular/core';
import {Member} from './member.model';
import {Observable} from 'rxjs';
import {LibraryService} from '../../services/library.service';


@Component({
  selector: 'trg-member-list',
  templateUrl: './member-list.page.html',

})
export class MemberListPage {

  public columns = ['id', 'name', 'ic',
    'address', 'phone', 'email'];

  public dataSource: Observable<Member[]>;


  constructor(private libService : LibraryService) {
    this.dataSource = libService.findMembers();
  }


}
