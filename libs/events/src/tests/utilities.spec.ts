import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CalendarEvent, User } from '@placeos/common';

import {
    attendeeFlagsFrom,
    eventFormValue,
    generateEventForm,
} from '../lib/event-form';
import { generateSystemsFormFields } from '../lib/space.utilities';

describe('utilities', () => {
    let injector: Injector;

    beforeEach(() => {
        injector = TestBed.inject(Injector);
    });

    describe('generateEventForm', () => {
        it('should disable start date for in-progress edited events', () => {
            const now = Date.now();
            const event = new CalendarEvent({
                id: 'evt-1',
                date: now - 30 * 60 * 1000,
                duration: 60,
            });

            const { form } = TestBed.runInInjectionContext(() =>
                generateEventForm(event, undefined, injector),
            );

            expect(form.date().disabled()).toBe(true);
        });

        it('should disable start date for started edited events', () => {
            const now = Date.now();
            const event = new CalendarEvent({
                id: 'evt-2',
                date: now - 5 * 60 * 1000,
                duration: 60,
            });

            const { form } = TestBed.runInInjectionContext(() =>
                generateEventForm(event, undefined, injector),
            );

            expect(form.date().disabled()).toBe(true);
        });

        it('should allow start date edits for completed events', () => {
            const now = Date.now();
            const event = new CalendarEvent({
                id: 'evt-3',
                date: now - 2 * 60 * 60 * 1000,
                duration: 30,
            });

            const { form } = TestBed.runInInjectionContext(() =>
                generateEventForm(event, undefined, injector),
            );

            expect(form.date().disabled()).toBe(false);
        });

        it('should keep the start date editable after updating an unlocked form', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateEventForm(undefined, undefined, injector),
            );

            expect(form.date().disabled()).toBe(false);

            model.update((m) => ({ ...m, title: 'Update' }));
            expect(form.date().disabled()).toBe(false);
        });

        it('should keep the start date locked after updating a locked form', () => {
            const event = new CalendarEvent({
                id: 'evt-locked',
                date: Date.now() - 5 * 60 * 1000,
                duration: 60,
            });
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateEventForm(event, undefined, injector),
            );

            expect(form.date().disabled()).toBe(true);

            model.update((m) => ({ ...m, title: 'Update' }));
            expect(form.date().disabled()).toBe(true);
        });

        it('should coerce undefined writes back to typed defaults so [formField] bindings survive', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateEventForm(new CalendarEvent(), undefined, injector),
            );

            model.update((m) => ({ ...m, host: undefined }));

            // Sanitisation happens synchronously at the update() boundary, so
            // the field is never removed from the FieldTree.
            expect(typeof form.host).toBe('function');
            expect(model().host).toBeDefined();
        });

        it('should not loop when catering already has the current event time', () => {
            const date = Date.now();
            const { model } = TestBed.runInInjectionContext(() =>
                generateEventForm(
                    new CalendarEvent({ date, duration: 30 }),
                    undefined,
                    injector,
                ),
            );
            const catering = [{ id: 'order-1', event: { date, duration: 30 } }];

            model.update((m) => ({ ...m, catering }));
            TestBed.flushEffects();
            const synced_catering = model().catering;
            TestBed.flushEffects();

            expect(model().catering).toBe(synced_catering);
        });
    });

    describe('generateSystemsFormFields', () => {
        it('should not reuse the source features array', () => {
            const system = { id: 'room-1', features: ['Display'] } as any;
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateSystemsFormFields(system, injector),
            );

            model.update((m) => ({
                ...m,
                features: [...(m.features || []), 'Whiteboard'],
            }));

            expect(system.features).toEqual(['Display']);
            expect(form.features().value()).toEqual(['Display', 'Whiteboard']);
        });
    });

    describe('attendee flags', () => {
        const flagged_event = () =>
            new CalendarEvent({
                id: 'evt-flags',
                host: 'host@example.com',
                attendees: [
                    new User({ email: 'one@example.com', name: 'One' }),
                    new User({ email: 'two@example.com', name: 'Two' }),
                ],
                extension_data: {
                    attendee_flags: {
                        'one@example.com': {
                            international: true,
                            visitor_internal_or_external: 'external',
                        },
                    },
                },
            });

        it('should apply stored flags onto the matching attendee', () => {
            const value = eventFormValue(flagged_event());
            const flagged = value.attendees[0];
            const plain = value.attendees[1];
            expect(flagged.extension_data.international).toBe(true);
            expect(flagged.extension_data.visitor_internal_or_external).toBe(
                'external',
            );
            expect(plain.extension_data.international).toBeUndefined();
        });

        it('should collect flags from the attendees of a form value', () => {
            const value = eventFormValue(flagged_event());
            expect(attendeeFlagsFrom(value.attendees)).toEqual({
                'one@example.com': {
                    international: true,
                    visitor_internal_or_external: 'external',
                },
            });
        });

        it('should round trip flags through a save and reload', () => {
            const saved = attendeeFlagsFrom(
                eventFormValue(flagged_event()).attendees,
            );
            const reloaded = eventFormValue(
                new CalendarEvent({
                    id: 'evt-flags',
                    attendees: [new User({ email: 'one@example.com' })],
                    extension_data: { attendee_flags: saved },
                }),
            );
            expect(reloaded.attendees[0].extension_data.international).toBe(
                true,
            );
            expect(
                reloaded.attendees[0].extension_data
                    .visitor_internal_or_external,
            ).toBe('external');
        });

        it('should not invent flags for attendees without them', () => {
            const value = eventFormValue(
                new CalendarEvent({
                    attendees: [new User({ email: 'plain@example.com' })],
                }),
            );
            expect(attendeeFlagsFrom(value.attendees)).toEqual({});
        });
    });
});
