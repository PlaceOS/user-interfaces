import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { signal } from '@angular/core';
import { DeskFlowNewComponent } from '../../app/book/desk-flow-new/desk-flow.component';

describe('DeskFlowNewComponent', () => {
    let spectator: Spectator<DeskFlowNewComponent>;
    let form: FormGroup;
    const desk_resource = {
        id: 'desk-123',
        name: 'Desk 123',
        zone: { id: 'level-1', parent_id: 'building-1' },
    };
    const resources = new BehaviorSubject([desk_resource]);

    const createComponent = createComponentFactory({
        component: DeskFlowNewComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                setView: jest.fn(),
                setOptions: jest.fn(),
                postForm: jest.fn(),
                postFormForGroup: jest.fn(),
                view: signal('form'),
                options: of({ type: 'desk' }),
                loading: of(false),
                resources: resources.asObservable(),
                form: (() => {
                    form = new FormGroup({
                        booking_type: new FormControl('desk'),
                        resources: new FormControl([]),
                        asset_id: new FormControl(''),
                    });
                    return form;
                })(),
            } as any),
            MockProvider(ActivatedRoute, {
                paramMap: of({
                    has: (key: string) => key === 'step',
                    get: (key: string) => (key === 'step' ? 'form' : null),
                }),
                queryParamMap: of({
                    has: (key: string) => key === 'asset_id',
                    get: (key: string) =>
                        key === 'asset_id' ? 'desk-123' : null,
                }),
            } as any),
            MockProvider(OrganisationService, {
                find: jest.fn((id: string) =>
                    id === 'building-1' ? { id: 'building-1' } : null,
                ),
            } as any),
        ],
    });

    beforeEach(() => {
        resources.next([desk_resource]);
        form?.patchValue({ booking_type: 'desk', resources: [], asset_id: '' });
    });

    it('should hydrate the selected desk from the asset_id query param', async () => {
        spectator = createComponent();
        await spectator.component.ngOnInit();
        await Promise.resolve();
        await Promise.resolve();

        expect(spectator.inject(BookingFormService).setOptions).toHaveBeenCalledWith(
            { type: 'desk', zones: ['level-1'] },
        );
        expect(spectator.inject(OrganisationService).find).toHaveBeenCalledWith(
            'building-1',
        );
        expect(spectator.inject(OrganisationService).building).toEqual({
            id: 'building-1',
        });
        expect(form.getRawValue()).toEqual({
            booking_type: 'desk',
            resources: [
                {
                    id: 'desk-123',
                    name: 'Desk 123',
                    zone: { id: 'level-1', parent_id: 'building-1' },
                },
            ],
            asset_id: 'desk-123',
        });
    });

    it('should wait for the selected desk to load from the resources stream', async () => {
        resources.next([]);
        spectator = createComponent();

        await spectator.component.ngOnInit();
        await Promise.resolve();
        expect(form.getRawValue().asset_id).toBe('');

        resources.next([desk_resource]);
        await Promise.resolve();
        await Promise.resolve();

        expect(form.getRawValue().asset_id).toBe('desk-123');
        expect(form.getRawValue().resources).toEqual([desk_resource]);
    });
});
