import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../app/library/book.model';
import {Member} from '../app/library/member.model';
import {Staff} from '../app/library/staff.model';
import {Fine} from '../app/library/fine.model';
import {Fine} from '../app/library/fine.model';
import {MemberType} from '../app/library/membership.model';
import {Lending} from '../app/library/lending.model';

@Injectable()
export class LibraryService {

  constructor(private http: HttpClient) {
  }

  findStaffs(): Observable<any[]> {
    return this.http.get<Staff[]>('data/staffs.json');
  }

  findMembers(): Observable<Member[]> {
    return this.http.get<Member[]>('data/members.json');
  }

  findMembership(): Observable<MemberType> {
    return this.http.get<MemberType>('data/membership.json');
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
