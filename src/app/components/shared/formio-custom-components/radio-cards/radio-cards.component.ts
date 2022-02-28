import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormioCustomComponent} from "angular-formio";

@Component({
  selector: 'radio-cards',
  templateUrl: './radio-cards.component.html',
  styleUrls: ['./radio-cards.component.scss']
})
export class RadioCardsComponent implements FormioCustomComponent<string>, OnInit {

  // PROPERTIES

  @Input() buttonStyle: string;
  @Input() disabled: boolean;
  @Input() hidden: boolean;
  @Input() inline: boolean;
  @Input() input: boolean;
  @Input() key: string;
  @Input() label: string;
  @Input() type: string;
  @Input() value: string;
  @Input() values: any;

  @Output() valueChange = new EventEmitter<string>();

  // PUBLIC METHODS

  public ngOnInit(): void {
    // console.log('radio-buttons onInit')
  }

  public showGroup(): boolean {
    return !this.hidden && this.values && ((this.values[0].value) !== '');
  }

  public isActive(val: string): boolean {
    return this.value && (val === this.value)
  }

  public buttonClass(val: string): string {
    const btn =
      'btn mr-1  mb-2  btn-outline-'  +
      this.buttonStyle + ' ' +
      (this.isActive(val) ? 'active' : '') +
      (this.inline ? ' btn-group-rounded' : '')
    return btn
  }

  public onBlur(): void {
    console.log('On Blur -> Trigger API Call');
  }

  public updateValue(payload: string): void {
    this.value = payload;
    this.valueChange.emit(payload);
  }

}
