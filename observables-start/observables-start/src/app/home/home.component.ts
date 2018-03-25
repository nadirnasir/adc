import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscriber, Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mySubscriber: Subscriber<any>;

  constructor() { }

  ngOnInit() {
    // const myObservable = Observable.interval(2000)
    // myObservable.subscribe(
    //   (number: Number) => {
    //     console.log(number)
    //   }
    // );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('First Packet of data');
        }, 1000);
        setTimeout(() => {
          observer.next('Second Packet of data');
        }, 2000);
        setTimeout(() => {
          observer.next('Third Packet of data');
        }, 3000);
        setTimeout(() => {
          observer.error('This failed');
        }, 4000);
        setTimeout(() => {
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('Third Packet of data');
        }, 6000);
      }
    );

    this.mySubscriber = myObservable.subscribe(
      (data: String) => {
        console.log(data);
      },
      (data: String) => {
        console.log("ERROR OCCURED: " + data);
      },
      () => {
        console.log("Completed");
      },
    );

  }

  ngOnDestroy() {
    this.mySubscriber.unsubscribe();
  }
}
