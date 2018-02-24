import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max',
      status: "Ative"
    },
    {
      id: 2,
      name: 'Anna',
      status: 'Inactive' 
    },
    {
      id: 3,
      name: 'Chris',
      status: 'single'
    }
  ];
}
