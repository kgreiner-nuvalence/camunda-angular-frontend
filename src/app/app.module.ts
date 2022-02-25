import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FormioModule } from "angular-formio";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { InputTextModule } from 'primeng/inputtext';
import { MatSelectModule } from "@angular/material/select";
import { ResourcesModule } from "./resources/resources.module";
import { SharedComponentsModule } from "./components/shared/shared-components.module";
import { StepsModule } from "primeng/steps";


import { BpmnComponent } from './components/bpmn/bpmn.component';
import { BpmnService } from './components/bpmn/bpmn.service';
import { BuilderComponent } from "./components/builder/builder.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormioMappingComponent } from "./components/mapping/formioMapping.component";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    BpmnComponent,
    FooterComponent,
    FormioMappingComponent,
    HeaderComponent,
    HomeComponent,
    LoaderComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    DividerModule,
    DropdownModule,
    FormioModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    MatSelectModule,
    ReactiveFormsModule,
    ResourcesModule,
    SharedComponentsModule,
    StepsModule
  ],
  providers: [
    BpmnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
