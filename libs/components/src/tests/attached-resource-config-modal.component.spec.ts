import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

vi.mock('@placeos/ts-client', { spy: true });

import { showMetadata } from '@placeos/ts-client';

import { DialogEvent } from '@placeos/common';
import {
    AttachedResourceConfigModalComponent,
    AttachedResourceConfigModalData,
    zoneRulesetLoader,
} from '../lib/attached-resource-config-modal.component';

describe('zoneRulesetLoader', () => {
    const metadata = (details: unknown) =>
        Promise.resolve({ details } as Awaited<
            ReturnType<typeof showMetadata>
        >);

    beforeEach(() => {
        vi.mocked(showMetadata).mockReset();
    });

    it('should load the rules of a zone once until asked for fresh rules', async () => {
        const rules = [{ conditions: [], options: [] }];
        vi.mocked(showMetadata).mockReturnValue(metadata(rules));
        const load = zoneRulesetLoader('catering_config');

        await expect(load('zone-1')).resolves.toBe(rules);
        await load('zone-1');
        expect(showMetadata).toHaveBeenCalledTimes(1);
        expect(showMetadata).toHaveBeenCalledWith('zone-1', 'catering_config');

        await load('zone-1', true);
        expect(showMetadata).toHaveBeenCalledTimes(2);
    });

    it('should give no rules for a missing zone, bad details or a failed request', async () => {
        const load = zoneRulesetLoader('catering_config');
        await expect(load('')).resolves.toEqual([]);
        expect(showMetadata).not.toHaveBeenCalled();

        vi.mocked(showMetadata).mockReturnValueOnce(metadata({ not: 'list' }));
        await expect(load('zone-1')).resolves.toEqual([]);

        vi.mocked(showMetadata).mockReturnValueOnce(
            Promise.reject(new Error('offline')),
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
