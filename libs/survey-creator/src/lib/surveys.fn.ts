import { del, get, patch, post, put } from '@placeos/ts-client';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { toQueryString } from '../../../common/src/lib/api';

const SURVEYS_ENDPOINT = `/api/staff/v1/surveys`;

/**
 * Get all surveys
 */

export function querySurveys(): Observable<any> {
    return get(`${SURVEYS_ENDPOINT}`).pipe(
        map((list) => list),
        catchError((err) => {
            throw 'new error' + err;
        })
    );
}

/**
 * Get a survey by id
 */
export function showSurvey(id: any) {
    return get(`${SURVEYS_ENDPOINT}/${encodeURIComponent(id)}`).pipe(
        map((item) => item),
        catchError((err) => {
            throw 'new error' + err;
        })
    );
}

/**
 * Create a new survey and add it to the database
 */
export function createSurvey(data: any) {
    return post(`${SURVEYS_ENDPOINT}`, data).pipe(
        map((item) => item),
        catchError((err) => {
            throw 'new error' + err;
        })
    );
}
