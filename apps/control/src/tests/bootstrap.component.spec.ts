import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SpacesService } from '@user-interfaces/spaces';
import { BehaviorSubject } from 'rxjs';

import { BootstrapComponent } from '../app/bootstrap.component';

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        imports: [
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            MatProgressSpinnerModule,
        ],
        providers: [
            {
                provide: SpacesService,
                useValue: {
                    initialised: new BehaviorSubject(false),
                    spaces: [],
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show form', async () => {
        expect('mat-spinner').toExist();
        (spectator.inject(SpacesService) as any).initialised.next(true);        spectator.detectChanges();
        expect('mat-spinner').not.toExist();
        expect('input').toExist();
    });

    it('should allow inputing system ID', async () => {
        (spectator.inject(SpacesService) as any).initialised.next(true);        spectator.detectChanges();
        expect('button').toBeDisabled();
        spectator.typeInElement('space-0', 'input');
        expect('input').toHaveValue('space-0');
        spectator.detectChanges();
        expect('button').not.toBeDisabled();
        spectator.click('button');
        await spectator.fixture.whenStable();
        expect(spectator.inject(Router).navigate).toBeCalledWith([
            'panel',
            'space-0',
        ]);
    });

    it('should allow selecting spaces from the list', async () => {
        (spectator.inject(SpacesService) as any).space_list = [
            { id: 'space-0', name: 'Space 0' },
        ];
        (spectator.inject(SpacesService) as any).initialised.next(true);        spectator.detectChanges();
        expect('button').toBeDisabled();
        spectator.typeInElement('space-', 'input');        spectator.detectChanges();
        expect('mat-option').toExist();
        spectator.click('mat-option');
        spectator.detectChanges();
        expect('input').toHaveValue('space-0');
    });
});
