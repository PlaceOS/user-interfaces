import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService, findNearbyFeature } from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    currentUser,
    Desk,
    i18n,
    notifyError,
    notifyInfo,
    OrganisationService,
} from '@placeos/common';
import { SpacePipe } from '@placeos/events';
import { set } from 'date-fns';
import { NewDeskFlowSuccessComponent } from './desk-flow-new/desk-flow-success.component';
import { NewDeskFlowFormComponent } from './desk-flow/desk-flow-form.component';

@Component({
    selector: 'placeos-new-book-desk-flow',
    template: `
        <div class="bg-base-100 z-50 h-full w-full">
            @switch (view()) {
                @case ('success') {
                    <desk-flow-success></desk-flow-success>
                }
                @default {
                    <desk-flow-form></desk-flow-form>
                }
            }
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NewDeskFlowSuccessComponent, NewDeskFlowFormComponent],
})
export class NewDeskFlowComponent extends AsyncHandler implements OnInit {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);

    private _space_pipe: SpacePipe = new SpacePipe(this._org);

    public readonly view = this._state.view;

    public get last_success() {
        return this._state.last_success;
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        await new Promise((resolve) => setTimeout(resolve, 300));
        const active_form = this._state.model();
        const has_edit_state =
            !!active_form?.id && active_form?.booking_type === 'desk';
        if (!has_edit_state) this._state.loadForm();
        this._state.setOptions({ type: 'desk' });
        const { id, booking_type } = this._state.model();
        if (!id || booking_type !== 'desk') this._state.newForm('desk');
        this._state.model.update((m) => ({ ...m, booking_type: 'desk' }));
        if (id && booking_type === 'desk') {
            const booking = new Booking(this._state.model() as any);
            const is_group =
                !!booking.parent_id ||
                !!booking.group ||
                !!booking.extension_data?.group_members?.length;
            if (is_group) {
                const members =
                    await this._state.loadGroupMembersForBooking(booking);
                this._state.setOptions({
                    group: true,
                    members,
                });
            }
        }
        const param = this._route.snapshot.paramMap;
        if (param.has('step')) this._state.setView(param.get('step') as any);
        const params = this._route.snapshot.queryParamMap;
        if (params.has('success')) {
            this._state.setView(params.get('success') as any);
        }
        if (params.has('asset_id')) {
            const id = params.get('asset_id');
            await this._waitForResources();
            const resources = await this._state.listResources();
            const asset = resources.find((_) => _.id === id);
            if (!asset) {
                return notifyInfo('Unable to find desk with given asset ID.');
            }
            this._state.model.update((m) => ({
                ...m,
                asset_id: asset.id,
                resources: [
                    new Desk({
                        id: asset.id,
                        name: asset.name || asset.id,
                        zone:
                            asset.zone ||
                            (this._org.levelsForBuilding()[0] as any),
                    }),
                ],
            }));
        }
        if (params.has('nearby_space')) {
            await this._initNearbyDeskBooking(
                params.get('nearby_space'),
                parseInt(params.get('date'), 10) || Date.now(),
            );
        }
    }

    private async _waitForResources() {
        while (this._state.loading()) {
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    }

    private async _initNearbyDeskBooking(space_id: string, event_date: number) {
        const space = await this._space_pipe.transform(space_id);
        const level = this._org.levelWithID(space?.zones);
        this._state.setOptions({ type: 'desk', zone_id: level?.id });
        this._state.model.update((m) => ({
            ...m,
            date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
            duration: 10 * 60,
            all_day: true,
            booking_type: 'desk',
            user: currentUser(),
        }));
        const resources = await this._state.listAvailableResources();
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
        this._state.model.update((m) => ({
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
}
