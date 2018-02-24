import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadServer(e,id){
    e.srcElement.innerHTML = "Loading...";
    e.srcElement.disabled = true;
    setTimeout(() => {
      this.router.navigate(['/servers', id, 'edit'], { queryParams: {'allowEdit': 1}, fragment: 'loading' });
    }, 3000);
  }
  


  loadUsers(e) {
    e.srcElement.innerHTML = "Loading...";
    e.srcElement.disabled = true;
    setTimeout(() => {
      this.router.navigate(['/users'])
    }, 3000);
  }

}
 