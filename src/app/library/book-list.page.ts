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

  public columns = ['id', 'title', 'author',
    'yearPublish'];
  public dataSource: Observable<Book[]>;


  constructor(private libraryService: LibraryService) {

    this.dataSource = libraryService.findBooks();
  }

  ngOnInit() {
  }

  view(book: Book): void {
    console.log(JSON.stringify(book));
    // this.router.navigate(['/academy/students/', cohort.code]);
  }


}
