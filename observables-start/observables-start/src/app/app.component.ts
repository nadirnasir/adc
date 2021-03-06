import { Component, OnInit } from '@angular/core';
import { UsersService } from './user/users.service';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.userActivared.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

}
