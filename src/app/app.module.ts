import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpmnComponent } from './components/bpmn/bpmn.component';
import { BpmnService } from './components/bpmn/bpmn.service';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormioMappingComponent} from "./components/mapping/formioMapping.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MenuComponent} from "./components/menu/menu.component";
import {StepsModule} from "primeng/steps";
import {DropdownModule} from "primeng/dropdown";
import {DividerModule} from "primeng/divider";
import {FormioModule} from "angular-formio";
import {BuilderComponent} from "./components/builder/builder.component";
import { HomeComponent } from './components/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    BpmnComponent,
    FormioMappingComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BuilderComponent,
    HomeComponent
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
        FormioModule,
      MatTabsModule
    ],
  providers: [
    BpmnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
