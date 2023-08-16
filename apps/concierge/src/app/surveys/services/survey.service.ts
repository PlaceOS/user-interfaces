import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    SettingsService,
    notifyError,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import {
    generateNewSurvey,
    Question,
    translateToQuestion,
    translateToSurveyPage,
    translateToUISurveyObj,
    TriggerEnum,
    UISurveyObj,
} from '@placeos/survey-suite';
import {
    queryQuestions,
    showSurvey,
    Survey,
    addSurvey,
    updateSurvey,
    removeSurvey,
} from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, first, map } from 'rxjs/operators';
import { SurveyBuilderService } from './survey-builder.service';

export interface SurveyOptions {
    zone_id: string;
    building_id: string;
    trigger?: TriggerEnum;
}

@Injectable()
export class SurveyService {
    private readonly _loading = new BehaviorSubject<string>('');
    public readonly loading$ = this._loading.asObservable();
    public get loading() {
        return this._loading.getValue();
    }
    public set loading(value: string) {
        this._loading.next(value);
    }

    private readonly _options = new BehaviorSubject<SurveyOptions>({
        zone_id: '',
        building_id: '',
        trigger: TriggerEnum.None,
    });
    public readonly _options$ = this._options.asObservable();

    constructor(
        private _settings: SettingsService,
        private router: Router,
        private builder: SurveyBuilderService,
        private dialog: MatDialog
    ) {}

    public async loadSurvey(survey_id: string) {
        if (!survey_id?.length) {
            this.builder.setUISurvey(generateNewSurvey());
            return;
        }
        const uiSurvey = await this.getSurveyDetails(survey_id);
        if (!uiSurvey) return;

        this.builder.setUISurvey(uiSurvey);
        this.setOptions({
            zone_id: uiSurvey.zone_id,
            building_id: uiSurvey.building_id,
            trigger: uiSurvey.trigger,
        });
    }

    public async getSurveyDetails(survey_id: string) {
        this.loading = 'Loading survey...';
        const results = await Promise.all([
            this.getSurvey(survey_id),
            this.getSurveyQuestions(survey_id),
        ]);
        this.loading = '';
        const [survey, questions] = results;
        if (!survey) return null;
        return translateToUISurveyObj(survey, questions);
    }

    public async confirmDeleteSurvey(id: number) {
        const details = await openConfirmModal(
            {
                title: 'Confirm delete question',
                content: `Are you sure you want to delete this survey? \n
                            Note: This action is irreversible.`,
                icon: { class: 'material-icons', content: 'delete' },
            },
            this.dialog
        );
        if (details.reason !== 'done') return;
        details.close();
        await this.deleteSurvey(id);
    }

    public saveSurvey() {
        const survey = this.builder.getUISurvey();
        if (!this.validateSurvey(survey)) return false;
        const { id, title, description, pages } = survey;
        const { zone_id, building_id, trigger } = this._options.getValue();
        let toSave: Survey = {
            id,
            title,
            description,
            trigger,
            zone_id: zone_id?.length ? zone_id : building_id,
            building_id,
            pages: translateToSurveyPage(pages),
        };

        if (id > 0) {
            this.updateSurvey(toSave);
        } else {
            this.createSurvey(toSave);
        }
    }

    public setOptions(options: Partial<SurveyOptions>) {
        if (!options) return;
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public back() {
        const building_id = this._options.getValue()?.building_id || '';
        if (building_id?.length) {
            this.router.navigate([
                this._settings.get('app.default_route').includes('new')
                    ? '/surveys/new'
                    : '/surveys',
                'survey-list',
                building_id,
            ]);
        } else {
            this.router.navigate([
                this._settings.get('app.default_route').includes('new')
                    ? '/surveys/new'
                    : '/surveys',
            ]);
        }
    }

    private getSurvey(id: string): Promise<Survey> {
        return showSurvey(id)
            .pipe(
                first(),
                catchError((err) => {
                    notifyError('Error loading survey');
                    return null;
                })
            )
            .toPromise() as Promise<Survey>;
    }

    private getSurveyQuestions(survey_id: string) {
        return queryQuestions({ survey_id })
            .pipe(
                first(),
                map((questions) =>
                    questions.map((e) => translateToQuestion(e))
                ),
                catchError((err) => {
                    notifyError('Error loading survey questions');
                    return [];
                })
            )
            .toPromise() as Promise<Question[]>;
    }

    private validateSurvey(survey: UISurveyObj) {
        const options = this._options.getValue();

        if (!survey) {
            notifyError('Survey is not valid');
            return false;
        }

        if (!survey.title?.length) {
            notifyError('Please enter a valid title for the survey');
            return false;
        }

        if (!options.building_id?.length) {
            notifyError('Please select a valid building for this survey');
            return false;
        }
        let allQuestions = [];
        survey.pages.forEach(
            (p) => (allQuestions = [...allQuestions, ...p.elements])
        );
        if (allQuestions.length === 0) {
            notifyError('Please add at least 1 question to any page');
            return false;
        }

        return true;
    }

    private async deleteSurvey(id: number) {
        this.loading = 'Deleting survey...';
        const res = await removeSurvey(`${id}`)
            .pipe(
                first(),
                finalize(() => (this.loading = ''))
            )
            .toPromise();
        if (res) {
            notifySuccess('Successfully deleted survey');
        }
    }

    private async createSurvey(survey: Survey) {
        this.loading = 'Adding survey...';
        const res = await addSurvey(survey)
            .pipe(
                first(),
                catchError((err) => {
                    notifyError('Failed to create survey');
                    return of(null);
                }),
                finalize(() => (this.loading = ''))
            )
            .toPromise();
        if (res) {
            notifySuccess('Survey created successfully');
            this.back();
        }
    }

    private async updateSurvey(survey: Survey) {
        this.loading = 'Updating survey...';
        const res = await updateSurvey(`${survey.id}`, survey)
            .pipe(
                first(),
                catchError((err) => {
                    notifyError('Failed to update survey');
                    return of(null);
                }),
                finalize(() => (this.loading = ''))
            )
            .toPromise();
        if (res) {
            notifySuccess('Survey updated successfully');
            this.back();
        }
    }
}
