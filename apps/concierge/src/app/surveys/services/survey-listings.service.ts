import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService, notifyError } from '@placeos/common';
import { Building, OrganisationService } from '@placeos/organisation';
import { querySurveys, Survey } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { catchError, finalize, first, map, take, tap } from 'rxjs/operators';
import { SurveyService } from './survey.service';

@Injectable()
export class SurveyListingsService {
    building: Building;

    private readonly _loading = new BehaviorSubject<string>('');
    public readonly loading$ = this._loading.asObservable();
    private set loading(value: string) {
        this._loading.next(value);
    }

    private readonly _trigger = new BehaviorSubject<number>(0);

    private readonly _surveys = new BehaviorSubject<Survey[]>([]);
    public readonly surveys$ = this._surveys.asObservable();
    private set surveys(value: Survey[]) {
        this._surveys.next(value);
    }

    private readonly _building_id = new BehaviorSubject<string>('');
    public readonly building$ = combineLatest([
        this.org.building_list,
        this._building_id,
    ]).pipe(map(([buildings, id]) => buildings.find((e) => e.id === id)));

    public levelNameMap$ = combineLatest([
        this.building$,
        this.org.level_list,
    ]).pipe(
        map(([building, level_list]) => {
            let map = {};
            if (!building) return map;
            map[building.id] = 'All Levels';
            const levels = level_list.filter(
                (lvl) => lvl.parent_id === building?.id
            );
            levels.forEach((e) => (map[e.id] = e.display_name || e.name));
            return map;
        })
    );

    constructor(
        private _settings: SettingsService,
        private router: Router,
        private org: OrganisationService,
        private survey: SurveyService
    ) {}

    public initBuilding(building_id: string) {
        if (!building_id?.length) return;
        this._building_id.next(building_id);
        this.loadBuildingSurveys(building_id);
    }

    public reloadBuilding() {
        const id = this._building_id.getValue();
        this.loadBuildingSurveys(id);
    }

    public async deleteSurvey(id: number) {
        await this.survey.confirmDeleteSurvey(id);
        this.reloadBuilding();
    }

    public editSurvey(id: number) {
        this.router.navigate(
            [
                this._settings.get('app.default_route').includes('new')
                    ? '/surveys/new'
                    : '/surveys',
                'builder',
            ],
            {
                queryParams: { survey_id: id },
            }
        );
    }

    public async newSurvey() {
        const building = await this.building$.pipe(take(1)).toPromise();
        this.router.navigate(
            [
                this._settings.get('app.default_route').includes('new')
                    ? '/surveys/new'
                    : '/surveys',
                'builder',
            ],
            {
                queryParams: { building_id: building?.id || '' },
            }
        );
    }

    public back() {
        this.router.navigate([
            this._settings.get('app.default_route').includes('new')
                ? '/surveys/new'
                : '/surveys',
        ]);
    }

    private async loadBuildingSurveys(building_id: string) {
        if (!building_id?.length) return;
        this.loading = 'Loading surveys...';
        const res = await querySurveys({ building_id })
            .pipe(
                first(),
                catchError((err) => {
                    notifyError(`Error loading surveys`);
                    return [];
                }),
                finalize(() => (this.loading = ''))
            )
            .toPromise();
        this.surveys = res.sort((a, b) =>
            `${a.zone_id}`.localeCompare(b.zone_id)
        );
    }
}
