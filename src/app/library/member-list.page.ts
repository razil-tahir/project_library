import {Component} from '@angular/core';
import {Member} from './member.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'trg-member-list',
  templateUrl: './member-list.page.html',

})
export class MemberListPage {

  private columns = ['id', 'name', 'ic',
    'address', 'phone', 'email'];
  private dataSource: Observable<Member[]>;


  constructor() {
  }


}
