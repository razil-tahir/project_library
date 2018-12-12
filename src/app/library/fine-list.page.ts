import {Component, OnInit} from '@angular/core';
import {Member} from './member.model';
import {Observable} from 'rxjs';
import {LibraryService} from '../../services/library.service';
import {Fine} from './fine.model';


@Component({
  selector: 'trg-fine-list',
  templateUrl: './fine-list.page.html',

})
export class FineListPage implements OnInit {

  public columns = ['id', 'amount', 'status'];
  public dataSource: Observable<Fine[]>;


  constructor(private libService: LibraryService) {
  }

  ngOnInit(): void {
    this.dataSource = this.libService.findFines();
  }

}
