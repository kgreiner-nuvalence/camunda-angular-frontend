import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpmnComponent } from './bpmn/bpmn.component';
import { BpmnService } from './bpmn/bpmn.service';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormioMappingComponent} from "./mapping/formioMapping.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MenuComponent} from "./menu/menu.component";
import {StepsModule} from "primeng/steps";
import {DropdownModule} from "primeng/dropdown";
import {DividerModule} from "primeng/divider";
import {FormioModule} from "angular-formio";
import {BuilderComponent} from "./builder/builder.component";

@NgModule({
  declarations: [
    AppComponent,
    BpmnComponent,
    FormioMappingComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BuilderComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        CardModule,
        StepsModule,
        DropdownModule,
        DividerModule,
        FormioModule
    ],
  providers: [
    BpmnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
