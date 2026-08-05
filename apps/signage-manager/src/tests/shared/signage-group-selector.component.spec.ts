import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SignageGroupSelectorComponent } from '../../app/shared/signage-group-selector.component';
import { SignageService } from '../../app/signage.service';

function group(id: string, name: string, parent_id?: string) {
    return { group: { id, name, parent_id }, permissions: 0 } as any;
}

describe('SignageGroupSelectorComponent', () => {
    let closed_value: unknown;
    const setSelectedGroup = vi.fn();
    const signage_groups = signal<any[]>([]);
    const selected_group = signal<any>(null);
    const selected_group_id = signal('');
    const is_sys_admin = signal(false);
    const selected_group_hierarchy = signal<any[]>([]);
    const show_group_selector = signal(true);
    const service = {
        show_group_selector,
        signage_groups,
        selected_group,
        selected_group_id,
        is_sys_admin,
        selected_group_hierarchy,
        setSelectedGroup,
    };
    const dialog = {
        open: vi.fn().mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value: unknown) => void) => {
                    Promise.resolve().then(() => handler(closed_value));
                    return { unsubscribe: vi.fn() };
                },
            }),
        }),
    };

    async function createComponent() {
        await TestBed.configureTestingModule({
            imports: [SignageGroupSelectorComponent],
            providers: [
                { provide: SignageService, useValue: service },
                { provide: MatDialog, useValue: dialog },
            ],
        })
            .overrideComponent(SignageGroupSelectorComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(SignageGroupSelectorComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        closed_value = undefined;
        signage_groups.set([]);
        selected_group.set(null);
        selected_group_id.set('');
        is_sys_admin.set(false);
        selected_group_hierarchy.set([]);
        show_group_selector.set(true);
        TestBed.resetTestingModule();
    });

    it('falls back to the all-groups label when nothing is selected', async () => {
        const component = await createComponent();

        expect(component.selected_label()).toBe('SIGNAGE_MANAGER.ALL_GROUPS');
        expect(component.selected_hierarchy()).toEqual([]);
    });

    it('labels the selected group and shows its hierarchy', async () => {
        signage_groups.set([
            group('a', 'Alpha'),
            group('b', 'Beta', 'a'),
            group('c', 'Gamma', 'b'),
        ]);
        selected_group.set(group('c', 'Gamma', 'b'));
        selected_group_hierarchy.set([
            { id: 'a', name: 'Alpha' },
            { id: 'b', name: 'Beta' },
            { id: 'c', name: 'Gamma' },
        ]);
        const component = await createComponent();

        expect(component.selected_label()).toBe('Gamma');
        expect(component.selected_hierarchy().map((_) => _.id)).toEqual([
            'a',
            'b',
            'c',
        ]);
    });

    it('follows the setting hiding the group selector', async () => {
        show_group_selector.set(false);
        const component = await createComponent();

        expect(component.show_selector()).toBe(false);
    });

    it('applies the chosen group after the selector closes', async () => {
        closed_value = 'g2';
        const component = await createComponent();

        await component.selectGroup();

        expect(setSelectedGroup).toHaveBeenCalledWith('g2');
    });

    it('does nothing when the selector is dismissed', async () => {
        closed_value = undefined;
        const component = await createComponent();

        await component.selectGroup();

        expect(setSelectedGroup).not.toHaveBeenCalled();
    });
});
