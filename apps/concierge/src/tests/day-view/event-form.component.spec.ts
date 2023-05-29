import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { generateEventForm } from '@placeos/events';
import {
    ActionFieldComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { EventFormComponent } from '../../app/day-view/event-form.component';
import { AssetListFieldComponent } from 'libs/assets/src/lib/asset-list-field.component';
import { CateringListFieldComponent } from 'libs/catering/src/lib/catering-list-field.component';
import { SettingsService } from '@placeos/common';

describe('EventFormComponent', () => {
    let spectator: Spectator<EventFormComponent>;
    const createComponent = createComponentFactory({
        component: EventFormComponent,
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(UserSearchFieldComponent),
            MockComponent(UserListFieldComponent),
            MockComponent(ActionFieldComponent),
            MockComponent(CateringListFieldComponent),
            MockComponent(AssetListFieldComponent),
        ],
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow selecting spaces', async () => {
        const form = generateEventForm({
            extension_data: { catering: [] },
        } as any);
        const spy = jest.spyOn(form, 'patchValue');
        spectator.setInput({ form });
        spectator.detectChanges();
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(() => ({
            componentInstance: { event: of({ reason: 'done' }) },
            afterClosed: () => of(true).pipe(delay(10)),
            close: jest.fn(),
        }));
        await spectator.component.selectSpace();
        expect(form.patchValue).toBeCalledWith({ resources: undefined });
    });
});
