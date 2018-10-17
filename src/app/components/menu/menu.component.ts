import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() public sortValue = new EventEmitter();
  @Output() public viewValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit filter event
   * @param {string} value
   */
  public filterCars = (value: string) => {
      this.sortValue.emit(value);
  }
  /**
   * Emit change view event
   */
  public changeView = () => {
    this.viewValue.emit();
  }
}
