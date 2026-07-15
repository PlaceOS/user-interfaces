import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { inject, Injector, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { CateringOrderStateService } from '@placeos/catering';
import { EventFormService, generateEventForm } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EventBookModalComponent } from '../../app/day-view/event-book-modal.component';
import { MeetingFormDetailsComponent } from 'libs/events/src/lib/meeting-form-details.component';

describe('EventBookModalComponent', () => {
    let spectator: SpectatorRouting<EventBookModalComponent>;
    const settings_values: Record<string, any> = {};
    const charge_codes = signal<string[]>([]);
    const available_menu = signal<any[]>([]);
    let post_form: any;
    let new_form: any;

    const createComponent = createRoutingFactory({
        component: EventBookModalComponent,
        shallow: true,
        detectChanges: false,
        declarations: [MockComponent(MeetingFormDetailsComponent)],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(MAT_DIALOG_DATA, { event: undefined }),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings_values[key]),
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
                    post_form = vi.fn(async () => ({ id: 'evt-1' }));
                    new_form = vi.fn();
                    return {
                        model,
                        form,
                        can_notify_new_attendees_only: signal(false),
                        notify_new_attendees_only: signal(false),
                        is_multiday: false,
                        newForm: new_form,
                        postForm: post_form,
                    } as any;
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

    it('should show the notification option beside attendee edits', () => {
        (spectator.component.can_notify_new_attendees_only as any).set(true);
        spectator.detectChanges();
        expect(
            spectator.query('[name="notify-new-attendees-only"]'),
        ).toExist();
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
        const emit = vi.spyOn(spectator.component.event, 'emit');
        await spectator.component.save();
        expect(post_form).toHaveBeenCalled();
        expect(emit).toHaveBeenCalledWith(
            expect.objectContaining({ reason: 'done' }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
