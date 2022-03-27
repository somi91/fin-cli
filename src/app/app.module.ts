import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ListRowComponent } from './components/list-row/list-row.component';
import { ButtonComponent } from './components/button/button.component';
import { ListFilterComponent } from './components/list-filter/list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ListRowComponent,
    ButtonComponent,
    ListFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
