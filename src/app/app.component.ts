import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lodash-angular-project';
  result: any;

  ngOnInit() {

    let array = [1, 2, 3];
    let values = [0, 5, 'a', 'b'];

    this.result = _.concat(array, values);

  }
}
