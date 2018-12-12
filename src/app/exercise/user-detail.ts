import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {userList} from './user-list';


@Component({
  selector: 'trg-user-detail',
  templateUrl: './user-detail.page.html',
})
export class userDetail implements OnInit {

  //Declare userList$ to use in html
  userList$: Observable<userList>;
  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
    this.route.params.subscribe((params: { id: number }) => {
      this.userList$ = this.userService.finduserById(params.id);
    });
  }
}
