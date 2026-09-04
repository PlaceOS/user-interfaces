import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    BookingAsset,
    BookingFormService,
    findNearbyFeature,
} from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    flatten,
    getInvalidSignalFields,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SpacePipe } from '@placeos/events';
import { listChildMetadata } from '@placeos/ts-client';
import { set } from 'date-fns';
import { DeskFlowAutoAssignComponent } from './desk-flow-auto-assign.component';
import { DeskFlowDetailsComponent } from './desk-flow-details.component';
import { DeskFlowSelectComponent } from './desk-flow-select.component';
import { NewDeskFlowSuccessComponent } from './desk-flow-success.component';

@Component({
    selector: 'desk-flow-new',
    template: `
        @if (view() !== 'success') {
            <div
                cdkScrollable
                class="bg-base-200 relative flex h-full w-full flex-col overflow-auto"
            >
                <div
                    class="mx-auto min-h-full w-7xl max-w-full flex-1 space-y-4 px-4 pt-4"
                >
                    @if (!is_edit_mode()) {
                        <desk-flow-auto-assign class="block" />
                    }
                    <div
                        class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
                    >
                        <div
                            class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>info</icon>
                            <div>
                                {{ 'BOOKINGS.DESK_DETAILS_HEADER' | translate }}
                            </div>
                        </div>
                        <desk-flow-details />
                        <desk-flow-select />
                    </div>
                    <div
                        class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t p-3"
                    >
                        <div></div>
                        <button
                            btn
                            matRipple
                            (click)="confirmBooking()"
                            [disabled]="loading()"
                        >
                            <div class="flex items-center space-x-2">
                                @if (loading()) {
                                    <icon class="animate-spin text-2xl"
                                        >progress_activity</icon
                                    >
                                } @else {
                                    <icon class="text-2xl">task_alt</icon>
                                }
                                <div class="flex-1 pr-4">
                                    {{
                                        loading()
                                            ? ('COMMON.CONFIRMING' | translate)
                                            : ('COMMON.CONFIRM' | translate)
                                    }}
                                </div>
                                @if (!loading()) {
                                    <icon class="text-2xl"
                                        >keyboard_arrow_right</icon
                                    >
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <desk-flow-success />
        }
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }

            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
        `,
    ],
    imports: [
        CdkScrollable,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        DeskFlowAutoAssignComponent,
        DeskFlowDetailsComponent,
        DeskFlowSelectComponent,
        NewDeskFlowSuccessComponent,
    ],
})
export class DeskFlowNewComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _space_pipe: SpacePipe = new SpacePipe(this._org);

    public readonly view = this._booking_form.view;
    public readonly loading = signal(false);
    public readonly options = this._booking_form.options;

    public readonly form_value = this._booking_form.model;

    public readonly has_title = computed(
        () => !!this.form_value()?.title?.trim(),
    );

    public readonly has_item = computed(
        () =>
            !!this.form_value()?.resources &&
            this.form_value()?.resources.length > 0,
    );

    public readonly is_edit_mode = computed(() => !!this.form_value()?.id);

    public ngOnInit() {
        const { id, booking_type } = this._booking_form.model();
        if (!id || booking_type !== 'desk') this._booking_form.newForm('desk');
        this._booking_form.model.update((m) => ({
            ...m,
            booking_type: 'desk',
        }));
        this._booking_form.setOptions({ type: 'desk' });
        if (!this._booking_form.model().id)
            this._booking_form.model.update((m) => ({
                ...m,
                title: 'Booking',
            }));
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._booking_form.setView(param.get('step') as any);
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('nearby_space')) {
                    await this._initNearbyDeskBooking(
                        params.get('nearby_space'),
                        parseInt(params.get('date'), 10) || Date.now(),
                    );
                    return;
                }
                if (!params.has('asset_id')) return;
                const asset_id = params.get('asset_id');
                const form = this._booking_form.model();
                if (
                    asset_id === form.asset_id &&
                    (form.resources || []).some(({ id }) => id === asset_id)
                ) {
                    return;
                }
                await this._waitForLoaded();
                if (!asset_id) return;
                const resource = await this._findDeskResource(asset_id);
                if (!resource) return;
                const building = resource.zone?.parent_id
                    ? this._org.find(resource.zone.parent_id)
                    : null;
                if (building && building.id !== this._org.building?.id) {
                    this._org.building = building;
                }
                this._booking_form.setOptions({
                    type: 'desk',
                    ...(resource.zone?.id ? { zones: [resource.zone.id] } : {}),
                });
                this._booking_form.model.update((m) => ({
                    ...m,
                    booking_type: 'desk',
                    resources: [resource],
                    asset_id: resource.id,
                }));
            }),
        );
    }

    /** Resolve once the booking form has finished its current load */
    private async _waitForLoaded() {
        while (this._booking_form.loading()) {
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    }

    private async _findDeskResource(
        asset_id: string,
    ): Promise<BookingAsset | null> {
        const resource = await this._findDeskResourceFromStream(asset_id, 50);
        if (resource) return resource;

        const building_resource =
            await this._findDeskResourceFromBuildings(asset_id);
        return (
            building_resource ||
            (await this._findDeskResourceFromStream(asset_id, 5000))
        );
    }

    private async _findDeskResourceFromStream(
        asset_id: string,
        wait_ms: number,
    ): Promise<BookingAsset | null> {
        const deadline = Date.now() + wait_ms;
        do {
            const resources = await this._booking_form.listResources();
            const resource = resources.find((item) => item.id === asset_id);
            if (resource) return resource;
            if (Date.now() >= deadline) break;
            await new Promise((resolve) => setTimeout(resolve, 50));
        } while (Date.now() < deadline);
        return null;
    }

    private async _findDeskResourceFromBuildings(
        asset_id: string,
    ): Promise<BookingAsset | null> {
        for (const building of this._org.buildings || []) {
            const data = await listChildMetadata(building.id, {
                name: 'desks',
            }).catch(() => []);
            const resources = flatten<BookingAsset>(
                data.map((metadata) =>
                    (metadata?.metadata?.desks?.details instanceof Array
                        ? metadata.metadata.desks.details
                        : []
                    ).map((desk) => ({
                        ...desk,
                        id: desk.id || desk.map_id,
                        zone: metadata.zone,
                    })),
                ),
            );
            const resource = resources.find((item) => item.id === asset_id);
            if (resource) return resource;
        }
        return null;
    }

    private async _initNearbyDeskBooking(space_id: string, event_date: number) {
        const space = await this._space_pipe.transform(space_id);
        const level = this._org.levelWithID(space?.zones);
        this._booking_form.setOptions({ type: 'desk', zone_id: level?.id });
        this._booking_form.model.update((m) => ({
            ...m,
            date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
            duration: 10 * 60,
            all_day: true,
            booking_type: 'desk',
            user: currentUser(),
        }));
        const resources = await this._booking_form.listAvailableResources();
        const bookable_desks = resources
            .map((_) => _.map_id || _.id)
            .filter((i) => i);
        const nearby = await findNearbyFeature(
            level.map_id,
            space?.map_id,
            bookable_desks,
        );
        if (!nearby)
            return notifyError(i18n('APP.WORKPLACE.MEETING_DESK_ERROR'));
        const resource = resources.find(
            (_) => _.map_id === nearby || _.id === nearby,
        );
        if (!resource)
            return notifyError(i18n('APP.WORKPLACE.MEETING_DESK_ERROR'));
        this._booking_form.model.update((m) => ({
            ...m,
            date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
            duration: 10 * 60,
            all_day: true,
            booking_type: 'desk',
            asset_id: resource.id,
            asset_name: resource.name,
            resources: [resource],
        }));
    }

    public async confirmBooking() {
        const { asset_id, resources } = this._booking_form.model();
        if (resources?.length && asset_id !== resources[0].id) {
            this._booking_form.model.update((m) => ({
                ...m,
                asset_id: resources[0].id,
            }));
        }
        this._booking_form.form().markAsTouched();
        if (!this._booking_form.form().valid()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this._booking_form.form,
                        this._booking_form.model,
                    )
                        .join(', ')
                        .replace('asset_id', i18n('RESOURCE.DESK')),
                }),
            );
        }
        this.loading.set(true);
        try {
            await (this.options()?.group
                ? this._booking_form.postFormForGroup()
                : this._booking_form.postForm());
            notifySuccess(i18n('APP.CONCIERGE.DESKS_BOOKING_SUCCESS'));
            this._router.navigate(['/book/desk/success']);
        } catch (e) {
            notifyError(
                typeof e === 'string'
                    ? e
                    : i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`),
            );
        } finally {
            this.loading.set(false);
        }
    }
}
