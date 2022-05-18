import { Component, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { map, take } from 'rxjs/operators';
import { SpacesService } from '../spaces.service';

@Component({
    selector: `space-filters`,
    template: `
        <div class="flex items-center border-b border-gray-200 pb-2">
            <div class="flex-1 pl-2">
                <button
                    mat-icon-button
                    close
                    class="sm:hidden"
                    *ngIf="can_close"
                    (click)="close()"
                >
                    <app-icon>keyboard_arrow_left</app-icon>
                </button>
            </div>
            <h3 class="font-medium flex-2 text-center">Space Filters</h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="max-h-[65vh] p-2 overflow-y-auto overflow-x-hidden divide-y divide-gray-200 w-full max-w-[100vw]"
            [formGroup]="form"
        >
            <section details>
                <h2 class="text-lg font-medium">Details</h2>
                <div class="flex-1 min-w-[256px] flex flex-col">
                    <label for="location">Location</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="location"
                            [ngModel]="(options | async)?.zone_ids"
                            (ngModelChange)="setOptions({ zone_ids: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [placeholder]="bld?.display_name || bld?.name"
                            [multiple]="true"
                        >
                            <mat-option
                                *ngFor="let lvl of levels | async"
                                [value]="lvl.id"
                            >
                                {{ lvl.bld }},
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex-1 min-w-[256px]">
                    <label for="date">Date<span>*</span></label>
                    <a-date-field name="date" formControlName="date">
                        Date and time must be in the future
                    </a-date-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="start-time">Start Time<span>*</span></label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3">
                        <label for="end-time">End Time<span>*</span></label>
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form?.value?.date"
                            [max]="max_duration"
                        >
                        </a-duration-field>
                    </div>
                </div>
            </section>
            <section favs class="space-y-2 pb-4">
                <h2 class="text-lg font-medium">Favourites</h2>
                <div class="flex items-center">
                    <div for="fav" class="flex-1 w-1/2">
                        Only show favourite rooms
                    </div>
                    <mat-checkbox
                        name="fav"
                        [ngModel]="(options | async)?.show_fav"
                        (ngModelChange)="setOptions({ show_fav: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </mat-checkbox>
                </div>
            </section>
            <section
                features
                class="space-y-2"
                *ngIf="(features | async)?.length"
            >
                <h2 class="text-lg font-medium">Facilities</h2>
                <div
                    class="flex items-center"
                    *ngFor="let feat of features | async"
                >
                    <div for="feat" class="flex-1 w-1/2">{{ feat }}</div>
                    <mat-checkbox
                        name="feat"
                        [ngModel]="(options | async)?.features?.includes(feat)"
                        (ngModelChange)="toggleFeature(feat, $event)"
                        [ngModelOptions]="{ standalone: true }"
                    ></mat-checkbox>
                </div>
            </section>
        </form>
        <div
            class="px-2 pt-2 w-full border-t border-gray-200"
            *ngIf="can_close"
        >
            <button mat-button close class="w-full" (click)="close()">
                Apply Filters
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 100vw;
            }
        `,
    ],
})
export class SpaceFiltersComponent {
    public can_close = false;
    public readonly options = this._event_form.options;

    public readonly levels = this._org.level_list.pipe(
        map((l) => {
            for (const lvl of l) {
                const bld = this._org.buildings.find(
                    (_) => _.id === lvl.parent_id
                );
                (lvl as any).bld = bld?.display_name || bld?.name || '';
            }
            return l;
        })
    );
    public readonly features = this._spaces.features;

    public readonly close = () => this._bsheet_ref.dismiss();
    public readonly setOptions = (o) => this._event_form.setOptions(o);

    public get bld() {
        return this._org.building;
    }

    public get form() {
        return this._event_form.form;
    }

    public get max_duration() {
        return this._settings.get('app.event.max_duration') || 480;
    }

    constructor(
        @Optional()
        private _bsheet_ref: MatBottomSheetRef<SpaceFiltersComponent>,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _spaces: SpacesService
    ) {
        this.can_close = !!this._bsheet_ref;
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = await this.options.pipe(take(1)).toPromise();
        const new_list = (features || []).filter(_ => feat !== _);
        if (state) new_list.push(feat);
        console.log('Feature:', feat, state, new_list);
        this.setOptions({ features: new_list });
    }
}
