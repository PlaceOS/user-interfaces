import { Component, OnInit } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    formatRecurrence,
    SettingsService,
} from '@placeos/common';
import { ExploreStateService } from '@placeos/explore';
import { Desk } from '@placeos/organisation';
import { format } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
    selector: 'desk-flow-map',
    template: `
        <div topbar class="">
            <a
                class="clear h-[2.75rem] text-white"
                btn
                matRipple
                [routerLink]="['/book', 'desks', 'form']"
            >
                <div class="flex h-full items-center justify-center">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="mx-4 ml-2">Back</span>
                </div>
            </a>
        </div>
        <div class="flex h-1/2 w-full flex-1 flex-col">
            <h2 class="px-4 pt-4 text-center text-2xl">Available Desks</h2>
            <an-action-field
                class="mx-auto my-4 w-[640px] max-w-[calc(100vw-2rem)]"
                [matMenuTriggerFor]="menu"
            >
                {{ (option_details | async) || 'No Filters' }}
            </an-action-field>
            <mat-menu #menu="matMenu">
                <div
                    (click)="$event.stopPropagation(); ($event.preventDefault)"
                    class="max-h-[65vh] overflow-auto pt-4"
                >
                    <detailed-book-desks-form
                        [form]="form"
                    ></detailed-book-desks-form>
                </div>
            </mat-menu>
            <div listing class="relative flex h-1/2 flex-1 space-x-2">
                <ul
                    class="list-style-none mx-auto h-full w-full max-w-[48rem] space-y-2 overflow-auto rounded-tr-lg bg-base-200 pb-32 sm:w-[20rem]"
                    [class.!w-full]="hide_map"
                    [class.rounded-tl-lg]="hide_map"
                >
                    <div
                        class="sticky inset-x-0 top-0 z-10 border-b border-base-200 bg-base-200 px-4 py-2"
                    >
                        {{ (desks | async)?.length || '0' }} matches available
                    </div>
                    <li
                        matRipple
                        *ngFor="let desk of desks | async"
                        [attr.desk-id]="desk.id"
                        class="mx-2 flex min-h-[5rem] cursor-pointer items-center space-x-2 rounded border bg-base-100 p-2 shadow"
                        [class.border-primary]="active_desk?.id === desk.id"
                        (click)="setActiveDesk(desk)"
                    >
                        <app-icon class="text-2xl">place</app-icon>
                        <div class="flex w-1/2 flex-1 flex-col">
                            <div name class="">{{ desk.name || desk.id }}</div>
                            <div level class="text-xs">
                                {{
                                    desk.zone?.display_name ||
                                        desk.zone?.name ||
                                        '&lt;No Level&gt;'
                                }}
                            </div>
                            <div features class="flex w-full flex-wrap">
                                <div
                                    *ngFor="let feat of desk.features || []"
                                    class="mr-2 mt-1 rounded-xl bg-primary px-2 py-1 text-xs text-white"
                                >
                                    {{ feat }}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div
                    class="relative hidden h-full flex-1 overflow-hidden rounded-tl-lg border-l border-t border-base-200 bg-base-200 sm:block"
                    *ngIf="!hide_map"
                >
                    <interactive-map
                        [src]="url | async"
                        [zoom]="(positions | async)?.zoom"
                        [center]="(positions | async)?.center"
                        [styles]="styles | async"
                        [features]="features | async"
                        [actions]="actions | async"
                        [labels]="labels | async"
                        [focus]="active_desk?.map_id || active_desk?.id"
                    ></interactive-map>
                    <div
                        class="absolute left-2 top-2 flex h-10 items-center rounded-3xl border border-base-200 bg-base-100 px-3"
                        *ngIf="level | async"
                    >
                        {{
                            (level | async)?.display_name ||
                                (level | async)?.name
                        }}
                    </div>
                </div>
                <div
                    *ngIf="loading | async"
                    class="absolute inset-0 z-20 !m-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading | async }}</p>
                </div>
                <div
                    selection
                    class="absolute bottom-2 left-1/2 !m-0 w-[24rem] max-w-[calc(100vw-1rem)] -translate-x-1/2 transform space-y-2 rounded border border-base-200 bg-base-100 p-2 shadow"
                    *ngIf="active_desk"
                >
                    <div class="">
                        <div name class="">{{ active_desk.name }}</div>
                        <div level class="text-xs">
                            {{
                                active_desk.zone?.display_name ||
                                    active_desk.zone.name ||
                                    '&lt;No Level&gt;'
                            }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button
                            matRipple
                            class="inverse flex-1"
                            (click)="setActiveDesk(null)"
                        >
                            Clear
                        </button>
                        <button
                            matRipple
                            class="flex-1"
                            (click)="makeBooking()"
                        >
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            [topbar] {
                background-color: #00539f;
            }
        `,
    ],
    standalone: false,
})
export class DeskFlowMapComponent extends AsyncHandler implements OnInit {
    /** Observable for the active map */
    public readonly url = this._explore.map_url;
    /** Observable for the active map */
    public readonly styles = this._explore.map_styles;
    /** Observable for the active map */
    public readonly positions = this._explore.map_positions;
    /** Observable for the active map */
    public readonly features = this._explore.map_features;
    /** Observable for the active map */
    public readonly actions = this._explore.map_actions;
    /** Observable for the labels map */
    public readonly labels = this._explore.map_labels;
    public readonly level = this._explore.level;

