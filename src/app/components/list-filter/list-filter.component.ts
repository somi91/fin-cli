import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListFilterComponent {

  @ViewChild('search') search?: ElementRef;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  private subscription?: Subscription;
  constructor() { }

  ngAfterViewInit() {
    this.subscription = fromEvent(this.search?.nativeElement, 'keyup')
      .pipe(debounceTime(1500))
      .subscribe((inputEvent: Event | unknown) => {
        this.searchEvent.emit(((inputEvent as KeyboardEvent).target as HTMLInputElement)?.value as string);
      })
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
