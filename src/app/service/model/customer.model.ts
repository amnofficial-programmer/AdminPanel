import { AgentModel } from "./agent.model";

export class CustomerModel {

    nameOfApplicant: string;
    otherName: string;
    firmName: string;
    currentAddress: string;
    residentialAddress: string;
    nameOfBusiness: string;
    addressOfBusiness: string;
    mobileNo: string;
    loanAmount: number;
    repayment: string = 'daily';
    repaymentAmount: string;
    customerId: number;
    agent:AgentModel;
    activeStatus:boolean = true;
    openingDueAmount: string;
}