import {Component, OnInit} from '@angular/core';
import {Member} from './member.model';
import {Observable} from 'rxjs';
import {LibraryService} from '../../services/library.service';
import {Membership, MemberType} from './membership.model';


@Component({
  selector: 'trg-membership-list',
  templateUrl: './membership-list.page.html',

})
export class MembershipListPage implements OnInit{

  public columns = ['id', 'name', 'ic', 'address', 'phone', 'email', MemberType ];
  public dataSource: Observable<MemberType>;


  constructor(private libService : LibraryService) {
  }

  ngOnInit(): void {
    this.dataSource = this.libService.findMembership();
  }


}
