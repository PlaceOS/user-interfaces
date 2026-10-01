import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GroupBreadcrumbsComponent } from '../../app/shared/group-breadcrumbs.component';
import {
    groupHierarchy,
    SignageContextService,
} from '../../app/signage-context.service';

function group(id: string, name: string, parent_id?: string) {
    return { id, name, parent_id } as any;
}

describe('groupHierarchy', () => {
    it('has no hierarchy without a selected group', () => {
        expect(groupHierarchy(undefined, [])).toEqual([]);
    });

    it('traces the ancestor chain root first', () => {
        const groups = [
            group('a', 'Alpha'),
            group('b', 'Beta', 'a'),
            group('c', 'Gamma', 'b'),
        ];

        expect(groupHierarchy(groups[2], groups).map((_) => _.name)).toEqual([
            'Alpha',
            'Beta',
            'Gamma',
        ]);
    });

    it('stops when parents form a cycle', () => {
        const groups = [group('a', 'Alpha', 'b'), group('b', 'Beta', 'a')];

        const ids = groupHierarchy(groups[0], groups).map((_) => _.id);

        expect(new Set(ids).size).toBe(ids.length);
        expect(ids).toContain('a');
    });

    it('stops at the first ancestor missing from the list', () => {
        const groups = [group('b', 'Beta', 'missing')];

        expect(groupHierarchy(groups[0], groups).map((_) => _.id)).toEqual([
            'b',
        ]);
    });
});

function crumbs(fixture: any): HTMLButtonElement[] {
    // The leading icon button opens the selector; the crumbs follow it.
    return Array.from(
        fixture.nativeElement.querySelectorAll('nav button'),
    ).slice(1) as HTMLButtonElement[];
}

describe('GroupBreadcrumbsComponent', () => {
    const selected_group_hierarchy = signal<any[]>([]);
    const selected_group_id = signal('');
    const can_manage_all_groups = signal(false);
    const setSelectedGroup = vi.fn();
    const selectGroup = vi.fn();

    async function make() {
        await TestBed.configureTestingModule({
            imports: [GroupBreadcrumbsComponent],
            providers: [
                {
                    provide: SignageContextService,
                    useValue: {
                        selected_group_hierarchy,
                        selected_group_id,
                        can_manage_all_groups,
                        setSelectedGroup,
                        selectGroup,
                    },
                },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(GroupBreadcrumbsComponent);
        fixture.detectChanges();
        return fixture;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_group_hierarchy.set([]);
        selected_group_id.set('');
        can_manage_all_groups.set(false);
        TestBed.resetTestingModule();
    });

    it('renders nothing when no group is selected', async () => {
        const fixture = await make();

        expect(fixture.nativeElement.querySelector('nav')).toBeNull();
    });

    it('shows an all-groups crumb for admins and support with no group selected', async () => {
        can_manage_all_groups.set(true);
        const fixture = await make();

        expect(fixture.nativeElement.querySelector('nav')).not.toBeNull();
        crumbs(fixture).at(-1).click();

        expect(selectGroup).toHaveBeenCalled();
    });

    it('lists each group in the selected hierarchy', async () => {
        selected_group_hierarchy.set([
            { id: 'a', name: 'Alpha' },
            { id: 'b', name: 'Beta' },
        ]);
        const fixture = await make();

        const text = fixture.nativeElement.textContent;
        expect(text).toContain('Alpha');
        expect(text).toContain('Beta');
    });

    it('opens the group selector when the current group pill is used', async () => {
        selected_group_hierarchy.set([{ id: 'a', name: 'Alpha' }]);
        const fixture = await make();

        crumbs(fixture).at(-1).click();

        expect(selectGroup).toHaveBeenCalled();
        expect(setSelectedGroup).not.toHaveBeenCalled();
    });

    it('jumps to a parent signage group without opening the selector', async () => {
        selected_group_hierarchy.set([
            { id: 'a', name: 'Alpha' },
            { id: 'b', name: 'Beta' },
        ]);
        const fixture = await make();

        crumbs(fixture)[0].click();

        expect(setSelectedGroup).toHaveBeenCalledWith('a');
        expect(selectGroup).not.toHaveBeenCalled();
    });
});
