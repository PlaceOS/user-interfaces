import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockModule } from 'ng-mocks';

import { StaffUser } from '@placeos/common';
import { HostSelectFieldComponent } from '../lib/host-select-field.component';

// queryCalendars (libs/events) runs for real; only the ts-client `get` it
// calls beneath is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('HostSelectFieldComponent', () => {
    let spectator: Spectator<HostSelectFieldComponent>;
    const createComponent = createComponentFactory({
        component: HostSelectFieldComponent,
        providers: [],
        declarations: [],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.get).mockResolvedValue([{}] as any);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should handle external value changes', () => {
        expect(spectator.component.item()).toBeNull();
        const user = new StaffUser({ email: 'test@t.com' });
        spectator.component.writeValue(user);
        spectator.detectChanges();
        expect(spectator.component.item()).toBe(user);
    });

    // it('should handle internal value changes', async () => {
    //     expect(spectator.component.item).toBeUndefined();
    //     const user = new StaffUser({ email: 'test@t.com' });
    //     const spy = vi.fn();
    //     spectator.component.registerOnChange(spy);
    //     await spectator.component.setValue(user.email);
    //     expect(spectator.component.item.email).toBe(user.email);
    //     expect(spy).toHaveBeenCalledWith(user);
    // });

    it('should handle disable being toggled', () => {
        expect(spectator.component.disabled()).toBeFalsy();
        spectator.component.setDisabledState(true);
        expect(spectator.component.disabled()).toBeTruthy();
    });
});
