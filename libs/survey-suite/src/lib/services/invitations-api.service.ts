import { Inject, Injectable } from "@angular/core";
import { InvitationsApi, SurveyInvitationResponder } from "@placeos/survey-ts-client";
import { INVITATIONS_API_ADAPTER } from "../survey-suite.module";

@Injectable({providedIn:'root'})
export class InvitationsApiService{

    constructor(
        @Inject(INVITATIONS_API_ADAPTER)
        private api: InvitationsApi
    ){}

    async getInvitations(survey_id?:number, sent?:boolean){
        return await this.api.surveysInvitationsIndex(survey_id, sent).then(res => res.data);
    }

    async createInvitation(invitation: SurveyInvitationResponder){
        return await this.api.surveysInvitationsCreate(invitation).then(res => res.data);
    }

    async getInvitationByToken(token:string){
        return await this.api.surveysInvitationsShow(token).then(res => res.data);
    }

    async deleteInvitationByToken(token:string){
        return await this.api.surveysInvitationsDestroy(token).then(res => res.data);
    }
}