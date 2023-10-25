import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService, findNearbyFeature } from '@placeos/bookings';
import {
    currentUser,
    getInvalidFields,
    notifyError,
    randomInt,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addDays, setHours, addMinutes, roundToNearestMinutes } from 'date-fns';
import { first, take } from 'rxjs/operators';

@Component({
    selector: 'desk-flow-form',
    template: `
        <section form class="flex-1 min-h-[50%]">
            <h2
                class="text-xl uppercase font-medium mb-2 mt-4 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                {{ is_edit ? 'Edit' : 'Detailed' }} Desk Booking
            </h2>
            <detailed-book-desks-form [form]="form"></detailed-book-desks-form>
            <div class="mb-4 border-b border-base-200 w-full"></div>
            <div
                class="flex flex-col sm:flex-row items-center justify-center space-x-0 space-y-2 sm:space-y-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
            >
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem] inverse"
                    btn
                    matRipple
                    clear
                    (click)="clearForm()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">clear</app-icon>
                        <span class="ml-2 mx-4">{{
                            is_edit ? 'Cancel Edit' : 'Clear Form'
                        }}</span>
                    </div>
                </button>
                <button
                    class="sm:flex-1 w-full sm:w-auto h-[2.75rem]"
                    find
                    btn
                    matRipple
                    *ngIf="!auto_allocation; else alloc_button"
                    (click)="findDesk()"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-xl">search</app-icon>
                        <span class="ml-2 mx-4">{{
                            is_edit ? 'Update Desk' : 'Find Desk'
                        }}</span>
                    </div>
                </button>
            </div>
        </section>
        <ng-template #alloc_button>
            <button
                class="sm:flex-1 w-full sm:w-auto h-[2.75rem]"
                find
                btn
                matRipple
                (click)="allocateDesk()"
            >
                {{ is_edit ? 'Update Desk' : 'Book Desk' }}
            </button>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                overflow: auto;
            }

            [quick] {
                background-color: #007ac8;
            }
        `,
    ],
})
export class DeskFlowFormComponent implements OnInit {
    public time = 0;
    public level = '';

    public readonly quick_times = [
        { name: 'Now', value: 0 },
        {
            name: 'Tomorrow',
            value: setHours(addDays(new Date(), 1), 9).valueOf(),
        },
    ];

    public levels = [];

    public get is_edit() {
        return !!this.form?.get('id')?.value;
    }

    public get auto_allocation() {
        return !!this._settings.get('app.desks.auto_allocation');
    }

    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this.time = 0;
        this.level = this._org.building.id;
        this._state.clearForm();
    };

    constructor(
        private _state: BookingFormService,
        private _router: Router,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _));
        await this._org.active_levels.pipe(first((_) => _?.length > 0));
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
    }

    public quickBook() {
        this.form.patchValue({
            date: (this.time < 24 * 60
                ? addMinutes(
                      roundToNearestMinutes(new Date(), { nearestTo: 5 }),
                      this.time
                  )
                : setHours(addDays(new Date(), 1), 8)
            ).valueOf(),
            title: 'Ad-hoc Desk Booking',
        });
        this.findDesk();
    }

    public findDesk() {
        this.form.markAllAsTouched();
        this.form.patchValue({ asset_id: ' ' });
        if (!this.form.valid) return;
        this.form.patchValue({ asset_id: '' });
        this._router.navigate(['/book', 'desks', 'map']);
    }

    public async allocateDesk() {
        this.form.markAllAsTouched();
        this.form.patchValue({ asset_id: ' ' });
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        // Find nearby desk for user's department
        const settings = this._settings.get('app.departments') || {
            '*': {
                level: this._org.levelsForBuilding()[0]?.id,
                centered_at: { x: 0.5, y: 0.5 },
            },
        };
        const group = currentUser().groups.find((_) => _ in settings) ?? '*';
        if (!settings[group]) {
            this._router.navigate(['/book', 'desks', 'map']);
            return;
        }
        const { level, centered_at } = settings[group];
        const lvl = this._org.levelWithID([level]);
        if (!lvl) {
            this._router.navigate(['/book', 'desks', 'map']);
            return;
        }
        const desk_list = await this._state.available_resources
            .pipe(take(1))
            .toPromise();
        const desk_id = level.map_id
            ? await findNearbyFeature(
                  lvl.map_id,
                  centered_at,
                  desk_list.map((_) => _?.map_id || _?.id || '')
              )
            : desk_list[randomInt(desk_list.length)].id;
        const desk = desk_list.find(
            (_) => _.map_id === desk_id || _.id === desk_id
        );
        if (!desk) {
            this._router.navigate(['/book', 'desks', 'map']);
            return;
        }
        this._state.form.patchValue({
            asset_id: desk?.id,
            asset_name: desk.name || desk.id,
            map_id: desk?.map_id || desk?.id,
            description: desk.name || desk.id,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
        });
        await this._state.confirmPost().catch((_) => console.error(_));
    }
}
