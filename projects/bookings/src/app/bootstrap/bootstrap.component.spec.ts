import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';

import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        imports: [
            FormsModule,
            MockModule(MatAutocompleteModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create the bootstrap', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show loading initially', () => {
        expect(spectator.query('.info-block')).toBeTruthy();
        expect(spectator.query('mat-spinner')).toBeTruthy();
    });

    it('should stop loading spaces have loaded', () => {
        spectator.detectChanges();
        expect(spectator.query('.info-block')).toBeFalsy();
        expect(spectator.query('mat-spinner')).toBeFalsy();
        expect(spectator.query('p.description')).toBeTruthy();
    });

    it('should not allow for submit when no system is set', () => {
        spectator.detectChanges();
        expect(spectator.query('.info-block')).toBeFalsy();
        expect(spectator.query('mat-spinner')).toBeFalsy();
        expect(spectator.query('p.description')).toBeTruthy();
        const button: HTMLButtonElement = spectator.query('button');
        expect(button).toBeTruthy();
        // expect(button.disabled).toBeTruthy();
        spectator.component.system_id = 'sys-B0';
        spectator.detectChanges();
        expect(button.disabled).toBeFalsy();
    });

    it('should route to the panel on submit', async () => {
        spectator.component.system_id = 'sys-B0';
        spectator.detectChanges();
        expect(spectator.query('button[disabled]')).toBeFalsy();
        spectator.click('button');
        spectator.detectChanges();
        const router = spectator.inject(Router);
        expect(router.navigate).toHaveBeenCalledWith(['panel', 'sys-B0']);
    });

    it('should auto bootstrap if there is a system query parameter', async (done) => {
        spectator.setRouteQueryParam('system_id', 'sys-B0');
        spectator.detectChanges();
        setTimeout(() => {
            const router = spectator.inject(Router);
            expect(router.navigate).toHaveBeenCalledWith(['panel', 'sys-B0']);
            done();
        }, 100);
    });

    it('should clear bootstrap if there is a clear query parameter', () => {
        localStorage.setItem('ACA.PANEL.system', 'sys-B0');
        spectator.setRouteQueryParam('clear', 'true');
        jest.runOnlyPendingTimers();
        expect(localStorage.getItem('ACA.PANEL.system')).toBeFalsy();
    });
});
