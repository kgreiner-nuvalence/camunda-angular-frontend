import {Injector, NgModule} from '@angular/core';
import {registerFileUploadComponent} from "./formio-custom-components/file-upload/file-upload.formio";
import {MatIconModule} from "@angular/material/icon";
import {FileUploadComponent} from "./formio-custom-components/file-upload/file-upload.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormioBuilderWrapperComponent} from "./formio-builder-wrapper/formio-builder-wrapper.component";
import {FormioModule} from "angular-formio";

@NgModule({
  declarations: [
    FormioBuilderWrapperComponent,
    FileUploadComponent
  ],
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormioModule
  ],
  providers: [],
})
export class SharedComponentsModule {
  constructor(injector: Injector) {
    registerFileUploadComponent(injector);
  }
}
