import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { BookingRulesModalComponent } from '../../app/ui/booking-rules-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('BookingRulesModalComponent', () => {
    let spectator: Spectator<BookingRulesModalComponent>;

    const createComponent = createComponentFactory({
        component: BookingRulesModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, { type: 'desk' }),
            MockProvider(MatDialog, { open: vi.fn() } as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { id: 'bld-1' },
            } as any),
        ],
    });

    beforeEach(() => {
        (ts_client.showMetadata as any).mockResolvedValue({
            details: [],
        });
        (ts_client.updateMetadata as any).mockResolvedValue({});
        spectator = createComponent();
    });

    it('should expose the booking type from dialog data', () => {
        expect(spectator.component.type).toBe('desk');
    });

    it('should count condition keys', () => {
        expect(spectator.component.keyCount({ a: 1, b: 2 })).toBe(2);
        expect(spectator.component.conditionKeys({ a: 1 } as any)).toEqual([
            'a',
        ]);
        expect(spectator.component.conditionKeys(null as any)).toEqual([]);
    });

    it('should give duplicate and missing ruleset IDs unique values', () => {
        const rules = spectator.component.normaliseRulesetIds([
            { id: 'same' },
            { id: 'same' },
            {},
        ] as any);

        expect(rules[0].id).toBe('same');
        expect(new Set(rules.map((rule) => rule.id)).size).toBe(3);
        expect(rules.every((rule) => !!rule.id)).toBe(true);
    });

    it('should format duration conditions in hours and minutes', () => {
        expect(spectator.component.formatConditionValue('min_length', 45)).toBe(
            '45 minutes',
        );
        expect(spectator.component.formatConditionValue('max_length', 90)).toBe(
            '1 hour 30 minutes',
        );
        expect(
            spectator.component.formatConditionValue('max_length', 120),
        ).toBe('2 hours');
    });

    it('should format between-hours and array conditions', () => {
        expect(
            spectator.component.formatConditionValue('is_between', [9, 17]),
        ).toBe('09:00 to 17:00');
        expect(
            spectator.component.formatConditionValue('tags', ['a', 'b']),
        ).toBe('a, b');
        expect(spectator.component.formatConditionValue('groups', null)).toBe(
            '',
        );
    });

    it('should toggle expanded state per row', () => {
        expect(spectator.component.isExpanded('row-1')).toBe(false);
        spectator.component.toggleExpanded('row-1');
        expect(spectator.component.isExpanded('row-1')).toBe(true);
        spectator.component.toggleExpanded('row-1');
        expect(spectator.component.isExpanded('row-1')).toBe(false);
    });

    it('should switch to the form view when editing a ruleset', () => {
        const ruleset = { id: 'r-1', name: 'Rule' } as any;
        spectator.component.editRuleset(ruleset);
        expect(spectator.component.view()).toBe('form');
        expect(spectator.component.selected()).toBe(ruleset);
    });

    it('should persist a new ruleset and return to the list view', async () => {
        await spectator.component.save({ name: 'New Rule' } as any);
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'bld-1',
            expect.objectContaining({
                name: 'desk_booking_rules',
                details: expect.arrayContaining([
                    expect.objectContaining({ name: 'New Rule' }),
                ]),
            }),
        );
        expect(spectator.component.view()).toBe('list');
        expect(spectator.component.loading()).toBe(false);
        expect(spectator.component.change()).not.toBe(0);
    });

    it('should not overwrite a ruleset when a new one has the same ID', async () => {
        spectator.component.booking_rules.set([
            {
                id: 'same',
                name: 'Existing Rule',
                zone: '*',
                rules: {},
                conditions: {},
            },
        ] as any);

        await spectator.component.save({
            id: 'same',
            name: 'New Rule',
            zone: '*',
            rules: {},
            conditions: {},
        } as any);

        const details = (ts_client.updateMetadata as any).mock.calls.at(-1)[1]
            .details;
        expect(details.map((rule) => rule.name)).toEqual([
            'Existing Rule',
            'New Rule',
        ]);
        expect(new Set(details.map((rule) => rule.id)).size).toBe(2);
    });
});
