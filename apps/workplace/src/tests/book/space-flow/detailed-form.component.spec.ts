import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CateringStateService } from '@placeos/catering';
import { SettingsService } from '@placeos/common';
import { generateEventForm } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { OrganisationService } from '@placeos/organisation';
import { DetailBookSpaceFormComponent } from 'apps/workplace/src/app/book/space-flow/detailed-form.component';
import { HostSelectFieldComponent } from 'libs/form-fields/src/lib/host-select-field.component';
import { RichTextInputComponent } from 'libs/form-fields/src/lib/rich-text-input.component';
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
            MockComponent(HostSelectFieldComponent),
            MockComponent(RichTextInputComponent),
        ],
        providers: [
            { provide: OrganisationService, useValue: {} },
            { provide: CateringStateService, useValue: {} },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show form', () => {
        expect('form').not.toExist();
        spectator.setInput({ form: generateEventForm() });
        spectator.detectChanges();
        expect('form').toExist();
    });
});
