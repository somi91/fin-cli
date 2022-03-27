import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from 'src/app/core/models/IRecipe';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRowComponent implements OnInit {

  @Input() item?: IRecipe;
  @Output() clickEvent: EventEmitter<IRecipe> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public onClickEvent() {
    this.clickEvent.emit(this.item);
  }

}
