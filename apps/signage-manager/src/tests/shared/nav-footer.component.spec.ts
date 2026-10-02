import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavFooterComponent } from '../../app/shared/nav-footer.component';
import { SignageContextService } from '../../app/signage-context.service';

describe('NavFooterComponent', () => {
    const can_manage_all_groups = signal(false);
    const can_manage_groups = signal(false);
    const signage_groups = signal<any[]>([]);
    const selected_group = signal<any>(null);
    const selectGroup = vi.fn();
    const show_group_selector = signal(true);
    const templates_enabled = signal(false);
    const context = {
        can_manage_groups,
        templates_enabled,
        can_manage_all_groups,
        signage_groups,
        selected_group,
        selectGroup,
        show_group_selector,
    };

    async function createComponent() {
        await TestBed.configureTestingModule({
            imports: [NavFooterComponent],
            providers: [{ provide: SignageContextService, useValue: context }],
        })
            .overrideComponent(NavFooterComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(NavFooterComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        can_manage_all_groups.set(false);
        can_manage_groups.set(false);
        signage_groups.set([]);
        selected_group.set(null);
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
        expect(more_routes).toContain('/manage');
        expect(primary_routes).not.toContain('/manage');
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
        can_manage_groups.set(true);
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

    it('opens the shared group selector', async () => {
        const component = await createComponent();

        await component.selectGroup();

        expect(selectGroup).toHaveBeenCalledTimes(1);
    });
});
