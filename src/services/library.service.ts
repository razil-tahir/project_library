import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../app/library/book.model';
import {Member} from '../app/library/member.model';
import {Staff} from '../app/library/staff.model';

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

  findBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('data/books.json');
  }

}
