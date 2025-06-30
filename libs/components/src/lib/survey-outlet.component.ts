import {
    Component,
    inject,
    input,
    model,
    OnChanges,
    OnInit,
    output,
    signal,
    SimpleChanges,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler, notifySuccess, SettingsService } from '@placeos/common';
import {
    addAnswer,
    showQuestion,
    showSurvey,
    Survey,
    SurveyAnswer,
    SurveyQuestion,
} from '@placeos/ts-client';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { catchError, forkJoin, lastValueFrom, Observable, of } from 'rxjs';

@Component({
    selector: `survey-outlet`,
    template: `
        @if (survey()) {
            <div class="h-full w-full overflow-auto bg-base-100 px-2">
                <header
                    class="sticky top-0 z-10 mx-auto my-2 flex min-h-[4.5rem] w-[calc(100%-1rem)] w-full max-w-[40rem] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">
                        {{ survey().title }}
                    </h2>
                    <img
                        auth
                        class="h-12 sm:block"
                        alt="Logo"
                        [source]="logo?.src || logo"
                    />
                </header>
                @if (!loading()) {
                    @if (success()) {
                        <main
                            loading
                            class="mx-auto flex min-h-64 w-[calc(100%-1rem)] w-full max-w-[40rem] flex-col items-center justify-center space-y-2 space-y-4 rounded border border-base-300 p-4"
                        >
                            <p>
                                {{
                                    'APP.CONCIERGE.SURVEY_COMPLETE' | translate
                                }}
                            </p>
                        </main>
                    } @else {
                        @if (form) {
                            <main
                                page
                                class="mx-auto w-[calc(100%-1rem)] w-full max-w-[40rem] space-y-2 rounded border border-base-300 p-4"
                                [formGroup]="form"
                            >
                                @let page = survey().pages[active_page()];
                                <h3 class="text-lg font-medium">
                                    {{ page.title }}
                                </h3>
                                @for (q_id of page.question_order; track q_id) {
                                    @let question = questions[q_id];
                                    @if (question) {
                                        <div class="py-2">
                                            <h4
                                                class="mb-2 flex items-center justify-between"
                                            >
                                                <div class="font-medium">
                                                    {{ question.title }}
                                                </div>
                                                @if (question.required) {
                                                    <span
                                                        class="rounded bg-warning px-2 py-1 font-mono text-[0.625rem] text-warning-content"
                                                        >{{
                                                            'COMMON.REQUIRED'
                                                                | translate
                                                        }}</span
                                                    >
                                                }
                                            </h4>
                                            @switch (question.type) {
                                                @case ('rating') {
                                                    <div
                                                        btn-grp
                                                        class="divide-x divide-secondary py-2"
                                                    >
                                                        @for (
                                                            idx of question.options;
                                                            track idx
                                                        ) {
                                                            <button
                                                                matRipple
                                                                class="h-12 w-12 border-y border-secondary first:rounded-l first:border-l last:rounded-r last:!border-r"
                                                                [class.bg-secondary]="
                                                                    form.value[
                                                                        question
                                                                            .id
                                                                    ] === idx
                                                                "
                                                                [class.text-secondary-content]="
                                                                    form.value[
                                                                        question
                                                                            .id
                                                                    ] === idx
                                                                "
                                                                (click)="
                                                                    setRating(
                                                                        question.id,
                                                                        idx
                                                                    )
                                                                "
                                                            >
                                                                {{ idx }}
                                                            </button>
                                                        }
                                                    </div>
                                                }
                                                @case ('text') {
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <input
                                                            matInput
                                                            [formControlName]="
                                                                question.id
                                                            "
                                                            [placeholder]="
                                                                question.description ||
                                                                question.title
                                                            "
                                                        />
                                                    </mat-form-field>
                                                }
                                                @case ('comment') {
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <textarea
                                                            matInput
                                                            [formControlName]="
                                                                question.id
                                                            "
                                                            [placeholder]="
                                                                question.description ||
                                                                question.title
                                                            "
                                                        ></textarea>
                                                    </mat-form-field>
                                                }
                                                @case ('dropdown') {
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <mat-select
                                                            [formControlName]="
                                                                question.id
                                                            "
                                                            [placeholder]="
                                                                question.description ||
                                                                question.title
                                                            "
                                                        >
                                                            @for (
                                                                choice of question.choices;
                                                                track choice
                                                            ) {
                                                                <mat-option
                                                                    [value]="
                                                                        choice
                                                                    "
                                                                    >{{
                                                                        choice.text
                                                                    }}</mat-option
                                                                >
                                                            }
                                                        </mat-select>
                                                    </mat-form-field>
                                                }
                                                @case ('radiogroup') {
                                                    <mat-radio-group
                                                        [formControlName]="
                                                            question.id
                                                        "
                                                    >
                                                        <div
                                                            class="grid grid-cols-1 sm:grid-cols-2"
                                                        >
                                                            @for (
                                                                choice of question.choices;
                                                                track choice
                                                            ) {
                                                                <mat-radio-button
                                                                    [value]="
                                                                        choice
                                                                    "
                                                                    >{{
                                                                        choice.text
                                                                    }}</mat-radio-button
                                                                >
                                                            }
                                                        </div>
                                                    </mat-radio-group>
                                                }
                                                @case ('checkbox') {
                                                    <div
                                                        class="grid grid-cols-1 sm:grid-cols-2"
                                                    >
                                                        @for (
                                                            choice of question.choices;
                                                            track choice
                                                        ) {
                                                            <mat-checkbox
                                                                [ngModel]="
                                                                    form.value[
                                                                        question
                                                                            .id
                                                                    ].includes(
                                                                        choice.text
                                                                    )
                                                                "
                                                                [ngModelOptions]="{
                                                                    standalone: true,
                                                                }"
                                                                (ngModelChanges)="
                                                                    toggleOption(
                                                                        question.id,
                                                                        choice.text,
                                                                        $event
                                                                    )
                                                                "
                                                                >{{
                                                                    choice.text
                                                                }}</mat-checkbox
                                                            >
                                                        }
                                                    </div>
                                                }
                                                @default {}
                                            }
                                        </div>
                                    }
                                }
                            </main>
                            <footer
                                class="sticky bottom-0 z-10 mx-auto my-2 flex h-16 w-[calc(100%-1rem)] w-full max-w-[40rem] items-center justify-end space-x-2 rounded border-none bg-base-200 p-2"
                            >
                                @if (active_page() > 0) {
                                    <button
                                        btn
                                        matRipple
                                        class="inverse w-32 bg-base-100"
                                        (click)="previousPage()"
                                    >
                                        {{ 'COMMON.PREVIOUS' | translate }}
                                    </button>
                                }
                                @if (
                                    active_page() >= survey().pages.length - 1
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        class="w-32"
                                        [disabled]="preview()"
                                        (click)="submitSurvey()"
                                    >
                                        {{ 'COMMON.SUBMIT' | translate }}
                                    </button>
                                } @else {
                                    <button
                                        btn
                                        matRipple
                                        class="w-32"
                                        (click)="nextPage()"
                                    >
                                        {{ 'COMMON.NEXT' | translate }}
                                    </button>
                                }
                            </footer>
                        }
                    }
                } @else {
                    <main
                        loading
                        class="mx-auto flex min-h-64 w-[calc(100%-1rem)] w-full max-w-[40rem] flex-col items-center justify-center space-y-2 space-y-4 rounded border border-base-300 p-4"
                    >
                        <mat-spinner diameter="32"></mat-spinner>
                        <p>{{ loading() }}</p>
                    </main>
                }
            </div>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        RouterModule,
        AuthenticatedImageDirective,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        TranslatePipe,
    ],
})
export class SurveyOutletComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private readonly _route = inject(ActivatedRoute);
    private readonly _settings = inject(SettingsService);

    public readonly preview = input<boolean>(false);
    public readonly not_found = output<boolean>();

    public readonly survey_id = model<string>('');
    public readonly active_page = signal(0);
    public readonly loading = signal('');
    public readonly success = signal(false);
    public readonly survey = model<Survey>(null);
    public readonly questions: Record<string | number, SurveyQuestion> = {};
    public form: UntypedFormGroup;

    public get logo() {
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this.survey_id.set(params.get('id'));
                    this._updateSurvey();
                }
            }),
        );
    }

    public async ngOnChanges(changes: SimpleChanges) {
        if (changes.survey_id) this._updateSurvey();
        if (changes.survey) this._loadQuestions();
    }

    public nextPage() {
        this.active_page.update((p) => p + 1);
    }

    public previousPage() {
        this.active_page.update((p) => p - 1);
    }

    public setRating(question_id: string, rating: number) {
        this.form.patchValue({ [question_id]: rating });
    }

    public toggleOption(question_id: string, value: string, state: boolean) {
        let list = this.form.value[question_id];
        list = list.filter((_: any) => _ !== value);
        if (state) list.push(value);
        this.form.patchValue({ [question_id]: list });
    }

    public async submitSurvey() {
        this.form.markAllAsTouched();
        this.loading.set('Submitting survey answers...');
        if (!this.form.valid) return;
        this.loading.set('Saving survey answers...');
        const answers: Partial<SurveyAnswer>[] = [];
        for (const q_id in this.questions) {
            const value = this.form.value[q_id];
            if (value !== null && value !== undefined) {
                answers.push({
                    survey_id: +`${this.survey().id}`,
                    question_id: +`${q_id as any}`,
                    type: this.questions[q_id].type,
                    answer_json: value,
                });
            }
        }
        await lastValueFrom(addAnswer(answers));
        notifySuccess('Successfully submitted survey answers.');
        this.success.set(true);
        this.loading.set('');
    }

    private async _updateSurvey() {
        this.timeout('not_found', () => this.not_found.emit(true));
        if (!this.survey_id()) return;
        this.loading.set('Loading survey details...');
        const survey = await lastValueFrom(
            showSurvey(this.survey_id()).pipe(catchError((_) => of(null))),
        );
        if (!survey) return this.not_found.emit(true);
        this.survey.set(survey);
        await this._loadQuestions();
        this.clearTimeout('not_found');
    }

    private async _loadQuestions() {
        if (!this.survey()?.pages.length) return;
        this.loading.set('Loading survey questions...');
        const requests: Observable<SurveyQuestion>[] = [];
        for (const page of this.survey().pages) {
            for (const question_id of page.question_order) {
                requests.push(showQuestion(`${question_id}`));
            }
        }
        if (!requests.length) return;
        const questions = await lastValueFrom(forkJoin(requests));
        for (const q of questions) {
            this.questions[q.id] = q;
            if (q.type === 'rating') {
                q.options = new Array(q.max_rating)
                    .fill(0)
                    .map((_, idx) => idx + 1);
            }
        }
        console.log('Questions:', questions);
        this._generateForm();
    }

    private _generateForm() {
        const controls = {};
        for (const q_id in this.questions) {
            const v = this.questions[q_id].required
                ? [Validators.required]
                : [];
            switch (this.questions[q_id].type) {
                case 'rating':
                    controls[q_id] = new FormControl<number>(null, v);
                    break;
                case 'text':
                case 'comment':
                    controls[q_id] = new FormControl<string>('', v);
                    break;
                case 'dropdown':
                    controls[q_id] = new FormControl<string>('', v);
                    break;
                case 'radiogroup':
                    controls[q_id] = new FormControl<string>('', v);
                    break;
                case 'checkbox':
                    controls[q_id] = new FormControl<string[]>([], v);
                    break;
            }
        }
        this.form = new FormGroup(controls);
        this.loading.set('');
    }
}
