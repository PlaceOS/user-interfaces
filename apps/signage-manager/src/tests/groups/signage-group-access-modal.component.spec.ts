import { TestBed } from '@angular/core/testing';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { SignageGroupAccessModalComponent } from '../../app/groups/signage-group-access-modal.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupAccessModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    const dialog = { open: vi.fn() };
    const service_stub = {
        loadGroupAccess: vi.fn(),
        saveGroupAccess: vi.fn(),
        searchDirectoryGroups: vi.fn(),
    };
    const group = { id: 'group-1', name: 'Group 1' };

    function create() {
        TestBed.configureTestingModule({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { group } },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: MatDialog, useValue: dialog },
                { provide: SignageService, useValue: service_stub },
            ],
        }).overrideComponent(SignageGroupAccessModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupAccessModalComponent)
            .componentInstance;
    }

    async function make() {
        const component = create();
        await vi.waitFor(() => expect(component.loaded()).toBe(true));
        return component;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        dialog_ref.disableClose = false;
        service_stub.loadGroupAccess.mockResolvedValue({
            default_permissions: 1,
            ad_group_mappings: { 'ad-staff': ['Staff', 3] },
        });
        service_stub.saveGroupAccess.mockImplementation(
            async (_group, access) => access,
        );
        service_stub.searchDirectoryGroups.mockResolvedValue([]);
    });

    it('shows the stored defaults and mappings', async () => {
        const component = await make();

        expect(service_stub.loadGroupAccess).toHaveBeenCalledWith('group-1');
        expect(component.hasDefault(1)).toBe(true);
        expect(component.mapping_list()).toEqual([
            { id: 'ad-staff', name: 'Staff', permissions: 3 },
        ]);
    });

    it('closes when the group cannot be read', async () => {
        service_stub.loadGroupAccess.mockRejectedValue(new Error('nope'));
        const component = create();

        await vi.waitFor(() => expect(dialog_ref.close).toHaveBeenCalled());
        expect(component.loaded()).toBe(false);
    });

    it('adds an AD group with the current default permissions', async () => {
        const component = await make();
        component.setDefault(4, true);

        component.addMapping(' AD-Admins ', 'Admins');

        expect(component.mappings()['ad-admins']).toEqual(['Admins', 5]);
    });

    it('does not replace an AD group that is already mapped', async () => {
        const component = await make();

        component.addMapping('AD-STAFF', 'Other');

        expect(component.mappings()).toEqual({ 'ad-staff': ['Staff', 3] });
    });

    it('hides directory groups that are already mapped', async () => {
        const component = await make();
        (component as any)._directory.value.set([
            { id: 'AD-Staff', name: 'Staff' },
            { id: 'ad-admins', name: 'Admins' },
        ]);

        expect(component.directory_groups().map(({ id }) => id)).toEqual([
            'ad-admins',
        ]);
    });

    it('asks for the AD group ID when the directory cannot be searched', async () => {
        service_stub.searchDirectoryGroups.mockRejectedValue(
            new Error('no tenant'),
        );
        const component = await make();

        await vi.waitFor(() => {
            TestBed.tick();
            expect(component.directory_unavailable()).toBe(true);
        });
        component.manual_id.set('ad-reception');
        component.manual_name.set('');
        component.addManual();

        expect(component.mappings()['ad-reception']).toEqual([
            'ad-reception',
            1,
        ]);
        expect(component.manual_id()).toBe('');
    });

    it('changes the permissions of a mapping', async () => {
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value: unknown) => void) => {
                    Promise.resolve().then(() => handler({ permissions: 64 }));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        const component = await make();

        await component.editMapping(component.mapping_list()[0]);

        expect(component.mappings()['ad-staff']).toEqual(['Staff', 64]);
    });

    it('saves the defaults and mappings', async () => {
        const component = await make();
        component.removeMapping('ad-staff');
        component.addMapping('ad-admins', 'Admins');
        component.setDefault(1, false);

        await component.save();

        expect(service_stub.saveGroupAccess).toHaveBeenCalledWith(group, {
            default_permissions: 0,
            ad_group_mappings: { 'ad-admins': ['Admins', 1] },
        });
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('stays open when saving fails', async () => {
        service_stub.saveGroupAccess.mockRejectedValue(new Error('nope'));
        const component = await make();

        await component.save();

        expect(component.saving()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
