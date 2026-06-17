import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CalendarEvent } from '@placeos/common';

import { generateSystemsFormFields } from '../lib/space.utilities';
import { generateEventForm } from '../lib/utilities';

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
            } as any);

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
            } as any);

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
            } as any);

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
            } as any);
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

            model.update((m) => ({ ...m, host: undefined as any }));

            // Sanitisation happens synchronously at the update() boundary, so
            // the field is never removed from the FieldTree.
            expect(typeof form.host).toBe('function');
            expect(model().host).toBeDefined();
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
});
