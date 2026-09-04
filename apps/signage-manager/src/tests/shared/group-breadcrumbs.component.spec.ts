import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { GroupBreadcrumbsComponent } from '../../app/shared/group-breadcrumbs.component';
import { groupHierarchy, SignageService } from '../../app/signage.service';

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
    let closed_value: unknown;
    const selected_group_hierarchy = signal<any[]>([]);
    const signage_groups = signal<any[]>([]);
    const selected_group_id = signal('');
    const is_sys_admin = signal(false);
    const setSelectedGroup = vi.fn();
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

    async function make() {
        await TestBed.configureTestingModule({
            imports: [GroupBreadcrumbsComponent],
            providers: [
                {
                    provide: SignageService,
                    useValue: {
                        selected_group_hierarchy,
                        signage_groups,
                        selected_group_id,
                        is_sys_admin,
                        setSelectedGroup,
                    },
                },
                { provide: MatDialog, useValue: dialog },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(GroupBreadcrumbsComponent);
        fixture.detectChanges();
        return fixture;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        closed_value = undefined;
        selected_group_hierarchy.set([]);
        signage_groups.set([]);
        selected_group_id.set('');
        is_sys_admin.set(false);
        TestBed.resetTestingModule();
    });

    it('renders nothing when no group is selected', async () => {
        const fixture = await make();

        expect(fixture.nativeElement.querySelector('nav')).toBeNull();
    });

    it('shows an all-groups crumb for admins with no group selected', async () => {
        is_sys_admin.set(true);
        signage_groups.set([{ group: { id: 'a', name: 'Alpha' } }]);
        closed_value = 'a';
        const fixture = await make();

        expect(fixture.nativeElement.querySelector('nav')).not.toBeNull();
        const all_crumb = crumbs(fixture).at(-1);
        all_crumb.click();
        await fixture.whenStable();

        expect(dialog.open).toHaveBeenCalled();
        expect(setSelectedGroup).toHaveBeenCalledWith('a');
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

    it('applies the chosen signage group when the pill is used', async () => {
        selected_group_hierarchy.set([{ id: 'a', name: 'Alpha' }]);
        signage_groups.set([{ group: { id: 'a', name: 'Alpha' } }]);
        is_sys_admin.set(true);
        closed_value = 'b';
        const fixture = await make();

        crumbs(fixture).at(-1).click();
        await fixture.whenStable();

        expect(dialog.open).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                data: expect.objectContaining({
                    groups: signage_groups(),
                    selected_group_id: '',
                    show_all_groups: true,
                }),
            }),
        );
        expect(setSelectedGroup).toHaveBeenCalledWith('b');
    });

    it('jumps to a parent signage group without opening the selector', async () => {
        selected_group_hierarchy.set([
            { id: 'a', name: 'Alpha' },
            { id: 'b', name: 'Beta' },
        ]);
        const fixture = await make();

        crumbs(fixture)[0].click();
        await fixture.whenStable();

        expect(setSelectedGroup).toHaveBeenCalledWith('a');
        expect(dialog.open).not.toHaveBeenCalled();
    });

    it('keeps the current group when the selector is dismissed', async () => {
        selected_group_hierarchy.set([{ id: 'a', name: 'Alpha' }]);
        closed_value = undefined;
        const fixture = await make();

        crumbs(fixture).at(-1).click();
        await fixture.whenStable();

        expect(setSelectedGroup).not.toHaveBeenCalled();
    });
});
