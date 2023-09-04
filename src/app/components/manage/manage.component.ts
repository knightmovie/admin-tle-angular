import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
  @Input() title: string;
  @Input() data: any[];

  @Output() deleted = new EventEmitter();
  @Output() added = new EventEmitter<any>();
  @Output() updated = new EventEmitter();
  @Output() nextPagination = new EventEmitter();
  @Output() prevPagination = new EventEmitter()
  @Output() nextPagePagination = new EventEmitter();

}
