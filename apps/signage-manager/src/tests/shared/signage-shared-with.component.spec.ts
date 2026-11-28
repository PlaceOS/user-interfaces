import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import { type Group, playlist_media } from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';
import { NEVER, of } from 'rxjs';

import { SignageSharedWithComponent } from '../../app/shared/signage-shared-with.component';
import { SignageContextService } from '../../app/signage-context.service';
import { signageMedia } from '../../app/signage-models';
import { signage_shared_groups_change } from '../../app/signage-shared-groups.util';
import { signageGroup } from '../signage-test-models';

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
        signageGroup({ id: 'grp-1', name: 'Facilities' }),
        signageGroup({ id: 'grp-2', name: 'Marketing' }),
    ];

    function serverGroups(groups: Group[]) {
        vi.mocked(playlist_media.show).mockResolvedValue(
            mockReply(signageMedia({ shared_with: groups })),
        );
    }

    function make(groups: Group[], group_id = 'grp-1', allow_unshare = true) {
        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialog, useValue: { open: dialog_open } },
                { provide: SignageContextService, useValue: service_stub },
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
        (playlist_media.destroy as any).mockResolvedValue(mockReply({}));
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

    afterEach(() => setNotifyOutlet(null, true));

    it('hides the section while the item only lives in the current group', () => {
        const component = make([
            signageGroup({ id: 'grp-1', name: 'Facilities' }),
        ]);

        expect(component.visible()).toBe(false);
    });

    it('hides the section when nothing is shared', () => {
        const component = make([]);

        expect(component.visible()).toBe(false);
    });

    it('shows the groups holding the item', () => {
        const component = make([
            signageGroup({ id: 'grp-1', name: 'Facilities' }),
            signageGroup({ id: 'grp-2', name: 'Marketing' }),
        ]);

        expect(component.visible()).toBe(true);
        expect(component.can_unshare()).toBe(true);
    });

    it('shows the owning group without an unlink action from the all groups view', () => {
        const component = make(
            [signageGroup({ id: 'grp-2', name: 'Marketing' })],
            '',
        );

        // Unlinking the last group would delete the item, so the user has to
        // delete it instead.
        expect(component.visible()).toBe(true);
        expect(component.can_unshare()).toBe(false);
    });

    it('hides unlink actions in read-only views', () => {
        const component = make(
            [
                signageGroup({ id: 'grp-1', name: 'Facilities' }),
                signageGroup({ id: 'grp-2', name: 'Marketing' }),
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
                { provide: SignageContextService, useValue: service_stub },
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

        await component.unshare(
            signageGroup({ id: 'grp-2', name: 'Marketing' }),
        );

        expect(playlist_media.destroy).toHaveBeenCalledWith({
            id: 'media-1',
            group_id: 'grp-2',
        });
        expect(signage_shared_groups_change()).toBe(change + 1);
        expect(service_stub.changed).toHaveBeenCalled();
    });

    it('keeps the last group when another user unlinked the others', async () => {
        serverGroups([signageGroup({ id: 'grp-2', name: 'Marketing' })]);
        const component = make(two_groups);

        await component.unshare(
            signageGroup({ id: 'grp-2', name: 'Marketing' }),
        );

        expect(playlist_media.show).toHaveBeenCalledWith({ id: 'media-1' });
        expect(playlist_media.destroy).not.toHaveBeenCalled();
    });

    it('marks the group as unlinking while the request is pending', async () => {
        let finish_unshare: () => void;
        (playlist_media.destroy as any).mockImplementation(
            fromV1Mock(
                () =>
                    new Promise<void>((resolve) => {
                        finish_unshare = resolve;
                    }),
                ['id', '...'],
            ),
        );
        const component = make([
            signageGroup({ id: 'grp-1', name: 'Facilities' }),
            signageGroup({ id: 'grp-2', name: 'Marketing' }),
        ]);

        const pending = component.unshare(
            signageGroup({ id: 'grp-2', name: 'Marketing' }),
        );
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
            signageGroup({ id: 'grp-1', name: 'Facilities' }),
            signageGroup({ id: 'grp-2', name: 'Marketing' }),
        ]);

        await component.unshare(
            signageGroup({ id: 'grp-2', name: 'Marketing' }),
        );

        expect(playlist_media.destroy).not.toHaveBeenCalled();
    });
});
