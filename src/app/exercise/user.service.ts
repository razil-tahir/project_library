import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {userList} from './user-list';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  finduserList(): Observable<userList[]> {
    return this.http.get<userList[]>('https://jsonplaceholder.typicode.com/posts');
  }
  finduserById(id: number): Observable<userList> {
    return this.http.get<userList>('https://jsonplaceholder.typicode.com/posts' + id);
  }

}
