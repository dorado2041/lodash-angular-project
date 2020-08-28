import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lodash-angular-project';
  result: any;
  constructor(private router: Router) { }
  ngOnInit() {
    let array = [1, 2, 3];
    let values = [0, 5, 'a', 'b'];
    this.result = _.concat(array, values);
    console.log(this.result);
  }

  navigateToDefault() {
    this.router.navigateByUrl('default');
  }
}
