import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';

import { BootstrapComponent } from '../app/bootstrap.component';
import { SpacesService } from '@placeos/spaces';
import { of } from 'rxjs';

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        providers: [
            {
                provide: SpacesService,
                useValue: {
                    initialised: of(true),
                    space_list: [{ id: '1', name: 'Space 1' }],
                },
            },
        ],
        imports: [
            FormsModule,
            MockModule(MatAutocompleteModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
        ],
    });

    beforeEach(() => {
        jest.useFakeTimers();
        spectator = createComponent();
    });

    afterEach(() => {
        localStorage.clear();
        jest.useRealTimers();
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
        // expect(button.disabled).toBeTruthy();
        spectator.component.system_id$.next('sys-B0');
        spectator.detectChanges();
        expect(button.disabled).toBeFalsy();
    });

    it('should route to the /tabbed on submit', () => {
        spectator.component.system_id$.next('sys-B0');
        spectator.detectChanges();
        expect(spectator.query('button[disabled]')).toBeFalsy();
        spectator.click('button');
        spectator.detectChanges();
        const router = spectator.inject(Router);
        expect(router.navigate).toHaveBeenCalledWith(['/tabbed', 'sys-B0'], { queryParamsHandling: "preserve" });
    });

    it('should auto bootstrap if there is a system query parameter', () => {
        spectator.setRouteQueryParam('system_id', 'sys-B0');
        spectator.detectChanges();
        jest.runOnlyPendingTimers();
        const router = spectator.inject(Router);
        expect(router.navigate).toHaveBeenCalledWith(['/tabbed', 'sys-B0'], { queryParamsHandling: "preserve" });
    });

    it('should clear bootstrap if there is a clear query parameter', () => {
        localStorage.setItem('PLACEOS.CONTROL.system', 'sys-B0');
        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();
        jest.runOnlyPendingTimers();
        expect(localStorage.getItem('PLACEOS.CONTROL.system')).toBeFalsy();
    });
});
