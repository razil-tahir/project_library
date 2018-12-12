import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LibraryService} from '../../services/library.service';
import {Lending} from './lending.model';


@Component({
  selector: 'trg-lending-list',
  templateUrl: './lending-list.page.html',

})
export class LendingListPage implements OnInit {

  public columns = ['id', 'checkoutDate', 'checkinDate', 'status'];
  public dataSource: Observable<Lending[]>;




  constructor(private libService: LibraryService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.dataSource = this.libService.findLending();
  }

}
