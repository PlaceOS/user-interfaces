import { signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { notifyError, notifySuccess } from '@placeos/common';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { AddColleaguesModalComponent } from '../../app/landing-new/add-colleagues-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
}));

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
        setOptions: jest.fn(),
        addContacts: jest.fn(() => Promise.resolve()),
    };
    const dialog_ref = { close: jest.fn() };
    const createComponent = createComponentFactory({
        component: AddColleaguesModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(LandingStateService, state as any),
            { provide: MatDialogRef, useValue: dialog_ref },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        search_results.set([]);
        loading.set('');
        contacts.set([]);
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
        expect(notifySuccess).toHaveBeenCalledWith(
            'Colleague added successfully',
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should pluralise the success message for multiple colleagues', async () => {
        spectator.component.selected_users.set([user_a, user_b] as any);
        await spectator.component.confirm();
        expect(notifySuccess).toHaveBeenCalledWith(
            '2 colleagues added successfully',
        );
    });

    it('should notify and stay open when adding fails', async () => {
        state.addContacts.mockRejectedValueOnce(new Error('nope'));
        jest.spyOn(console, 'error').mockImplementation(() => undefined);
        spectator.component.selected_users.set([user_a] as any);
        await spectator.component.confirm();
        expect(notifyError).toHaveBeenCalledWith(
            'Failed to add colleagues. Please try again.',
        );
        expect(dialog_ref.close).not.toHaveBeenCalledWith(true);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should close with false when dismissed', () => {
        spectator.component.dismiss();
        expect(dialog_ref.close).toHaveBeenCalledWith(false);
    });
});
