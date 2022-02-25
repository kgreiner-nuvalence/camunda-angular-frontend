import {Component, OnInit} from '@angular/core';
import {FormsStore} from "../../resources/forms-store";
import {Form, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {

  // CONSTRUCTOR

  constructor(
    protected _formsStore: FormsStore
  ) {
  }

  // PROPERTIES

  public form: FormGroup = new FormGroup({
    'formIoName': new FormControl(null, Validators.required)
  });
  public formIo = {components: [] = []};

  options = {
    builder: {
      premium: false
    },
    language: 'en',
    i18n: {}
  };

  // PUBLIC METHODS

  public ngOnInit() {
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
