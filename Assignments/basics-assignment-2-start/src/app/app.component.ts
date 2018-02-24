import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username: string = "";

  constructor() {
    //console.log("constructor")
  }

  ngOnInit(){
    //console.log("onNgInit")
  }
  resetField() {
    this.username = ""
  }
}
