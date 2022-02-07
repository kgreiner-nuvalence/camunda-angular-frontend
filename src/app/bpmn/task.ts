export class Task {
id: string;
name: string;
assignee: string;
created: string;
due: string;
followUp:string;
delegationState:string;
description:string;
executionId:string;
owner:string;
parentTaskId:string;
priority: number;
processDefinitionId:string;
processInstanceId:string;
taskDefinitionKey:string;
caseExecutionId:string;
caseInstanceId:string;
caseDefinitionId:string;
suspended:string;
formKey:string;
tenantId:string;

constructor(
    id: string,
    name: string,
    assignee: string,
    created: string,
    due: string,
    followUp:string,
    delegationState:string,
    description:string,
    executionId:string,
    owner:string,
    parentTaskId:string,
    priority: number,
    processDefinitionId:string,
    processInstanceId:string,
    taskDefinitionKey:string,
    caseExecutionId:string,
    caseInstanceId:string,
    caseDefinitionId:string,
    suspended:string,
    formKey:string,
    tenantId:string
) {
    this.id = id;
    this.name = name;
    this.assignee = assignee;
    this.created = created;
    this.due = due;
    this.followUp = followUp;
    this.delegationState = delegationState;
    this.description = description;
    this.executionId = executionId;
    this.owner = owner;
    this.parentTaskId = parentTaskId;
    this.priority = priority;
    this.processDefinitionId = processDefinitionId;
    this.processInstanceId = processInstanceId;
    this.taskDefinitionKey = taskDefinitionKey;
    this.caseExecutionId = caseExecutionId;
    this.caseInstanceId = caseInstanceId;
    this.caseDefinitionId = caseDefinitionId;
    this.suspended = suspended;
    this.formKey = formKey;
    this.tenantId = tenantId;
    }
}
