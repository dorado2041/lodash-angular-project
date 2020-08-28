import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from './common/module/shared.module';
import { ArrayComponent } from './lodash/array/array.component';
import { ChunkComponent } from './lodash/array/chunk/chunk.component';
import { MatSelectSearchComponent } from './common/component/mat-select-search/mat-select-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MatSelectSearchComponent,
    ArrayComponent,
    ChunkComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
