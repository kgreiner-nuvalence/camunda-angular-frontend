import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Observable, Subject} from "rxjs";
import { options } from './options';
import {PrismService} from "./Prism.service";


@Component({
  selector: 'app-builder',
  templateUrl: './builder-localize.component.html',
  styleUrls: ['./builder-localize.component.css']
})

export class BuilderLocalizeComponent implements AfterViewInit   {

  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  public form: {components: []};
  public options: any;
  public language: string | undefined;
  public rebuildEmitter: Subject<Object> = new Subject<Object>();

  constructor() {
    this.options = options;
    this.form = {components: []};
  }

  onChange(event: any) {
    // @ts-ignore
    this.jsonElement.nativeElement.innerHTML = '';
    // @ts-ignore
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

  ngAfterViewInit() {
    // this.prism.init();
  }

  changeLanguage(language: string) {
    this.language = language;
    this.options.language = this.language;
    this.rebuildEmitter.next(this.options);
  }
}
