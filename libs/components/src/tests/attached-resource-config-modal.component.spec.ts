import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AttachedResourceConfigModalComponent } from '../lib/attached-resource-config-modal.component';

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
