import { signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingAsset, BookingFormService } from '@placeos/bookings';
import { BuildingLevel, OrganisationService, Space } from '@placeos/common';
import { SpacePipe } from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';
import { NewDeskFlowComponent } from '../../app/book/desk-flow.component';
import { NewDeskFlowFormComponent } from '../../app/book/desk-flow/desk-flow-form.component';
import { NewDeskFlowSuccessComponent } from '../../app/book/desk-flow/desk-flow-success.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('NewDeskFlowComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowComponent,
        providers: [
            MockProvider(BookingFormService, {
                loadForm: vi.fn(),
                newForm: vi.fn(),
                setView: vi.fn(),
                setOptions: vi.fn(),
                form: new FormGroup({}),
                model: signal({}),
                view: signal(''),
                last_success: null,
            } as any),
            MockProvider(OrganisationService, {
                initialised: signal(true),
            }),
        ],
        declarations: [
            MockComponent(NewDeskFlowFormComponent),
            MockComponent(NewDeskFlowSuccessComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        const book_service: any = spectator.inject(BookingFormService);
        book_service.setView.mockImplementation((e) => {
            book_service.view.set(e);
            spectator.detectChanges();
        });
        book_service.setView('form');
    });

    it('should show form view by default', () => {
        expect('desk-flow-form').toExist();
        spectator.inject(BookingFormService).setView('success');
        expect('desk-flow-form').not.toExist();
    });

    it('should show success view when set', () => {
        expect('desk-flow-success').not.toExist();
        spectator.inject(BookingFormService).setView('success');
        expect('desk-flow-success').toExist();
    });

    // it('should set view based of route params', () => {
    //     expect('desk-flow-success').not.toExist();
    //     spectator.setRouteParam('step', 'success');
    //     expect('desk-flow-success').toExist();
    // });
});

describe('NewDeskFlowComponent nearby desk', () => {
    // Desk metadata without `map_id`, as desks commonly use their ID on the map.
    const desks: BookingAsset[] = ['desk-1', 'desk-2'].map((id, index) => ({
        id,
        name: `Desk ${index + 1}`,
        bookable: true,
        features: [],
    }));
    let spectator: SpectatorRouting<NewDeskFlowComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowComponent,
        detectChanges: false,
        queryParams: { nearby_space: 'space-1', date: '1790997000000' },
        providers: [
            MockProvider(BookingFormService, {
                loadForm: vi.fn(),
                newForm: vi.fn(),
                setView: vi.fn(),
                setOptions: vi.fn(),
                listAvailableResources: vi.fn(async () => desks),
                form: new FormGroup({}),
                model: signal({}),
                view: signal(''),
                last_success: null,
            } as any),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                waitUntilInitialised: () => Promise.resolve(),
                levelWithID: () =>
                    new BuildingLevel({ id: 'lvl-1', map_id: 'level-1.svg' }),
            }),
        ],
        declarations: [
            MockComponent(NewDeskFlowFormComponent),
            MockComponent(NewDeskFlowSuccessComponent),
        ],
    });

    beforeEach(() => {
        vi.spyOn(SpacePipe.prototype, 'transform').mockResolvedValue(
            new Space({ id: 'space-1', map_id: 'area-1', zones: ['lvl-1'] }),
        );
        vi.mocked(ts_client.authority).mockReturnValue(
            {} as ReturnType<typeof ts_client.authority>,
        );
        vi.mocked(ts_client.token).mockReturnValue('');
        // jsdom has no SVG geometry, so the nearest desk is the first one.
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => new Response('<svg></svg>')),
        );
        spectator = createComponent();
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('should select the nearby desk when desks have no map ID', async () => {
        await spectator.component.ngOnInit();
        const model = spectator.inject(BookingFormService).model();

        expect(fetch).toHaveBeenCalledWith('level-1.svg', expect.anything());
        expect(model.asset_id).toBe('desk-1');
        expect(model.resources).toEqual([desks[0]]);
    });
});
