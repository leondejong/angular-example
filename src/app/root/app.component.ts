import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public test: string = '1';

  public constructor() {
    this.test += '2';
  }

  ngOnInit(): void {
    this.test += '3';
  }

  public log(): void {
    console.log.apply(console, arguments);
  }
}
