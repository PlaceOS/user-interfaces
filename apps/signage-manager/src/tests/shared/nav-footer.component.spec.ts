import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavFooterComponent } from '../../app/shared/nav-footer.component';
import { SignageService } from '../../app/signage.service';

describe('NavFooterComponent', () => {
    let closed_value: unknown;
    const setSelectedGroup = vi.fn();
    const can_manage_all_groups = signal(false);
    const manageable_signage_groups = signal<any[]>([]);
    const signage_groups = signal<any[]>([]);
    const selected_group_id = signal('');
    const selected_group = signal<any>(null);
    const is_sys_admin = signal(false);
    const show_group_selector = signal(true);
    const templates_enabled = signal(false);
    const service = {
        templates_enabled,
        can_manage_all_groups,
        manageable_signage_groups,
        signage_groups,
        selected_group_id,
        selected_group,
        is_sys_admin,
        show_group_selector,
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
            imports: [NavFooterComponent],
            providers: [
                { provide: SignageService, useValue: service },
                { provide: MatDialog, useValue: dialog },
            ],
        })
            .overrideComponent(NavFooterComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(NavFooterComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        closed_value = undefined;
        can_manage_all_groups.set(false);
        manageable_signage_groups.set([]);
        signage_groups.set([]);
        selected_group_id.set('');
        selected_group.set(null);
        is_sys_admin.set(false);
        show_group_selector.set(true);
        templates_enabled.set(false);
        TestBed.resetTestingModule();
    });

    it('follows the setting hiding the group selector', async () => {
        show_group_selector.set(false);
        const component = await createComponent();

        expect(component.show_selector()).toBe(false);
    });

    it('splits schedules and groups into the overflow menu', async () => {
        const component = await createComponent();

        const primary_routes = component
            .primary_nav_items()
            .map((_) => _.route);
        const more_routes = component.more_nav_items().map((_) => _.route);

        expect(primary_routes).not.toContain('/schedules');
        expect(primary_routes).not.toContain('/groups');
        expect(primary_routes).toContain('/media');
        expect(more_routes).toContain('/schedules');
    });

    it('places templates in the overflow menu when the flag is enabled', async () => {
        templates_enabled.set(true);
        const component = await createComponent();

        expect(component.primary_nav_items().map((_) => _.route)).not.toContain(
            '/templates',
        );
        expect(component.more_nav_items().map((_) => _.route)).toContain(
            '/templates',
        );
    });

    it('hides the group management item when the user cannot manage groups', async () => {
        const component = await createComponent();

        expect(component.more_nav_items().map((_) => _.route)).not.toContain(
            '/groups',
        );
    });

    it('shows the group management item once groups are manageable', async () => {
        manageable_signage_groups.set([{ id: 'g1' }]);
        const component = await createComponent();

        expect(component.more_nav_items().map((_) => _.route)).toContain(
            '/groups',
        );
    });

    it('labels the footer with the selected group name', async () => {
        selected_group.set({ group: { id: 'g1', name: 'Marketing' } });
        const component = await createComponent();

        expect(component.selected_label()).toBe('Marketing');
    });

    it('falls back to the all-groups label when nothing is selected', async () => {
        const component = await createComponent();

        expect(component.selected_label()).toBe('SIGNAGE_MANAGER.ALL_GROUPS');
    });

    it('applies the chosen group after the selector closes', async () => {
        closed_value = 'g2';
        const component = await createComponent();

        await component.selectGroup();

        expect(dialog.open).toHaveBeenCalled();
        expect(setSelectedGroup).toHaveBeenCalledWith('g2');
    });

    it('leaves the selection untouched when the selector is dismissed', async () => {
        closed_value = undefined;
        const component = await createComponent();

        await component.selectGroup();

        expect(setSelectedGroup).not.toHaveBeenCalled();
    });
});
