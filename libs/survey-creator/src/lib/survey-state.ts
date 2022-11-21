import { get } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

export function getAllSurveys(id: string) {
    return get(
        `/api/staff/v1/surveys/find_survey/${encodeURIComponent(id)}`
    ).pipe(map((result) => console.log(result)));
}
