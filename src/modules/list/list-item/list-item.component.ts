import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() listItem;
  @Output() removeEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeItem(itemId){
    this.removeEvent.emit(itemId);
  }

}
