import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    apiEndpoint,
    removeSignageMedia,
    showSignageMedia,
    SignageMedia,
} from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';

import { SignageSharedWithComponent } from '../../app/shared/signage-shared-with.component';
import { signage_shared_groups_change } from '../../app/signage-shared-groups.util';
import { SignageService } from '../../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Fake dialog ref shaped for `openConfirmModal` driven via MatDialog. */
const makeConfirmRef = (reason: string) => ({
    componentInstance: { event: NEVER, loading: { set: vi.fn() } },
    afterClosed: () => of({ reason }),
    close: vi.fn(),
});

describe('SignageSharedWithComponent', () => {
    let dialog_open: ReturnType<typeof vi.fn>;
    const service_stub = { changed: vi.fn() };
    const two_groups = [
        { id: 'grp-1', name: 'Facilities' },
        { id: 'grp-2', name: 'Marketing' },
    ];

    function serverGroups(groups: Array<{ id: string; name: string }>) {
        vi.mocked(showSignageMedia).mockResolvedValue(
            new SignageMedia({ shared_with: groups }),
        );
    }

    function make(
        groups: Array<{ id: string; name: string }>,
        group_id = 'grp-1',
        allow_unshare = true,
    ) {
        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialog, useValue: { open: dialog_open } },
                { provide: SignageService, useValue: service_stub },
            ],
        }).overrideComponent(SignageSharedWithComponent, {
            set: { template: '', imports: [] },
        });
        const fixture = TestBed.createComponent(SignageSharedWithComponent);
        fixture.componentRef.setInput('type', 'media');
        fixture.componentRef.setInput('item_id', 'media-1');
        fixture.componentRef.setInput('group_id', group_id);
        fixture.componentRef.setInput('allow_unshare', allow_unshare);
        (fixture.componentInstance as any)._shared_groups.value.set(groups);
        return fixture.componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        dialog_open = vi.fn(() => makeConfirmRef('done'));
        (apiEndpoint as any).mockReturnValue('/api/engine/v2');
        (removeSignageMedia as any).mockResolvedValue({});
        serverGroups(two_groups);
        setNotifyOutlet(
            {
                open: () => ({
                    onAction: () => ({ subscribe: () => undefined }),
                    dismiss: () => undefined,
                }),
            } as any,
            true,
        );
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('hides the section while the item only lives in the current group', () => {
        const component = make([{ id: 'grp-1', name: 'Facilities' }]);

        expect(component.visible()).toBe(false);
    });

    it('hides the section when nothing is shared', () => {
        const component = make([]);

        expect(component.visible()).toBe(false);
    });

    it('shows the groups holding the item', () => {
        const component = make([
            { id: 'grp-1', name: 'Facilities' },
            { id: 'grp-2', name: 'Marketing' },
        ]);

        expect(component.visible()).toBe(true);
        expect(component.can_unshare()).toBe(true);
    });

    it('shows the owning group without an unlink action from the all groups view', () => {
        const component = make([{ id: 'grp-2', name: 'Marketing' }], '');

        // Unlinking the last group would delete the item, so the user has to
        // delete it instead.
        expect(component.visible()).toBe(true);
        expect(component.can_unshare()).toBe(false);
    });

    it('hides unlink actions in read-only views', () => {
        const component = make(
            [
                { id: 'grp-1', name: 'Facilities' },
                { id: 'grp-2', name: 'Marketing' },
            ],
            'grp-1',
            false,
        );

        expect(component.visible()).toBe(true);
        expect(component.can_unshare()).toBe(false);
    });

    it('hides unlink actions unless the caller allows them', () => {
        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialog, useValue: { open: dialog_open } },
                { provide: SignageService, useValue: service_stub },
            ],
        }).overrideComponent(SignageSharedWithComponent, {
            set: { template: '', imports: [] },
        });
        const fixture = TestBed.createComponent(SignageSharedWithComponent);
        fixture.componentRef.setInput('type', 'media');
        fixture.componentInstance['_shared_groups'].value.set(two_groups);

        expect(fixture.componentInstance.can_unshare()).toBe(false);
    });

    it('unlinks the item from the confirmed group and refreshes the lists', async () => {
        const component = make(two_groups);
        const change = signage_shared_groups_change();

        await component.unshare({ id: 'grp-2', name: 'Marketing' });

        expect(removeSignageMedia).toHaveBeenCalledWith('media-1', {
            group_id: 'grp-2',
        });
        expect(signage_shared_groups_change()).toBe(change + 1);
        expect(service_stub.changed).toHaveBeenCalled();
    });

    it('keeps the last group when another user unlinked the others', async () => {
        serverGroups([{ id: 'grp-2', name: 'Marketing' }]);
        const component = make(two_groups);

        await component.unshare({ id: 'grp-2', name: 'Marketing' });

        expect(showSignageMedia).toHaveBeenCalledWith('media-1', {
            group_id: 'grp-1',
        });
        expect(removeSignageMedia).not.toHaveBeenCalled();
    });

    it('marks the group as unlinking while the request is pending', async () => {
        let finish_unshare: () => void;
        (removeSignageMedia as any).mockImplementation(
            () =>
                new Promise<void>((resolve) => {
                    finish_unshare = resolve;
                }),
        );
        const component = make([
            { id: 'grp-1', name: 'Facilities' },
            { id: 'grp-2', name: 'Marketing' },
        ]);

        const pending = component.unshare({
            id: 'grp-2',
            name: 'Marketing',
        });
        await vi.waitFor(() => {
            expect(component.unsharing_group_id()).toBe('grp-2');
        });

        finish_unshare!();
        await pending;

        expect(component.unsharing_group_id()).toBe('');
    });

    it('keeps the group when the confirmation is dismissed', async () => {
        dialog_open = vi.fn(() => makeConfirmRef(''));
        const component = make([
            { id: 'grp-1', name: 'Facilities' },
            { id: 'grp-2', name: 'Marketing' },
        ]);

        await component.unshare({ id: 'grp-2', name: 'Marketing' });

        expect(removeSignageMedia).not.toHaveBeenCalled();
    });
});
