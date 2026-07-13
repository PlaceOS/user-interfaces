vi.mock('@placeos/ts-client');

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { StaffUser } from '@placeos/common';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
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
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
        ],
    });

    beforeEach(() => {
        close_fn.mockClear();
        vi.spyOn(ts_client, 'queryUsers').mockResolvedValue({
            data: [],
        } as any);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show an empty state when there are no users', () => {
        spectator.detectChanges();
        expect(spectator.component.users().length).toBe(0);
        expect('main button[matRipple]').not.toExist();
    });

    it('should update the search signal when typing in the search field', () => {
        spectator.detectChanges();
        spectator.typeInElement('Jim', 'input[matInput]');
        spectator.detectChanges();
        expect(spectator.component.search()).toBe('Jim');
    });

    it('should close the dialog with the selected user', () => {
        const user = new StaffUser({ id: 'u1', email: 'jim@place.tech' });
        spectator.component.select(user);
        expect(close_fn).toHaveBeenCalledWith(user);
    });
});
