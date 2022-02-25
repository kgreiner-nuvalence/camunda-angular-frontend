import {Injector, NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {FileUploadComponent} from "./formio-custom-components/file-upload/file-upload.component";
import {FormioBuilderWrapperComponent} from "./formio-builder-wrapper/formio-builder-wrapper.component";
import {FormioModule} from "angular-formio";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ReactiveFormsModule} from "@angular/forms";

import {registerFileUploadComponent} from "./formio-custom-components/file-upload/file-upload.formio";

@NgModule({
  declarations: [
    FileUploadComponent,
    FormioBuilderWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormioModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    FileUploadComponent
  ]
})
export class SharedComponentsModule {
  constructor(injector: Injector) {
    registerFileUploadComponent(injector);
  }
}
