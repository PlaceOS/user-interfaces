import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CateringStateService } from '@placeos/catering';
import { CalendarEvent, generateEventForm } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { OrganisationService } from '@placeos/organisation';
import { DetailBookSpaceFormComponent } from 'apps/workplace/src/app/book/space-flow/detailed-form.component';
import { MockComponent } from 'ng-mocks';

describe('DetailBookSpaceFormComponent', () => {
    let spectator: Spectator<DetailBookSpaceFormComponent>;
    const createComponent = createComponentFactory({
        component: DetailBookSpaceFormComponent,
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(UserListFieldComponent),
        ],
        providers: [
            { provide: OrganisationService, useValue: {} },
            { provide: CateringStateService, useValue: {} }
        ],
        imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
        spectator.setInput({ form: generateEventForm(new CalendarEvent()) });
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });
});
