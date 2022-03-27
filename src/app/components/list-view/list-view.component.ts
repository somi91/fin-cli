import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IDataTable } from 'src/app/core/models/IDataTable';
import { IRecipe } from 'src/app/core/models/IRecipe';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent {

  @Input() page: number = 0;
  @Input() total: number = 0;
  @Input() perPage: number = 0;
  @Input() key: string = '';
  @Input() listData?: IDataTable;

  @Output() getDataEvent: EventEmitter<{page: number; perPage: number}> = new EventEmitter();
  @Output() rowClickEvent: EventEmitter<IRecipe> = new EventEmitter();

  public getData(page: number, perPage: number) {
    this.getDataEvent.emit({page: page, perPage: perPage});
  }

  public getNumberOfPages() {
    // console.log('getNumberOfPages', this.listData);
    if(this.listData && !isNaN(this.listData.totalPages / this.perPage)) {
      return [...Array(this.listData.totalPages).keys()];
    } else {
      return [];
    }
  }

  public getArrayData() {
    return this.listData ? (this.listData as any)[this.key] : [];
  }

  public changePage(page: number) {
    // console.log('changePage', page);
    this.getDataEvent.emit({page: page, perPage: this.perPage});
  }

  public rowClick(event: IRecipe) {
    this.rowClickEvent.emit(event);
  }

}
