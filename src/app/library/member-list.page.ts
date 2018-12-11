import {Component, OnInit} from '@angular/core';
import {Member} from './member.model';
import {Observable} from 'rxjs';
import {LibraryService} from '../../services/library.service';


@Component({
  selector: 'trg-member-list',
  templateUrl: './member-list.page.html',

})
export class MemberListPage implements OnInit{

  public columns = ['id', 'name', 'ic', 'address', 'phone', 'email'];
  public dataSource: Observable<Member[]>;


  constructor(private libService : LibraryService) {
  }

  ngOnInit(): void {
    this.dataSource = this.libService.findMembers();
  }


}
