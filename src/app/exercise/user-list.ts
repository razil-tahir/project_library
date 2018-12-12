import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user-model';

@Component ({
  selector : 'trg-user-list',
  templateUrl: './user-list.page.html'

})
export class userList implements OnInit{

  public columns = ['userId', 'id', 'title', 'body'];
  dataSource: Observable<userList[]>;

  constructor(private userService:
                UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = this.userService.finduserList();
  }

  //view for html , User is from user-model
  view(user: User): void {
    console.log(JSON.stringify(user));
    //go to next page
    this.router.navigate(['ex/album-detail/:id', user.id]);
  }
}
