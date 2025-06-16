import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { OrganisationService } from '@placeos/organisation';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SpaceListFieldComponent } from '../lib/space-list-field.component';

describe('SpaceListFieldComponent', () => {
    let spectator: Spectator<SpaceListFieldComponent>;
    const createComponent = createComponentFactory({
        component: SpaceListFieldComponent,
        providers: [
            MockProvider(MatDialog, {
                open: jest.fn(() => ({ afterClosed: () => of([{}]) })),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, { levelWithID: jest.fn() }),
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatRadioModule), FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    // it('should allow removing spaces', fakeAsync(() => {
    //     spectator.component.setValue([new Space()]);
    //     spectator.tick(301);
    //     spectator.detectChanges();
    //     expect(spectator.query('button[name="remove-space"]')).toExist();
    //     spectator.click('button[name="remove-space"]');
    //     spectator.tick(301);
    //     spectator.detectChanges();
    //     expect(spectator.queryAll('div[space]').length).toBe(0);
    // }));

    // it('should handle space changes', fakeAsync(() => {
    //     let count = 0;
    //     (spectator.inject(MatDialog).open as any).mockImplementation(
    //         (_, { data }) =>
    //             ({
    //                 componentInstance: {
    //                     selected: [
    //                         ...(data.spaces || []),
    //                         new Space({ id: `${count++}` }),
    //                     ],
    //                 },
    //                 afterClosed: () => of({}),
    //             }) as any,
    //     );
    //     spectator.click('button[name="add-space"]');
    //     spectator.tick(1301);
    //     spectator.detectChanges();
    //     expect(spectator.queryAll('div[space]').length).toBe(1);
    //     spectator.click('button[name="add-space"]');
    //     spectator.tick(301);
    //     spectator.detectChanges();
    //     expect(spectator.queryAll('div[space]').length).toBe(2);
    //     spectator.click('button[name="edit-space"]');
    //     spectator.tick(301);
    //     spectator.detectChanges();
    //     expect(spectator.queryAll('div[space]').length).toBe(3);
    // }));

    // it('should display selected spaces', fakeAsync(() => {
    //     expect(spectator.query('div[space]')).not.toExist();
    //     spectator.component.setValue([new Space()]);
    //     spectator.tick(301);
    //     spectator.detectChanges();
    //     expect(spectator.queryAll('div[space]').length).toBe(1);
    //     spectator.component.setValue([new Space(), new Space()]);
    //     spectator.tick(301);
    //     spectator.detectChanges();
    //     expect(spectator.queryAll('div[space]').length).toBe(2);
    // }));
});
