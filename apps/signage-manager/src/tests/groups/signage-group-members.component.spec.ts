import { TestBed } from '@angular/core/testing';
import {
    SignageGroupMember,
    SignageGroupMembersComponent,
} from '../../app/groups/signage-group-members.component';

describe('SignageGroupMembersComponent', () => {
    async function render(
        kind: 'users' | 'zones',
        members: SignageGroupMember<string>[],
    ) {
        const fixture = TestBed.createComponent(
            SignageGroupMembersComponent<string>,
        );
        fixture.componentRef.setInput('kind', kind);
        fixture.componentRef.setInput('members', members);
        await fixture.whenStable();
        return fixture;
    }

    it('shows the detail line of users and the denied label of zones', async () => {
        const users = await render('users', [
            {
                id: 'u1',
                name: 'Ann',
                detail: 'ann@example.com',
                permissions: 0,
                row: 'u1',
            },
        ]);
        expect(users.nativeElement.textContent).toContain('ann@example.com');
        expect(users.nativeElement.textContent).toContain('person');

        const zones = await render('zones', [
            { id: 'z1', name: 'Lobby', deny: true, permissions: 0, row: 'z1' },
        ]);
        expect(zones.nativeElement.textContent).toContain('Denied');
        expect(zones.nativeElement.textContent).not.toContain('person');
    });

    it('emits the row of the member to edit or remove', async () => {
        const fixture = await render('zones', [
            { id: 'z1', name: 'Lobby', permissions: 0, row: 'zone-row' },
        ]);
        const edit = vi.fn();
        const remove = vi.fn();
        fixture.componentInstance.edit.subscribe(edit);
        fixture.componentInstance.remove.subscribe(remove);
        const element: HTMLElement = fixture.nativeElement;
        // The add button, then the edit and remove buttons of the row
        const [, edit_button, remove_button] =
            element.querySelectorAll<HTMLButtonElement>('button');

        edit_button?.click();
        remove_button?.click();

        expect(edit).toHaveBeenCalledWith('zone-row');
        expect(remove).toHaveBeenCalledWith('zone-row');
    });
});
