import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignageGroupUserSelectModalComponent } from '../../app/groups/signage-group-user-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupUserSelectModalComponent', () => {
    const search_group_users = vi.fn();
    const service_stub = { searchGroupUsers: search_group_users };
    let modal_data: { exclude_ids?: string[] };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
            ],
        }).overrideComponent(SignageGroupUserSelectModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupUserSelectModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        search_group_users.mockResolvedValue([]);
        modal_data = {};
    });

    it('shows no users before the search resource has loaded', () => {
        const component = make();
        expect(component.users()).toEqual([]);
    });

    it('filters out users whose id or email is excluded', () => {
        modal_data = { exclude_ids: ['user-1', 'taken@place.tech'] };
        const component = make();
        (component as any)._users.value.set([
            { id: 'user-1', email: 'a@place.tech' },
            { id: 'user-2', email: 'taken@place.tech' },
            { id: 'user-3', email: 'free@place.tech' },
        ]);

        expect(component.users().map((user: any) => user.id)).toEqual([
            'user-3',
        ]);
    });

    it('returns every loaded user when nothing is excluded', () => {
        const component = make();
        (component as any)._users.value.set([
            { id: 'user-1', email: 'a@place.tech' },
            { id: 'user-2', email: 'b@place.tech' },
        ]);

        expect(component.users().length).toBe(2);
    });
});
