import {Component, Injectable} from '@angular/core';
import {Formio} from "angular-formio";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from "rxjs";
import {TextFieldModel} from "./textField.model";
import {BpmnService} from "../bpmn/bpmn.service";
import {ProcessDefinition} from "../bpmn/process-definition";
import {ProcessInstance} from "../bpmn/process-instance";
import {Task} from "../bpmn/task";
import {SafeHtml} from "@angular/platform-browser";
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-formioMapping',
  templateUrl: './formioMapping.component.html',
  styleUrls: ['./formioMapping.component.css']
})

export class FormioMappingComponent {

  taskListVariables = [{
    "plaintiffName": {"type": "String", "value": null, "valueInfo": {}},
    "complaintType": {"type": "String", "value": null, "valueInfo": {}},
    "email": {"type": "String", "value": null, "valueInfo": {}}
  }];


  camundaComponents = {};
  fieldsToDisplay: object[] = [];
  formResults: {} = {};

  // processDefinitions: ProcessDefinition[] = [];
  processInstances: ProcessInstance[] = [];
  tasks: Task[] = [];
  selectedTask = {};
  taskVariables: any[] = [];
  taskFormVariables: any[] = [];

  currentForm: SafeHtml = '<p>Test</p>';
  processInstanceId: string = '';
  taskId: string = '';

  processDefinitions: ProcessDefinition[] = [];
  selectedProcessDefinitions: ProcessDefinition[] = [];

  constructor(private bpmnService: BpmnService, private http: HttpClient) {}

  ngOnInit() {
    this.subscribeToAllProcesseDefinitions();
  }

  handleClick(event: any) {
    this.startProcessByKey(this.selectedProcessDefinitions);
  }

  createFormioForm(){
    // @ts-ignore
    if(this.fieldsToDisplay.length !== 0){
      this.fieldsToDisplay.push({
          type: 'button',
          action: 'submit',
          label: 'Submit',
          theme: 'primary'
        },
        {
          type: 'button',
          action: 'reset',
          label: 'Reset Form',
          theme: 'success'
        });
    }
    Formio.createForm(document.getElementById('CamundaTaskList'), {
      components: this.fieldsToDisplay})
      .then((wizard) => {
        wizard.on('submit', (submission: any) => {
          console.log(submission);
          let variables = {}
          for (let i = 0; i < this.taskFormVariables.length; i++) {
            for (const submissionKey in submission.data) {
              for (const taskFormVariablesKey in this.taskFormVariables[i]) {
                if(taskFormVariablesKey === submissionKey){
                  this.taskFormVariables[i][taskFormVariablesKey].value = submission.data[submissionKey]
                }
              }
              variables = this.taskFormVariables[i];
            }
          }
          this.formResults = {variables};
          this.bpmnService.submitTaskFormVariablesByTaskId(this.taskId, this.formResults);
        });
      });
  }

  private mapToFormio(){
    for (let i = 0; i < this.taskFormVariables.length; i++) {
      for (const mappingKey in this.taskFormVariables[i]) {
        let mapping = {
          type: 'textfield',
          key: 'firstName',
          label: 'First Name',
          placeholder: 'Enter your first name.',
          input: true,
          validate: {
            required: true
          }
        }
        mapping.key = mappingKey;
        mapping.label = mappingKey;
        // @ts-ignore
        mapping.placeholder = this.taskFormVariables[i][mappingKey]["value"];
        this.fieldsToDisplay.push(mapping);
      }
    }
    this.createFormioForm();
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
    this.bpmnService.startProcessByKey(event.key).subscribe({
      next: (next) => {
        this.processInstances = [...this.processInstances, next];
        this.processInstanceId = next.id;
        this.subscribeToTasksByProcessInstanceId(next);
      },
      error: () => {},
      complete: () => {
      }
    });
  }

  subscribeToTasksByProcessInstanceId(event: any) {
    this.bpmnService.findAllTasks().subscribe({
      next: (tasks) => {
        this.tasks = [...this.tasks, ...tasks]
        for (let i = 0; i < tasks.length; i++) {
          if(tasks[i].processInstanceId === this.processInstanceId){
            this.selectedTask = tasks[i];
            this.taskId = tasks[i].id;
          }
        }
      },
      error: () => {},
      complete: () => {
        this.subscribeToTaskFormVariablesByTaskId();
        console.log(this.selectedTask);
      }
    });
  }

  subscribeToTaskFormVariablesByTaskId() {
    this.bpmnService.findTaskFormVariablesByTaskId(this.taskId).subscribe({
      next: (next) => {
        this.taskFormVariables = [...this.taskFormVariables, next]
        console.log(next);
      },
      error: () => {},
      complete: () => {
        console.log(this.taskFormVariables);
        this.claimTaskForAdminByTaskId();
      }
    });
  }

  claimTaskForAdminByTaskId() {
    this.bpmnService.claimTaskByTaskId(this.taskId).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {
        this.mapToFormio();
      }
    });
  }

  unclaimTaskByTaskId(event: any) {
    this.bpmnService.unclaimTaskByTaskId(this.taskId).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {}
    });
  }
}
