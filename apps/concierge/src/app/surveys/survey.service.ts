import { computed, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { notifySuccess, OrganisationService } from '@placeos/common';
import {
    queryAnswers,
    querySurveys,
    removeSurvey,
    Survey,
    SurveyAnswer,
} from '@placeos/ts-client';
import { confirmAction, errorText } from '../ui/modal-actions';

/** Most answer requests that run at the same time */
const ANSWER_REQUEST_LIMIT = 6;

/**
 * Run `fn` for each item with at most `limit` calls in progress.
 * Results keep the order of the items.
 */
async function mapWithLimit<T, R>(
    items: readonly T[],
    limit: number,
    fn: (item: T) => Promise<R>,
): Promise<R[]> {
    const results = new Array<R>(items.length);
    let next_index = 0;
    const worker = async () => {
        while (next_index < items.length) {
            const index = next_index++;
            results[index] = await fn(items[index]);
        }
    };
    await Promise.all(
        Array.from({ length: Math.min(limit, items.length) }, worker),
    );
    return results;
}

enum LoadType {
    SURVEYS = 'surveys',
    ANSWERS = 'answers',
}

@Injectable({
    providedIn: 'root',
})
export class SurveyService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public readonly building = signal('');
    public readonly survey_list = signal<Survey[]>([]);
    public readonly answer_list = signal<SurveyAnswer[]>([]);
    public readonly building_surveys = computed(() => {
        return this.survey_list().filter(
            (survey) => survey.building_id === this.building(),
        );
    });

    /** Resolves when the first survey list load is done */
    private readonly _surveys_ready: Promise<void>;
    /** Answers load at most one time, when a view asks for them */
    private _answers_request?: Promise<void>;

    constructor() {
        // Only surveys load at start. Answers load when the building list
        // shows their counts.
        this._surveys_ready = this._org
            .waitUntilInitialised()
            .then(() => new Promise((resolve) => setTimeout(resolve, 300)))
            .then(() => this._load(LoadType.SURVEYS));
    }

    /** Load the answers for all surveys if they are not loaded yet */
    public loadAnswers() {
        this._answers_request ??= this._surveys_ready
            .then(() => this._load(LoadType.ANSWERS))
            .catch(() => {
                // Let the next call try again
                this._answers_request = undefined;
            });
        return this._answers_request;
    }

    public setBuilding(id: string) {
        this.building.set(id);
    }

    public async removeSurvey(survey: Survey) {
        const removed = await confirmAction(
            this._dialog,
            {
                title: 'Remove Survey',
                content: 'Are you sure you want to remove this survey?',
                icon: { content: 'warning' },
            },
            {
                loading: 'Removing survey...',
                action: () => removeSurvey(`${survey.id}`),
                error: (e) => `Failed to remove survey. ${errorText(e)}`,
            },
        );
        if (!removed) return;
        notifySuccess('Successfully removed survey.');
        this._load(LoadType.SURVEYS);
    }

    private async _load(type: LoadType) {
        const buildings = this._org.building_list();
        if (!buildings) return;
        if (type === LoadType.SURVEYS) {
            const surveys = await Promise.all(
                buildings.map((bld) => querySurveys({ building_id: bld.id })),
            );
            const survey_list = surveys.flat();
            this.survey_list.set(survey_list);
        }
        if (type === LoadType.ANSWERS) {
            const answers = await mapWithLimit(
                this.survey_list(),
                ANSWER_REQUEST_LIMIT,
                (survey) => queryAnswers({ survey_id: survey.id }),
            );
            this.answer_list.set(answers.flat());
        }
    }
}
