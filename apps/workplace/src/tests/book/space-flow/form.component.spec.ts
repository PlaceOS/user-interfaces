import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { EventStateService } from '@placeos/events';
import { MockComponent } from 'ng-mocks';

import { DetailBookSpaceFormComponent } from 'apps/workplace/src/app/book/space-flow/detailed-form.component';
import { SpaceFlowFormComponent } from 'apps/workplace/src/app/book/space-flow/form.component';

describe('SpaceFlowFormComponent', () => {
    let spectator: SpectatorRouting<SpaceFlowFormComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceFlowFormComponent,
        providers: [
            {
                provide: EventStateService,
                useValue: {
                    setOptions: jest.fn(),
                    clearForm: jest.fn(),
                    form: {
                        patchValue: jest.fn(),
                        get: jest.fn(),
                        markAllAsTouched: jest.fn(),
                        valid: true,
                    },
                },
            },
        ],
        declarations: [
            MockComponent(DetailBookSpaceFormComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow for quick bookings', () => {
        const service = spectator.inject(EventStateService);
        spectator.click('[quick] button');
        spectator.detectChanges();
        expect(service.form.patchValue).toHaveBeenCalledTimes(1);
        expect(service.setOptions).toHaveBeenCalledWith({ capacity: 0 });
        expect(spectator.router.navigate).toHaveBeenCalledWith([
            '/book',
            'spaces',
            'find',
        ]);
    });

    it('should show detailed booking form', () => {
        expect('detailed-book-space-form').toExist();
    });

    it('should allow clearing the form', () => {
        spectator.component.time = 1;
        spectator.component.capacity = 5;
        spectator.click('button[clear]');
        const service = spectator.inject(EventStateService);
        expect(service.clearForm).toHaveBeenCalledTimes(1);
        expect(spectator.component.time).toBe(0);
        expect(spectator.component.capacity).toBe(0);
    });

    it('should allow booking without a space', () => {
        spectator.click('button[standalone]');
        const service = spectator.inject(EventStateService);
        expect(service.form.markAllAsTouched).toHaveBeenCalled();
        expect(spectator.router.navigate).toHaveBeenCalledWith([
            '/book',
            'spaces',
            'confirm',
        ]);
    });

    it('should allow finding a space', () => {
        spectator.click('button[find-space]');
        const service = spectator.inject(EventStateService);
        expect(service.form.markAllAsTouched).toHaveBeenCalled();
        expect(spectator.router.navigate).toHaveBeenCalledWith([
            '/book',
            'spaces',
            'find',
        ]);
    });

    it('should allow for edits', () => {
        const service = spectator.inject(EventStateService);
        expect('[quick]').toExist();
        expect('[form] h2').toContainText('Detailed Booking');
        (service.form.get as any).mockImplementation((_) => ({ value: true }));
        spectator.detectChanges();
        expect('[quick]').not.toExist();
        expect('[form] h2').toContainText('Edit Booking');
    });
});
