import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  findMembers(): Observable<any[]> {
    // return this.http.get<any[]>('data/cohorts.json');
    //TODO Haqeem
    return null;
  }

  findMemberById(): Observable<any> {
    // return this.http.get<any[]>('data/cohorts.json');
    //TODO Haqeem
    return null;
  }

  findBooks(): Observable<any[]> {
    // return this.http.get<any[]>('data/cohorts.json');
    //TODO Raz
    return null;
  }

  findBookById(): Observable<any> {
    // return this.http.get<any[]>('data/cohorts.json');
    //TODO Raz
    return null;
  }

}
