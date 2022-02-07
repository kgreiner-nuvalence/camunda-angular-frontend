import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmnComponent } from './bpmn/bpmn.component';

const routes: Routes = [
  {path: '', component: BpmnComponent},
  {path: 'bpmn', component: BpmnComponent},
  {path: '*', component: BpmnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
