import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges {
  @Input() color = "default";
  @Input() size = "default";
  @Input() isActive = false;
  @Input() isDisabled = false;

  ngOnChanges(){}
}
