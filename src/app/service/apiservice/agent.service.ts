import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Globals } from '../../global';
import { AgentModel } from '../model/agent.model';

@Injectable({
    providedIn: 'root'
})

export class AgentService {

    constructor(private httpclient: HttpClient, private global: Globals) { }

    getAgentList() {
        return this.httpclient.get(this.global.G_apiUrl + "/web/agent");
    }
    getAgentListByPagination(pageNo,pageSize) {
        return this.httpclient.get(this.global.G_apiUrl + "/web/agents/agent-list-pagination"+'?pageNo='+pageNo+'&pageSize='+pageSize);
    }

    AddAgent(agent: AgentModel) {
       
          let entity = {
              "activeStatus": agent.activeStatus,
              "agentId": 0,
              "mobileNo": agent.mobileNo,
              "name": agent.name,
              "password": agent.password
          }
        return this.httpclient.post(this.global.G_apiUrl + '/web/agent',entity);
    }

    UpdateAgent(agent: AgentModel) {
        let entity = {
            "activeStatus": agent.activeStatus,
            "agentId": agent.agentId,
            "mobileNo": agent.mobileNo,
            "name": agent.name,
            "password": agent.password
        }
        return this.httpclient.put(this.global.G_apiUrl + '/web/agent',entity);
    }

    DeleteAgent(agentId) {
        return this.httpclient.delete(this.global.G_apiUrl + "/web/agent/" + agentId,{responseType:'text'});
    }

    GetAgent(agentId: any) {
        return this.httpclient.get(this.global.G_apiUrl + "/web/agent/" + agentId);
    }
}