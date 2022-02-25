import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {FormsStore} from "../../../resources/forms-store";

@Component({
  selector: 'formio-builder-wrapper',
  templateUrl: './formio-builder-wrapper.component.html',
  styleUrls: ['./formio-builder-wrapper.component.scss']
})

export class FormioBuilderWrapperComponent implements OnInit {

  // CONSTRUCTOR

  constructor(
    protected _formsStore: FormsStore
  ) {
  }

  // PROPERTIES

  @Input() public inputForm: {components: []} = {components: [] = []};

  public form: FormGroup = new FormGroup({
    'formIoName': new FormControl(null, Validators.required)
  });

  public formIo: {components: []} = {components: [] = []};

  // PUBLIC METHODS

  public ngOnInit() {
    this.formIo = this.inputForm ? this.inputForm : {components: [] = []};
  }

  public onSaveForm() {
    const formIo = {
      templateId: this.form.get('formIoName')?.value,
      components: this.formIo.components
    }
    console.log(formIo);
    const formIos = this._formsStore.formIOs;
    formIos.push(formIo);
    this._formsStore.formIOs = formIos;
  }
}
