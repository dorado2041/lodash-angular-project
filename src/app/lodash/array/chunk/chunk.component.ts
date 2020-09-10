import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'chunk-component',
  templateUrl: './chunk.component.html'
})
export class ChunkComponent {
  arrayElement: any;
  chunkSize: number = 2;
  getOrigionalArray() {
    if (this.arrayElement && this.arrayElement.length > 0) {
      return this.arrayElement.split(',');
    }
  }
  getChunkArray() {
    if (this.arrayElement && this.arrayElement.length > 0) {
      return _.chunk(this.arrayElement.split(','), this.chunkSize);
    }
  }
}
