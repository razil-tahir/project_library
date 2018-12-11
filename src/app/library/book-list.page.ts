import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './book.model';
import {LibraryService} from '../../services/library.service';


@Component({
  selector: 'trg-book-list',
  templateUrl: './book-list.page.html',

})
export class BookListPage implements OnInit {

  public columns = ['id', 'title', 'author',
    'yearPublish'];
  public dataSource: Observable<Book[]>;


  constructor(private libraryService: LibraryService) {

    this.dataSource = libraryService.findBooks();
  }

  ngOnInit() : void {
  this.dataSource = this.libraryService.findBooks();
}



}
