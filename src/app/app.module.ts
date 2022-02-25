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
import {BuilderLocalizeComponent} from "./components/builder-localize/builder-localize.component"
import { HomeComponent } from './components/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ResourcesModule} from "./resources/resources.module";
import { LoaderComponent } from './components/loader/loader.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    BpmnComponent,
    FormioMappingComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BuilderComponent,
    BuilderLocalizeComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormioModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    StepsModule,
    DropdownModule,
    DividerModule,
    FormioModule,
    ResourcesModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    BpmnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
