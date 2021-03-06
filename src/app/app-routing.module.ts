import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmnComponent } from './components/bpmn/bpmn.component';
import {FormioMappingComponent} from "./components/mapping/formioMapping.component";
import {BuilderComponent} from "./components/builder/builder.component";
import {HomeComponent} from "./components/home/home.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {BuilderLocalizeComponent} from "./components/builder-localize/builder-localize.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bpmn', component: BpmnComponent},
  {path: 'arjol_stuff', component: FormioMappingComponent},
  {path: 'builder', component: BuilderComponent},
  {path: 'builder-localize', component: BuilderLocalizeComponent},
  {path: 'loader', component: LoaderComponent},
  {path: '*', component: BpmnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
