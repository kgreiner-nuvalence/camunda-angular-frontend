export class ProcessInstance {
    id: string;
    definitionId: string;
    businessKey: string;
    caseInstanceId: string;
    ended: boolean;
    suspended: boolean;
    links: string;
    variables: string;

    constructor(
        id: string,
        definitionId: string,
        businessKey: string,
        caseInstanceId: string,
        ended: boolean,
        suspended: boolean,
        links: string,
        variables: string
    ) {
        this.id = id;
        this.definitionId = definitionId;
        this.businessKey = businessKey;
        this.caseInstanceId = caseInstanceId;
        this.ended = ended;
        this.suspended = suspended;
        this.links = links;
        this.variables = variables;
    }
}
