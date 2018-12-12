import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LibraryService} from '../../services/library.service';
import {Membership} from './membership.model';
import {Apprentice} from '../academy/apprentice.model';


@Component({
  selector: 'trg-membership-list',
  templateUrl: './membership-list.page.html',

})
export class MembershipListPage implements OnInit{

  public columns = ['id', 'name', 'ic', 'address', 'phone', 'email', 'memberType' ];
  public dataSource: Observable<Membership[]>;


  constructor(private libService : LibraryService) {
  }

  ngOnInit(): void {
    this.dataSource = this.libService.findMemberships();
  }

  view(apprentice: Membership): void {
    console.log(JSON.stringify(apprentice));
  }

}
