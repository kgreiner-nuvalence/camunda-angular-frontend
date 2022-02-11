import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmnComponent } from './bpmn/bpmn.component';
import {FormioMappingComponent} from "./mapping/formioMapping.component";
import {BuilderComponent} from "./builder/builder.component";

const routes: Routes = [
  {path: '', component: BpmnComponent},
  {path: 'bpmn', component: BpmnComponent},
  {path: 'arjol_stuff', component: FormioMappingComponent},
  {path: 'builder', component: BuilderComponent},
  {path: '*', component: BpmnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
