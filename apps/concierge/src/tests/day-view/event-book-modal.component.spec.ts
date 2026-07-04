import { inject, Injector, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { CateringOrderStateService } from '@placeos/catering';
import { EventFormService, generateEventForm } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { EventBookModalComponent } from '../../app/day-view/event-book-modal.component';

describe('EventBookModalComponent', () => {
    let spectator: SpectatorRouting<EventBookModalComponent>;
    const settings_values: Record<string, any> = {};
    const charge_codes = signal<string[]>([]);
    const available_menu = signal<any[]>([]);
    let post_form: jest.Mock;
    let new_form: jest.Mock;

    const createComponent = createRoutingFactory({
        component: EventBookModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, { event: undefined }),
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => settings_values[key]),
            } as any),
            MockProvider(CateringOrderStateService, {
                charge_codes,
                available_menu,
            } as any),
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    post_form = jest.fn(async () => ({ id: 'evt-1' }));
                    new_form = jest.fn();
                    return {
                        model,
                        form,
                        is_multiday: false,
                        newForm: new_form,
                        postForm: post_form,
                    } as Partial<EventFormService>;
                },
            },
        ],
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        charge_codes.set([]);
        available_menu.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should initialise the form on load', () => {
        spectator.component.ngOnInit();
        expect(new_form).toHaveBeenCalled();
    });

    it('should flag catering availability from the available menu', () => {
        expect(spectator.component.has_catering()).toBe(false);
        available_menu.set([{ id: 'item-1' }]);
        expect(spectator.component.has_catering()).toBe(true);
    });

    it('should flag charge code availability and filter them', () => {
        expect(spectator.component.has_codes()).toBe(false);
        charge_codes.set(['ALPHA', 'BETA']);
        expect(spectator.component.has_codes()).toBe(true);
        spectator.component.code_filter.set('al');
        expect(spectator.component.filtered_codes()).toEqual(['ALPHA']);
    });

    it('should sum the capacity of selected resources', () => {
        spectator.component.model.update((m) => ({
            ...m,
            resources: [{ capacity: 4 }, { capacity: 6 }] as any,
        }));
        expect(spectator.component.total_capacity).toBe(10);
    });

    it('should post the form and close the dialog on save', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            host: 'host@b.com',
        }));
        const emit = jest.spyOn(spectator.component.event, 'emit');
        await spectator.component.save();
        expect(post_form).toHaveBeenCalled();
        expect(emit).toHaveBeenCalledWith(
            expect.objectContaining({ reason: 'done' }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
