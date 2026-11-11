import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockModule } from 'ng-mocks';

import { EMPTY_USER, StaffUser, User } from '@placeos/common';
import { setCurrentUser } from 'libs/common/src/lib/user-state';
import { HostSelectFieldComponent } from '../lib/host-select-field.component';

// queryCalendars (libs/events) runs for real; only the ts-client `get` it
// calls beneath is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('HostSelectFieldComponent', () => {
    let spectator: Spectator<HostSelectFieldComponent>;
    const me = new StaffUser({ id: 'me', name: 'Me', email: 'me@place.tech' });
    const createComponent = createComponentFactory({
        component: HostSelectFieldComponent,
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(async () => {
        vi.clearAllMocks();
        setCurrentUser(me);
        vi.mocked(ts_client.get).mockResolvedValue([
            { id: 'me@place.tech', primary: true, can_edit: true },
            { id: 'zoe@place.tech', summary: 'Zoe', can_edit: true },
            { id: 'read-only@place.tech', summary: 'Read Only' },
            { id: 'amy@place.tech', summary: 'Amy', can_edit: true },
        ] as any);
        spectator = createComponent();
        await spectator.fixture.whenStable();
    });

    afterEach(() => setCurrentUser(EMPTY_USER as StaffUser));

    it('should list the current user and editable calendars by name', () => {
        expect(spectator.component.users().map((_) => _.email)).toEqual([
            'amy@place.tech',
            'me@place.tech',
            'zoe@place.tech',
        ]);
    });

    it('should default an empty written value to the current user', () => {
        spectator.component.writeValue(null);
        expect(spectator.component.item()).toBe(me);
        const user = new StaffUser({ email: 'zoe@place.tech' });
        spectator.component.writeValue(user);
        expect(spectator.component.item()).toBe(user);
    });

    it('should emit the listed user for a picked email, or a new user for others', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);

        spectator.component.setValue('zoe@place.tech');
        expect(on_change).toHaveBeenLastCalledWith(
            expect.objectContaining({ email: 'zoe@place.tech', name: 'Zoe' }),
        );

        spectator.component.setValue('other@place.tech');
        const other = on_change.mock.lastCall[0];
        expect(other).toBeInstanceOf(User);
        expect(other.email).toBe('other@place.tech');
    });
});
