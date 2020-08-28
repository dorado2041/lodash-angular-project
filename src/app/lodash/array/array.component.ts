import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';
import { LodashTypeModel } from 'src/app/common/model/lodashTypeModel';
import { FormControl } from '@angular/forms';
import { takeUntil, take } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'array-component',
  templateUrl: './array.component.html'
})
export class ArrayComponent {

  arraySearch: string = '';

  lodashArrayTypeList: LodashTypeModel[] = [
    {
      name: '_.chunk',
      code: 'CHUNK',
      path: 'array/chunk'
    }
  ];

  constructor(private router: Router) { }

  renderPage(lodashTypeModel: LodashTypeModel) {
    this.router.navigateByUrl(lodashTypeModel.path);
  }

  get getfilteredList(): LodashTypeModel[] {
    if (this.arraySearch) {
      return _.filter(this.lodashArrayTypeList, t => t.name.toUpperCase().indexOf(this.arraySearch.toUpperCase()) > -1);
    } else {
      return this.lodashArrayTypeList;
    }
  }
}
