import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../app/library/book.model';
import {Member} from '../app/library/member.model';
import {Fine} from '../app/library/fine.model';
import {Lending} from '../app/library/lending.model';

@Injectable()
export class LibraryService {

  constructor(private http: HttpClient) {
  }

  findStaffs(): Observable<any[]> {
    // return this.http.get<any[]>('data/cohorts.json');
    //TODO Aishah
    return null;
  }

  findStaffById(): Observable<any> {
    // return this.http.get<any[]>('data/cohorts.json');
    //TODO Aishah
    return null;
  }

  findMemberById(): Observable<Member> {
    return this.http.get<Member>('data/member.json');
  }

  findMembers(): Observable<Member[]> {
    return this.http.get<Member[]>('data/members.json');
  }

  findBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('data/books.json');
  }

  findBookById(): Observable<Book> {
    return this.http.get<Book>('data/book.json');
  }

  findFines() : Observable<Fine[]> {
    return this.http.get<Fine[]>( 'data/fines.json');
  }

  findFine() : Observable<Fine> {
    return this.http.get<Fine>('data/fine.json');
  }

  findLendings() : Observable<Lending[]> {
    return this.http.get<Lending[]>('data/lendings.json');
  }

  findLending() : Observable<Lending> {
    return this.http.get<Lending>('data/lending.json');
  }
}
