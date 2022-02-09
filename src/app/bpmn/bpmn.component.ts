import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BpmnService } from './bpmn.service';
import { ProcessDefinition } from './process-definition';
import { ProcessInstance } from './process-instance';
import { Task } from './task'

@Component({
  selector: 'app-bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.scss']
})
export class BpmnComponent implements OnInit {
  processDefinitions: ProcessDefinition[] = [];
  processInstances: ProcessInstance[] = [];
  tasks: Task[] = [];
  taskVariables: any[] = [];
  taskFormVariables: any[] = [];

  currentForm: SafeHtml = '<p>Test</p>'; 
  keyOfProcessToStart: string = '';
  processInstanceId: string = '';
  taskId: string = '';
  instanceVariables: any = {};

  constructor(
    private bpmnService: BpmnService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.subscribeToAllProcesseDefinitions();
  }

  subscribeToAllProcesseDefinitions() {
    this.bpmnService.findAllProcesseDefinitions().subscribe({
      next: (next) => {
        this.processDefinitions = [...this.processDefinitions, ...next]
      },
      error: () => {},
      complete: () => {}
    });
  }

  startProcessByKey(event: any) {
    this.bpmnService.startProcessByKey(this.keyOfProcessToStart).subscribe({
      next: (next) => {
        this.processInstances = [...this.processInstances, next]
      },
      error: () => {},
      complete: () => {}
    });
  }

  subscribeToTasksByProcessInstanceId(event: any) {
    this.bpmnService.findTasksByProcessInstanceId(this.processInstanceId).subscribe({
      next: (next) => {
        this.tasks = [...this.tasks, ...next]
      },
      error: () => {},
      complete: () => {}
    });
  }

  subscribeToVariablesByTaskId(event: any) {
    this.bpmnService.findTaskVariablesByTaskId(this.taskId).subscribe({
      next: (next) => {
        this.taskVariables = [...this.taskVariables, ...next]
      },
      error: () => {},
      complete: () => {}
    });
  }

  subscribeToTaskFormVariablesByTaskId(event: any) {
    this.bpmnService.findTaskFormVariablesByTaskId(this.taskId).subscribe({
      next: (next) => {
        this.taskFormVariables = [...this.taskFormVariables, next]
      },
      error: () => {},
      complete: () => {}
    });
  }

  claimTaskForAdminByTaskId(event: any) {
    this.bpmnService.claimTaskByTaskId(this.taskId).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {}
    });
  }

  unclaimTaskByTaskId(event: any) {
    this.bpmnService.unclaimTaskByTaskId(this.taskId).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {}
    });
  }

  getRenderedFormforTaskByTaskId(event: any) {

    this.bpmnService.getRenderedFormforTaskByTaskId(this.taskId).subscribe({
      next: (next) => {
        this.currentForm = this.sanitizer.bypassSecurityTrustHtml(next.toString());
      },
      error: () => {},
      complete: () => {}
    });
  }

  getProcessInstanceVariablesByProcessInstanceId(event: any) {
    this.bpmnService.getAllProcessInstanceVariablesByProcessInstanceId(this.processInstanceId).subscribe({
      next: (next) => {
        this.instanceVariables = next;
      },
      error: () => {},
      complete: () => {}
    });
  }
}
