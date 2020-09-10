import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'compact-component',
  templateUrl: './compact.component.html'
})
export class CompactComponent {
  arrayElement: any;
  getOrigionalArray() {
    if (this.arrayElement && this.arrayElement.length > 0) {
      return this.parseData(this.arrayElement.split(','), true);
    }
  }
  getCompactArray() {
    if (this.arrayElement && this.arrayElement.length > 0) {
      return _.compact(this.parseData(this.arrayElement.split(',')));
    }
  }

  private parseData(val: any[], isOrigional: boolean = false) {
    let newArray = [];
    val.forEach(m => {
      if (!isNaN(Number(m))) {
        newArray.push(Number(m));
      } else {
        if (m.trim() === 'true' || m.trim() === 'false') {
          newArray.push(m.trim() === 'true');
        } else if (m.trim() === 'null') {
          if (isOrigional) {
            newArray.push(m.trim());
          } else {
            newArray.push(null);
          }
        } else if (m.trim() === 'undefined') {
          newArray.push(undefined);
        }
        else {
          newArray.push(m.trim());
        }
      }
    });
    return newArray;
  }
}
