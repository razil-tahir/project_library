import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprentice} from '../app/academy/apprentice.model';

@Injectable()
export class IdentityService {

  constructor(private http: HttpClient) {
  }

  findApprentices(): Observable<Apprentice[]> {
    return this.http.get<Apprentice[]>('data/apprentices.json');
  }

  findApprenticeById(id: string): Observable<Apprentice> {
    return this.http.get<Apprentice>('data/apprentice.json');
  }
}
