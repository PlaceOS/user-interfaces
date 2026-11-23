import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

vi.mock('@placeos/ts-client', { spy: true });

import { metadata as metadata_v7 } from '@placeos/ts-client';
import { fromV1Mock } from '@placeos/ts-client/compat';

import { DialogEvent } from '@placeos/common';
import {
    AttachedResourceConfigModalComponent,
    AttachedResourceConfigModalData,
    zoneRulesetLoader,
} from '../lib/attached-resource-config-modal.component';

describe('zoneRulesetLoader', () => {
    // The 6.x metadata of the zone. `fromV1Mock` puts it under its name
    const metadata = (details: unknown) => Promise.resolve({ details });

    beforeEach(() => {
        vi.mocked(metadata_v7.show).mockReset();
    });

    it('should load the rules of a zone once until asked for fresh rules', async () => {
        const rules = [{ conditions: [], options: [] }];
        vi.mocked(metadata_v7.show).mockImplementation(
            fromV1Mock(() => metadata(rules), ['id', 'name'], 'data', 'name'),
        );
        const load = zoneRulesetLoader('catering_config');

        await expect(load('zone-1')).resolves.toBe(rules);
        await load('zone-1');
        expect(metadata_v7.show).toHaveBeenCalledTimes(1);
        expect(metadata_v7.show).toHaveBeenCalledWith({
            id: 'zone-1',
            name: 'catering_config',
        });

        await load('zone-1', true);
        expect(metadata_v7.show).toHaveBeenCalledTimes(2);
    });

    it('should give no rules for a missing zone, bad details or a failed request', async () => {
        const load = zoneRulesetLoader('catering_config');
        await expect(load('')).resolves.toEqual([]);
        expect(metadata_v7.show).not.toHaveBeenCalled();

        vi.mocked(metadata_v7.show).mockImplementationOnce(
            fromV1Mock(
                () => metadata({ not: 'list' }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        await expect(load('zone-1')).resolves.toEqual([]);

        vi.mocked(metadata_v7.show).mockImplementationOnce(
            fromV1Mock(
                () => Promise.reject(new Error('offline')),
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        await expect(load('zone-2')).resolves.toEqual([]);
    });
});

describe('AttachedResourceConfigModalComponent', () => {
    const createModal = (data: Partial<AttachedResourceConfigModalData>) => {
        TestBed.configureTestingModule({
            imports: [AttachedResourceConfigModalComponent],
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        });
        return TestBed.createComponent(AttachedResourceConfigModalComponent)
            .componentInstance;
    };

    afterEach(() => vi.useRealTimers());

    it('should edit rule values as text and save them as JSON values', () => {
        const modal = createModal({
            config: [
                {
                    id: 'zone-1',
                    name: 'Level 1',
                    rules: [
                        ['after_hour', 9],
                        ['groups', ['staff', 'admin']],
                        ['visitor_type', 'contractor'],
                    ],
                },
            ],
        });
        const events: DialogEvent[] = [];
        modal.event.subscribe((event) => events.push(event));

        expect(modal.rulesets[0].rules.map((rule) => rule[1])).toEqual([
            '9',
            '["staff","admin"]',
            '"contractor"',
        ]);

        // Text that is not JSON is saved as typed
        modal.rulesets[0].rules[2][1] = 'Front desk';
        modal.saveChanges();

        expect(events).toEqual([
            {
                reason: 'done',
                metadata: [
                    {
                        id: 'zone-1',
                        name: 'Level 1',
                        rules: [
                            ['after_hour', 9],
                            ['groups', ['staff', 'admin']],
                            ['visitor_type', 'Front desk'],
                        ],
                    },
                ],
            },
        ]);
    });

    it('should save only the last notes toggle a second after the changes', () => {
        vi.useFakeTimers();
        const saveNotes = vi.fn();
        const modal = createModal({ config: [], saveNotes });

        modal.saveNotesSetting(true);
        vi.advanceTimersByTime(500);
        modal.saveNotesSetting(false);
        vi.advanceTimersByTime(999);
        expect(saveNotes).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1);
        expect(saveNotes).toHaveBeenCalledExactlyOnceWith(false);
    });

    it('should save a pending notes toggle when the modal closes', () => {
        const saveNotes = vi.fn();
        TestBed.configureTestingModule({
            imports: [AttachedResourceConfigModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { config: [], require_notes: false, saveNotes },
                },
            ],
        });
        const fixture = TestBed.createComponent(
            AttachedResourceConfigModalComponent,
        );
        fixture.componentInstance.saveNotesSetting(true);
        fixture.destroy();
        expect(saveNotes).toHaveBeenCalledTimes(1);
        expect(saveNotes).toHaveBeenCalledWith(true);
    });

    it('should emit one save while a save runs, and again after it fails', () => {
        const modal = createModal({ config: [] });
        const events = vi.fn();
        modal.event.subscribe(events);

        modal.saveChanges();
        modal.saveChanges();
        expect(events).toHaveBeenCalledTimes(1);

        // The opener clears loading when the save fails
        modal.loading.set(false);
        modal.saveChanges();
        expect(events).toHaveBeenCalledTimes(2);
    });
});
