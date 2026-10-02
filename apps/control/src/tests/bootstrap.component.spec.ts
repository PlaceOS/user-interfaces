import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockModule, MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import * as client from '@placeos/ts-client';
import { BootstrapComponent } from '../app/bootstrap.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        providers: [MockProvider(SettingsService, { get: vi.fn() })],
        imports: [
            FormsModule,
            MockModule(MatAutocompleteModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        spectator = createComponent();
    });

    afterEach(() => {
        localStorage.clear();
        vi.useRealTimers();
    });

    it('should create the bootstrap', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should stop loading when spaces have loaded', () => {
        spectator.detectChanges();
        expect('[load]').not.toExist();
        expect('mat-spinner').not.toExist();
        expect('p.description').toExist();
    });

    it('should not allow for submit when no system is set', () => {
        spectator.detectChanges();
        expect('[load]').not.toExist();
        expect('mat-spinner').not.toExist();
        expect('p.description').toExist();
        const button: HTMLButtonElement = spectator.query('button');
        expect(button).toBeTruthy();
        expect(button.disabled).toBeTruthy();
        spectator.component.system_id.set('sys-B0');
        spectator.detectChanges();
        expect(button.disabled).toBeFalsy();
    });

    it('should route to the /tabbed on submit', () => {
        spectator.component.system_id.set('sys-B0');
        spectator.detectChanges();
        expect(spectator.query('button[disabled]')).toBeFalsy();
        spectator.click('button');
        spectator.detectChanges();
        const router = spectator.inject(Router);
        expect(router.navigate).toHaveBeenCalledWith(['/tabbed', 'sys-B0'], {
            queryParamsHandling: 'preserve',
        });
    });

    it('should auto bootstrap if there is a system query parameter', () => {
        spectator.setRouteQueryParam('system_id', 'sys-B0');
        spectator.detectChanges();
        vi.runOnlyPendingTimers();
        const router = spectator.inject(Router);
        expect(router.navigate).toHaveBeenCalledWith(['/tabbed', 'sys-B0'], {
            queryParamsHandling: 'preserve',
        });
    });

    it('should clear bootstrap if there is a clear query parameter', () => {
        localStorage.setItem('PLACEOS.CONTROL.system', 'sys-B0');
        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();
        vi.runOnlyPendingTimers();
        expect(localStorage.getItem('PLACEOS.CONTROL.system')).toBeFalsy();
    });

    it('should show no results when the system search fails', async () => {
        vi.mocked(client.querySystems).mockRejectedValue(new Error('401'));
        spectator.component.system_id.set('Room');
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(400);
        expect(client.querySystems).toHaveBeenCalled();
        expect(() => spectator.component.space_list()).not.toThrow();
        expect(spectator.component.space_list()).toEqual([]);
        expect(() => spectator.detectChanges()).not.toThrow();
    });
});
