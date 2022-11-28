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
export function showSurvey(q: any) {
    const query = toQueryString(q);
    return get(`${SURVEYS_ENDPOINT}${query ? '?' + query : ''}`).pipe(
        map((item) => item),
        catchError((err) => {
            throw 'new error' + err;
        })
    );
}
