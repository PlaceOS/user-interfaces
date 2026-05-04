import { CalendarEvent } from '@placeos/common';

import { generateSystemsFormFields } from '../lib/space.utilities';
import { generateEventForm } from '../lib/utilities';

describe('utilities', () => {
    describe('generateEventForm', () => {
        it('should disable start date for in-progress edited events', () => {
            const now = Date.now();
            const event = new CalendarEvent({
                id: 'evt-1',
                date: now - 30 * 60 * 1000,
                duration: 60,
            } as any);

            const form = generateEventForm(event);

            expect(form.controls.date.disabled).toBe(true);
        });

        it('should disable start date for started edited events', () => {
            const now = Date.now();
            const event = new CalendarEvent({
                id: 'evt-2',
                date: now - 5 * 60 * 1000,
                duration: 60,
            } as any);

            const form = generateEventForm(event);

            expect(form.controls.date.disabled).toBe(true);
        });

        it('should allow start date edits for completed events', () => {
            const now = Date.now();
            const event = new CalendarEvent({
                id: 'evt-3',
                date: now - 2 * 60 * 60 * 1000,
                duration: 30,
            } as any);

            const form = generateEventForm(event);

            expect(form.controls.date.disabled).toBe(false);
        });

        it('should update start date lock after form creation', () => {
            const form = generateEventForm();

            expect(form.controls.date.disabled).toBe(false);

            (form as any)._lock_start_time = true;
            form.patchValue({ title: 'Update' });
            expect(form.controls.date.disabled).toBe(true);

            (form as any)._lock_start_time = false;
            form.patchValue({ title: 'Update Again' });
            expect(form.controls.date.disabled).toBe(false);
        });
    });

    describe('generateSystemsFormFields', () => {
        it('should not reuse the source features array', () => {
            const system = { id: 'room-1', features: ['Display'] } as any;
            const form = generateSystemsFormFields(system);

            form.controls.features.setValue([
                ...(form.controls.features.value || []),
                'Whiteboard',
            ]);

            expect(system.features).toEqual(['Display']);
            expect(form.controls.features.value).toEqual([
                'Display',
                'Whiteboard',
            ]);
        });
    });
});
