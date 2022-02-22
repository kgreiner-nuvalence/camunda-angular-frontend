import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class BpmnService {
  private bpmnBaseUrl: string;

  constructor(private http: HttpClient) {
    this.bpmnBaseUrl = 'http://localhost:8080/engine-rest'
  }

  findAllProcesseDefinitions(): Observable<any> {
    return this.http.get<any>(this.bpmnBaseUrl + '/process-definition');
  }

  startProcessByKey(processKey: string): Observable<any> {
    return this.http.post<any>(`${this.bpmnBaseUrl}/process-definition/key/${processKey}/start`, {});
  }

  findAllTasks() {
    return this.http.get<any>(this.bpmnBaseUrl + '/task');
  }

  findTasksByProcessInstanceId(processInstanceId: string) {
     let params = new HttpParams();

     params = params.append('processInstanceId', processInstanceId);

     return this.http.get<any>(this.bpmnBaseUrl + '/task', {params: params}); //TODO possibly incorrect httpparam usage
  }

  findTaskVariablesByTaskId(taskId: string) {
    return this.http.get<any>(`${this.bpmnBaseUrl}/task/${taskId}/variables`);
  }

  findTaskFormVariablesByTaskId(taskId: string) {
    return this.http.get<any>(`${this.bpmnBaseUrl}/task/${taskId}/form-variables`);
  }

  submitTaskFormVariablesByTaskId(taskId: string, variables: {}) {
    console.log({variables});
    return this.http.post<any>(`${this.bpmnBaseUrl}/task/${taskId}/submit-form`, {variables});
  }

  claimTaskByTaskId(taskId: string) {
    return this.http.post<any>(`${this.bpmnBaseUrl}/task/${taskId}/claim`, {'userId': 'admin'});
  }

  unclaimTaskByTaskId(taskId: string) {
    return this.http.post<any>(`${this.bpmnBaseUrl}/task/${taskId}/unclaim`,{});
  }

  getRenderedFormforTaskByTaskId(taskId: string) {
    const headerDict = {
      'Content-Type': 'application/xhtml+xml',
      'Accept': 'application/xhtml+xml',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
      responseType: 'text' as const
    };

    return this.http.get(`${this.bpmnBaseUrl}/task/${taskId}/rendered-form`, requestOptions);
  }

  getAllProcessInstanceVariablesByProcessInstanceId(processInstanceId: string) {
    return this.http.get(`${this.bpmnBaseUrl}/process-instance/${processInstanceId}/variables`)
  }
}
