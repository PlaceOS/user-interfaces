import { signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { setNotifyOutlet } from '@placeos/common';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { AddColleaguesModalComponent } from '../../app/landing-new/add-colleagues-modal.component';

const user_a = { name: 'Alice', email: 'alice@example.com' };
const user_b = { name: 'Bob', email: 'bob@example.com' };

describe('AddColleaguesModalComponent', () => {
    let spectator: Spectator<AddColleaguesModalComponent>;
    const search_results = signal<any[]>([]);
    const loading = signal('');
    const contacts = signal<any[]>([]);
    const state = {
        search_results,
        loading,
        contacts,
        setOptions: vi.fn(),
        addContacts: vi.fn(() => Promise.resolve()),
    };
    const dialog_ref = { close: vi.fn() };
    const snackbar = {
        open: vi.fn(() => ({
            dismiss: vi.fn(),
            onAction: () => ({ subscribe: vi.fn() }),
        })),
    };
    const createComponent = createComponentFactory({
        component: AddColleaguesModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(LandingStateService, state as any),
            { provide: MatDialogRef, useValue: dialog_ref },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        search_results.set([]);
        loading.set('');
        contacts.set([]);
        snackbar.open.mockClear();
        setNotifyOutlet(snackbar as any, true);
        state.addContacts.mockResolvedValue(undefined);
        spectator = createComponent();
    });

    it('should reset the search filter on init', () => {
        spectator.component.ngOnInit();
        expect(state.setOptions).toHaveBeenCalledWith({ search: '' });
    });

    it('should push the search term into the shared state', () => {
        spectator.component.search_term = 'ali';
        expect(spectator.component.search_term).toBe('ali');
        expect(state.setOptions).toHaveBeenCalledWith({ search: 'ali' });
    });

    it('should expose loading and available users from state', () => {
        loading.set('Loading users...');
        search_results.set([user_a]);
        expect(spectator.component.loading_users()).toBe(true);
        expect(spectator.component.available_users()).toEqual([user_a]);
        loading.set('');
        expect(spectator.component.loading_users()).toBe(false);
    });

    it('should toggle users in and out of the selection', () => {
        spectator.component.toggleUser(user_a as any);
        expect(spectator.component.isUserSelected(user_a as any)).toBe(true);
        spectator.component.toggleUser(user_b as any);
        expect(spectator.component.selected_users().length).toBe(2);
        spectator.component.toggleUser(user_a as any);
        expect(spectator.component.isUserSelected(user_a as any)).toBe(false);
        expect(spectator.component.selected_users()).toEqual([user_b]);
    });

    it('should recognise existing contacts', () => {
        contacts.set([user_a]);
        expect(spectator.component.isExistingContact(user_a as any)).toBe(true);
        expect(spectator.component.isExistingContact(user_b as any)).toBe(false);
    });

    it('should add selected colleagues and close on confirm', async () => {
        spectator.component.selected_users.set([user_a] as any);
        await spectator.component.confirm();
        expect(state.addContacts).toHaveBeenCalledWith([user_a]);
        expect(snackbar.open).toHaveBeenCalledWith(
            'Colleague added successfully',
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should pluralise the success message for multiple colleagues', async () => {
        spectator.component.selected_users.set([user_a, user_b] as any);
        await spectator.component.confirm();
        expect(snackbar.open).toHaveBeenCalledWith(
            '2 colleagues added successfully',
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should notify and stay open when adding fails', async () => {
        state.addContacts.mockRejectedValueOnce(new Error('nope'));
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        spectator.component.selected_users.set([user_a] as any);
        await spectator.component.confirm();
        expect(snackbar.open).toHaveBeenCalledWith(
            'Failed to add colleagues. Please try again.',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(dialog_ref.close).not.toHaveBeenCalledWith(true);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should close with false when dismissed', () => {
        spectator.component.dismiss();
        expect(dialog_ref.close).toHaveBeenCalledWith(false);
    });
});
