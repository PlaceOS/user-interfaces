import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

vi.mock('@placeos/ts-client', { spy: true });

import { showMetadata } from '@placeos/ts-client';

import {
    AttachedResourceConfigModalComponent,
    zoneRulesetLoader,
} from '../lib/attached-resource-config-modal.component';

describe('zoneRulesetLoader', () => {
    const metadata = (details: unknown) =>
        Promise.resolve({ details } as Awaited<ReturnType<typeof showMetadata>>);

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
        TestBed.configureTestingModule({
            imports: [AttachedResourceConfigModalComponent],
            providers: [{ provide: MAT_DIALOG_DATA, useValue: { config: [] } }],
        });
        const modal = TestBed.createComponent(
            AttachedResourceConfigModalComponent,
        ).componentInstance;
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
