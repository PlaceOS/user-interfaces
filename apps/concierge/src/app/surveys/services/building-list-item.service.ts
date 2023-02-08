import { Injectable } from '@angular/core';
import { notifyError } from '@placeos/common';
import { TriggerEnum } from '@placeos/survey-suite';
import { queryAnswers, querySurveys, Survey } from '@placeos/ts-client';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';

export interface BuildingSurveyStats {
    lives: number;
    drafts: number;
    responses: number;
}

@Injectable()
export class BuildingListItemService {
    private readonly _loading = new BehaviorSubject<string>('');
    public readonly loading$ = this._loading.asObservable();
    set loading(value: string) {
        this._loading.next(value);
    }

    private readonly _stats = new BehaviorSubject<BuildingSurveyStats>({
        lives: 0,
        drafts: 0,
        responses: 0,
    });
    public readonly stats$ = this._stats.asObservable();
    set stats(value: BuildingSurveyStats) {
        this._stats.next(value);
    }

    constructor() {}

    async initStats(building_id: string) {
        if (!building_id?.length) return;
        const stats = {
            lives: 0,
            drafts: 0,
            responses: 0,
        };

        this.loading = 'Loading statistics';
        const surveys = await this.getBuildingSurveys(building_id);
        let resArr = [];
        surveys.forEach((s) => {
            if (s.trigger === TriggerEnum.None) stats.drafts += 1;
            else stats.lives += 1;
            resArr.push(this.getSurveyResponses(`${s.id}`));
        });
        if (resArr.length > 0) {
            const res = await forkJoin(resArr)
                .pipe(
                    map((res: number[]) =>
                        res.reduce((arr, curr) => arr + curr, 0)
                    )
                )
                .toPromise();
            stats.responses = res;
        }
        this.stats = stats;
        this.loading = '';
    }

    private async getBuildingSurveys(building_id: string) {
        return querySurveys({ building_id })
            .pipe(
                first(),
                catchError((err) => {
                    notifyError('Error loading surveys');
                    return of(null);
                })
            )
            .toPromise() as Promise<Survey[]>;
    }

    private async getSurveyResponses(survey_id: string) {
        return queryAnswers({ survey_id })
            .pipe(
                first(),
                map((answers) => answers?.length || 0),
                catchError((err) => of(0))
            )
            .toPromise();
    }
}
