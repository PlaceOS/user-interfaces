import { Injectable } from '@angular/core';
import {
    SurveyResponder,
    SurveysApi,
} from '@placeos/survey-ts-client/src/lib/api';
import {
    Configuration,
    ConfigurationParameters,
} from '@placeos/survey-ts-client/src/lib/configuration';
import { token } from '@placeos/ts-client';

@Injectable({
    providedIn: 'root',
})
export class ApiMethodsService {
    readonly api: SurveysApi;

    constructor() {
        //Configure token
        const basePath = 'https://placeos-dev.aca.im';
        const configParams: ConfigurationParameters = {
            accessToken: token.toString(),
            basePath: basePath,
        };

        const ApiConfiguration: Configuration = new Configuration(configParams);

        this.api = new SurveysApi(ApiConfiguration);
        this.testApi();
    }

    async testApi() {
        const res = await this.api
            .surveysShow(1)
            .then((res) => res?.data || null);
        console.log(res, 'response from backend');
    }
}
