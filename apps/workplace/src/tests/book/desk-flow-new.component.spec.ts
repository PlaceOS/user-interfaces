import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { signal } from '@angular/core';
import { DeskFlowNewComponent } from '../../app/book/desk-flow-new/desk-flow.component';

describe('DeskFlowNewComponent', () => {
    let spectator: Spectator<DeskFlowNewComponent>;
    let form: FormGroup;

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
                resources: of([
                    {
                        id: 'desk-123',
                        name: 'Desk 123',
                        zone: { id: 'level-1', parent_id: 'building-1' },
                    },
                ]),
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
        spectator = createComponent();
    });

    it('should hydrate the selected desk from the asset_id query param', async () => {
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
});
