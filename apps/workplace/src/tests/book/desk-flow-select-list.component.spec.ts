import { signal, WritableSignal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { DeskFlowSelectListComponent } from '../../app/book/desk-flow-new/desk-flow-select-list.component';

describe('DeskFlowSelectListComponent', () => {
    let spectator: Spectator<DeskFlowSelectListComponent>;
    let model: WritableSignal<any>;
    let available_resources: WritableSignal<any[]>;

    const createComponent = createComponentFactory({
        component: DeskFlowSelectListComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                loading: signal(''),
                available_resources: (() => {
                    available_resources = signal<any[]>([]);
                    return available_resources;
                })(),
                model: (() => {
                    model = signal<any>({ resources: [] });
                    return model;
                })(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should keep the selected desk in the rendered list for new bookings', () => {
        model.update((m) => ({
            ...m,
            resources: [{ id: 'desk-123', name: 'Desk 123' }],
        }));

        expect(spectator.component.available_items()).toEqual([
            { id: 'desk-123', name: 'Desk 123' },
        ]);
    });

    it('should keep the selected desk first once it is present in the real result set', () => {
        const list = Array.from({ length: 20 }, (_, index) => ({
            id: `desk-${index + 1}`,
            name: `Desk ${index + 1}`,
        }));
        spectator.setInput('promote_selected', true);

        model.update((m) => ({
            ...m,
            resources: [{ id: 'desk-16', name: 'Desk 16' }],
        }));
        spectator.component.selected_items.set(['desk-16']);
        spectator.detectChanges();

        expect(spectator.component.page()).toBe(0);
        expect(spectator.component.available_items()[0]).toEqual({
            id: 'desk-16',
            name: 'Desk 16',
        });

        available_resources.set(list);
        spectator.detectChanges();

        expect(spectator.component.page()).toBe(0);
        expect(spectator.component.available_items()[0]).toEqual({
            id: 'desk-16',
            name: 'Desk 16',
        });
    });

    it('should keep list ordering when selection is not promoted', () => {
        const list = Array.from({ length: 20 }, (_, index) => ({
            id: `desk-${index + 1}`,
            name: `Desk ${index + 1}`,
        }));
        available_resources.set(list);

        model.update((m) => ({
            ...m,
            resources: [{ id: 'desk-16', name: 'Desk 16' }],
        }));
        spectator.component.selected_items.set(['desk-16']);
        spectator.detectChanges();

        expect(spectator.component.available_items()[0]).toEqual({
            id: 'desk-1',
            name: 'Desk 1',
        });
    });

    it('should promote the selected desk when the list changes after selection', () => {
        const list = Array.from({ length: 20 }, (_, index) => ({
            id: `desk-${index + 1}`,
            name: `Desk ${index + 1}`,
        }));
        available_resources.set(list);

        model.update((m) => ({
            ...m,
            resources: [{ id: 'desk-16', name: 'Desk 16' }],
        }));
        spectator.component.selected_items.set(['desk-16']);
        spectator.detectChanges();

        expect(spectator.component.available_items()[0]).toEqual({
            id: 'desk-1',
            name: 'Desk 1',
        });

        available_resources.set([...list].reverse());
        spectator.detectChanges();

        expect(spectator.component.available_items()[0]).toEqual({
            id: 'desk-16',
            name: 'Desk 16',
        });
    });
});