    public readonly desks = this._state.available_resources;

    public readonly loading = this._state.loading;

    public readonly form = this._state.form;

    public readonly option_details = combineLatest([
        this._state.options,
        this.form.valueChanges.pipe(startWith({})),
    ]).pipe(
        map(([options]) => {
            const form = this._state.form;
            const recurrence = formatRecurrence({
                pattern: options.pattern as any,
                end: options.recurr_end,
                start: form.value.date,
                interval: 1,
                days_of_week: [],
            });
            const details = `${format(form.value.date, 'dd MMM yyyy')}${
                options.pattern && options.pattern !== 'none'
                    ? ', ' + recurrence
                    : ''
            }${options.group ? ', ' + options.group : ''}, ${
                options.features?.length || 'Any'
            } Feature${(options.features?.length || 0) < 2 ? '' : 's'}`;
            if (options.zone_id) this._explore.setLevel(options.zone_id);
            return details;
        }),
    );

    private _active_desk = new BehaviorSubject<Desk>(null);

    public readonly makeBooking = () => this._state.confirmPost();

    public get active_desk(): Desk {
        return this._active_desk.getValue();
    }

    public get hide_map() {
        return !!this._settings.get('app.desks.hide_map');
    }

    constructor(
        private _state: BookingFormService,
        private _settings: SettingsService,
        private _explore: ExploreStateService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'assets-statue',
            combineLatest([
                this._state.resources,
                this._state.available_resources,
                this._active_desk,
            ])
                .pipe(debounceTime(200))
                .subscribe(([assets, available]) => {
                    const status = {};
                    const actions = [];
                    for (const desk of assets) {
                        const active =
                            desk.bookable &&
                            available.find((d) => d.id === desk.id);
                        status[`#${desk.map_id || desk.id}`] = {
                            fill: desk.bookable
                                ? available.find((d) => d.id === desk.id)
                                    ? '#43a047'
                                    : '#e53935'
                                : '#999',
                            opacity: 0.6,
                        };
                        if (active)
                            actions.push({
                                id: desk.map_id || desk.id,
                                action: 'click',
                                callback: () => this.setActiveDesk(desk as any),
                            });
                    }
                    this._explore.setStyles('desks', status);
                    this._explore.setActions('desks', actions);
                    this._explore.setFeatures(
                        'desks',
                        this.active_desk
                            ? [
                                  {
                                      location:
                                          this.active_desk.map_id ||
                                          this.active_desk.id,
                                      content: `
                    <span class="flex h-4 w-4 rounded-full absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 border-[3px] border-whiteå00 shadow" >
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-full w-full bg-primary"></span>
                    </span>`,
                                  },
                              ]
                            : [],
                    );
                }),
        );
    }

    public setActiveDesk(desk: Desk) {
        this._explore.setLevel(desk?.zone?.id);
        this._active_desk.next(desk);
        this._state.form.patchValue({
            asset_id: desk?.id,
            asset_name: desk.name,
            map_id: desk?.map_id || desk?.id,
            description: desk.name,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
        });
    }
}
