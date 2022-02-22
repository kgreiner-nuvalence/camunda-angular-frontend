import { Component, OnInit } from '@angular/core';
import {FormsStore} from "../../resources/forms-store";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  // CONSTRUCTOR

  constructor(
    protected _formsStore: FormsStore
  ) { }

  // PROPERTIES

  public formIoTemplates: {templateId: string, components: []}[] = [];
  public formIoControl = new FormControl('', null);
  public selected = [];
  public formSrc: {components: any[]} = {components: []};
  //

  // PUBLIC METHODS

   public ngOnInit(): void {
     this.formIoControl.valueChanges.subscribe(() => this._loadForm())
    this.formIoTemplates = this._formsStore.formIOs;
    console.log(this.formIoTemplates);
  }

  private _loadForm(): void {
    console.log({components: this.selected});
    this.formSrc = {components: this.selected};
  }

}
