vi.mock('@placeos/ts-client');

import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SelectUserModalComponent } from '../lib/select-user-modal.component';

describe('SelectUserModalComponent', () => {
    let spectator: Spectator<SelectUserModalComponent>;
    const close_fn = vi.fn();
    const createComponent = createComponentFactory({
        component: SelectUserModalComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [MockProvider(MatDialogRef, { close: close_fn })],
        imports: [MatFormFieldModule, MatInputModule, FormsModule],
    });

    beforeEach(() => close_fn.mockClear());

    it('should list matching users and close with the chosen one', async () => {
        vi.spyOn(ts_client, 'queryUsers').mockResolvedValue({
            data: [{ id: 'u1', name: 'Jim', email: 'jim@place.tech' }],
        } as Awaited<ReturnType<typeof ts_client.queryUsers>>);
        spectator = createComponent();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect(spectator.query('main button')).toHaveText('jim@place.tech');
        spectator.click('main button');
        const [user] = close_fn.mock.calls[0];
        expect(user).toBeInstanceOf(StaffUser);
        expect(user.id).toBe('u1');
    });

    it('should show the empty state when the user search fails', async () => {
        vi.spyOn(ts_client, 'queryUsers').mockRejectedValue(new Error('nope'));
        spectator = createComponent();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect('main button').not.toExist();
        expect(spectator.component.users()).toEqual([]);
    });
});
