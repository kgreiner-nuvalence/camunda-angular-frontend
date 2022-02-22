import {Component, OnInit} from '@angular/core';
import {FormsStore} from "../../resources/forms-store";
import {Form, FormControl, FormControlName, FormGroup} from "@angular/forms";

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
    'formIoName': new FormControl(null)
  });
  public formIo = {components: [] = []};

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
