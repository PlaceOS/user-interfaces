import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    groupPermissionLabels,
    SignageGroupPermissionsModalComponent,
} from '../../app/groups/signage-group-permissions-modal.component';

describe('SignageGroupPermissionsModalComponent', () => {
    const dialog_ref = { close: vi.fn() };
    let modal_data: {
        title?: string;
        permissions: number;
        deny?: boolean;
        show_deny?: boolean;
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        }).overrideComponent(SignageGroupPermissionsModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupPermissionsModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        dialog_ref.close.mockReset();
        // read(1) + update(4) = 5
        modal_data = { permissions: 5, deny: false };
    });

    it('reports which permission flags are enabled from the bitmask', () => {
        const component = make();
        expect(component.hasPermission(1)).toBe(true); // read
        expect(component.hasPermission(4)).toBe(true); // update
        expect(component.hasPermission(2)).toBe(false); // create
        expect(component.hasPermission(8)).toBe(false); // delete
    });

    it('toggles a permission flag on and off in the bitmask', () => {
        const component = make();
        component.setPermission(2, true); // add create
        expect(component.value()).toBe(7);
        expect(component.hasPermission(2)).toBe(true);

        component.setPermission(1, false); // remove read
        expect(component.value()).toBe(6);
        expect(component.hasPermission(1)).toBe(false);
    });

    it('closes with the accumulated permissions and deny flag', () => {
        modal_data = { permissions: 1, deny: true, show_deny: true };
        const component = make();
        component.setPermission(8, true); // add delete

        component.save();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            permissions: 9,
            deny: true,
        });
    });

    it('starts from an empty bitmask when no permissions are supplied', () => {
        modal_data = { permissions: 0 };
        const component = make();
        expect(component.value()).toBe(0);
        expect(component.deny()).toBe(false);
    });
});

describe('groupPermissionLabels', () => {
    it('returns the labels for every set permission flag', () => {
        // read(1) + update(4) + share(128) = 133
        expect(groupPermissionLabels(133)).toEqual([
            'SIGNAGE_MANAGER.PERM_READ',
            'SIGNAGE_MANAGER.PERM_UPDATE',
            'SIGNAGE_MANAGER.PERM_SHARE',
        ]);
    });

    it('returns no labels for an empty or invalid mask', () => {
        expect(groupPermissionLabels(0)).toEqual([]);
        expect(groupPermissionLabels(NaN as any)).toEqual([]);
    });
});
