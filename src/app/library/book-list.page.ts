import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Member} from './member.model';
import {Book} from './book.model';
import {LibraryService} from '../../services/library.service';


@Component({
  selector: 'trg-book-list',
  templateUrl: './book-list.page.html',

})
export class BookListPage {

  private columns = ['id', 'title', 'author',
    'yearPublish'];
  private dataSource: Observable<Book[]>;


  constructor(
    private libraryService: LibraryService
  ) {

    this.libraryService.findBooks().subscribe(data => {
      console.log(data);
    })
  }


}
