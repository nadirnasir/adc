import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string, status: string };

  constructor(private url: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.url.snapshot.params['id'],
      name: this.url.snapshot.params['name'],
      status: this.url.snapshot.params['status']
    }

    this.url.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
        this.user.status = params['status'];

      }
    );
  }

  

}
