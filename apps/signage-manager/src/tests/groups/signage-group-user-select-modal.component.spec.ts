import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaceUser } from '@placeos/ts-client';
import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageGroupUserSelectModalComponent } from '../../app/groups/signage-group-user-select-modal.component';

describe('SignageGroupUserSelectModalComponent', () => {
    const search_group_users = vi.fn<() => Promise<PlaceUser[]>>();
    const service_stub = { searchGroupUsers: search_group_users };
    let modal_data: { exclude_ids?: string[] };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageGroupAdminService, useValue: service_stub },
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
            ],
        }).overrideComponent(SignageGroupUserSelectModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupUserSelectModalComponent)
            .componentInstance;
    }

    /** Run effects and timers past the 300 ms search debounce */
    async function settle() {
        for (let i = 0; i < 5; i++) {
            TestBed.tick();
            await vi.advanceTimersByTimeAsync(100);
        }
    }

    function user(id: string, email: string) {
        return new PlaceUser({ id, email, name: id });
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        search_group_users.mockResolvedValue([]);
        modal_data = {};
    });

    afterEach(() => vi.useRealTimers());

    it('shows no users before the search resource has loaded', () => {
        const component = make();
        expect(component.users()).toEqual([]);
    });

    it('filters out users whose id or email is excluded', async () => {
        modal_data = { exclude_ids: ['user-1', 'taken@place.tech'] };
        search_group_users.mockResolvedValue([
            user('user-1', 'a@place.tech'),
            user('user-2', 'taken@place.tech'),
            user('user-3', 'free@place.tech'),
        ]);
        const component = make();
        await settle();

        expect(component.users().map(({ id }) => id)).toEqual(['user-3']);
    });

    it('shows loading while the search runs', async () => {
        search_group_users.mockReturnValue(new Promise(() => undefined));
        const component = make();
        await settle();

        expect(component.loading()).toBe(true);
        expect(component.users()).toEqual([]);
    });

    it('shows an error, not a broken list, when the search fails', async () => {
        search_group_users.mockRejectedValue(new Error('down'));
        const component = make();
        await settle();

        expect(component.failed()).toBe(true);
        expect(component.users()).toEqual([]);
    });
});
