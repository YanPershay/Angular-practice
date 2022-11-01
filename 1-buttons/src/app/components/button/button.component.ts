import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button
    [class]="currentColor"
    [class.large]="isBtnLarge"
    [class.small]="isBtnSmall"
    [attr.disabled]="isDisabled ? '' : null"
    [ngClass]="active"
  >
    {{ text }}
  </button>`,
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent implements OnChanges {
  public isBtnLarge: boolean = false;
  public isBtnSmall: boolean = false;
  public active: string = '';
  public currentColor: string = 'default';

  @Input() text = 'default';
  @Input() set color(val: string) {
    if (val) {
      this.currentColor = val;
    }
  }
  @Input() size = 'default';
  @Input() isActive = false;
  @Input() isDisabled = false;

  ngOnChanges() {
    if (this.size === 'large') {
      this.isBtnLarge = true;
    }

    if (this.size === 'small') {
      this.isBtnSmall = true;
    }

    this.active = this.isActive ? 'active' : '';
  }
}
