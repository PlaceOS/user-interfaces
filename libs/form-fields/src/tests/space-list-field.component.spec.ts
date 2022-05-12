import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { MatRadioModule } from '@angular/material/radio';
import { SpaceListFieldComponent } from '../lib/space-list-field.component';
import { MockComponent, MockModule } from "ng-mocks";
import { MatDialog } from "@angular/material/dialog";
import { of } from "rxjs";
import { Space } from "@placeos/spaces";
import { randomInt } from "@placeos/common";

describe('SpaceListFieldComponent', () => {
    let spectator: Spectator<SpaceListFieldComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceListFieldComponent,
        providers: [{
            provide: MatDialog,
            useValue: { open: jest.fn(() => ({ afterClose: () => of() })) }
        }],
        declarations: [],
        imports: [
            MockModule(MatRadioModule)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should allow adding spaces', () => {
        expect(spectator.query('button[add-space]')).toExist();
        spectator.click('button[add-space]');
        expect(spectator.inject(MatDialog).open).toBeCalledTimes(1);
    });

    it('should allow removing spaces', () => {
        spectator.component.setValue([new Space()]);
        spectator.detectChanges();
        expect(spectator.query('button[remove-space]')).toExist();
        spectator.click('button[remove-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(0);
    });

    it('should handle space changes', () => {
        spectator.inject(MatDialog).open.mockImplementation(
            (_, { data }) => ({ afterClosed: () => of(data || new Space({ id: `${randomInt(1000)}` })) }) as any
        )
        spectator.click('button[add-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(1);
        spectator.click('button[add-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(2);
        spectator.click('button[edit-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(2);
    });

    it('should display selected spaces', () => {
        expect(spectator.query('div[space]')).not.toExist();
        spectator.component.setValue([new Space()]);
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(1);
        spectator.component.setValue([new Space(), new Space()]);
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(2);
    });

});
