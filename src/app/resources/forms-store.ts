import {Injectable} from "@angular/core";

@Injectable()
export class FormsStore {

  // CONSTRUCTOR

  constructor() {}

  // PROPERTIES

  private _formIOs: {templateId: string, components: []}[] = [];

  // GETTERS AND SETTERS

  public get formIOs(): {templateId: string, components: []}[] {
    return this._formIOs;
  }

  public set formIOs(forms: {templateId: string, components: []}[]) {
    this._formIOs = forms;
  }
}
