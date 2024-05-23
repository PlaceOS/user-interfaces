import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    AsyncHandler,
    TIMEZONES_IANA,
    getInvalidFields,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { Building, OrganisationService } from '@placeos/organisation';
import { addZone, authority, updateZone } from '@placeos/ts-client';

@Component({
    selector: 'building-form',
    template: `
        <ng-container *ngIf="!loading; else load_state">
            <form
                building
                class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
                *ngIf="form"
                [formGroup]="form"
            >
                <div
                    class="flex flex-col"
                    *ngIf="(region_list | async)?.length"
                >
                    <label for="region" i18n="@@displayNameLabel">
                        Region:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="region"
                            formControlName="parent_id"
                            placeholder="Select Region..."
                        >
                            <mat-option [value]="default_parent"
                                >None</mat-option
                            >
                            <mat-option
                                *ngFor="let region of region_list | async"
                                [value]="region.id"
                            >
                                {{ region.display_name || region.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name" i18n="@@displayNameLabel">
                        Display Name:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="display-name"
                            placeholder="Display Name"
                            formControlName="display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name" i18n="@@displayNameLabel">
                        Timezone:
                    </label>
                    <mat-form-field appearance="outline">
                        <app-icon matPrefix class="text-2xl">search</app-icon>
                        <input
                            matInput
                            formControlName="timezone"
                            placeholder="Building timezone"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        <mat-option
                            *ngFor="let tz of filtered_timezones"
                            [value]="tz"
                            >{{ tz }}</mat-option
                        >
                        <mat-option *ngIf="!timezones.length" [disabled]="true">
                            No matching timezones
                        </mat-option>
                    </mat-autocomplete>
                </div>
                <div class="flex flex-col">
                    <label for="address" i18n="@@displayNameLabel">
                        Location:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="address"
                            placeholder="Location or Address..."
                            formControlName="location"
                        />
                    </mat-form-field>
                </div>
            </form>
        </ng-container>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center w-64 h-64">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">Saving building...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class BuildingFormComponent extends AsyncHandler {
    @Input() public building: Building | null = null;
    @Input() public save: number = 0;
    @Input() public loading = false;
    @Output() public loadingChange = new EventEmitter<boolean>();
    @Output() public done = new EventEmitter();

    public timezones: string[] = [];
    public filtered_timezones: string[] = [];
    public readonly region_list = this._org.region_list;

    public readonly form = new FormGroup({
        id: new FormControl(''),
        parent_id: new FormControl(this._org.organisation.id, [
            Validators.required,
        ]),
        display_name: new FormControl('', [Validators.required]),
        timezone: new FormControl(
            Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ''
        ),
        location: new FormControl(''),
    });

    public get default_parent() {
        return this._org.organisation.id;
    }

    constructor(private _org: OrganisationService) {
        super();
    }

    public ngOnInit() {
        this._updateTimezoneList();
        this.subscription(
            'tz-change',
            this.form.valueChanges.subscribe(() => this._updateTimezoneList())
        );
        if (this.building) this.form.patchValue(this.building);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.building && this.building) {
            this.form.patchValue(this.building);
        }
        if (changes.save && this.save) this.saveChanges();
    }

    public async saveChanges() {
        this.form.patchValue({
            parent_id: this.form.value.parent_id || this._org.organisation.id,
        });
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form
                ).join(', ')}]`
            );
        }
        const data = this.form.getRawValue();
        this.loading = true;
        this.loadingChange.emit(true);
        const body = {
            ...data,
            tags: ['building'],
            name: `BLD ${authority().description} ${data.display_name}`,
        };
        const building = await (data.id
            ? updateZone(data.id, body)
            : addZone(body)
        )
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error saving building: ${e.message || e.error || e}`
                );
                this.loading = false;
                this.loadingChange.emit(false);
                throw e;
            });
        notifySuccess('Successfully saved building.');
        this.loading = false;
        this.loadingChange.emit(false);
        this.done.emit(building);
    }

    private _updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase())
        );
    }
}
