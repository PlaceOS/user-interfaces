import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { SpaceFlowFindItemComponent } from 'apps/workplace/src/app/book/space-flow/find-item.component';

describe('SpaceFlowFindItemComponent', () => {
    let spectator: Spectator<SpaceFlowFindItemComponent>;
    const createComponent = createComponentFactory({
        component: SpaceFlowFindItemComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow user to select space', () => {
        const spy = jest.spyOn(spectator.component.bookChange, 'emit');
        expect(spy).not.toHaveBeenCalled();
        spectator.click('button[book]');
        expect(spy).toHaveBeenCalledWith(true);
    });

    it('should allow user to toggle space', () => {
        spectator.setInput({ multiple: true });
        const spy = jest.spyOn(spectator.component.bookChange, 'emit');
        expect(spy).not.toHaveBeenCalled();
        spectator.click('button[book]');
        expect(spy).toHaveBeenCalledWith(true);
        spectator.click('button[book]');
        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledWith(false);
    });

    it('should allow user to view space location', () => {
        const dialog = spectator.inject(MatDialog);
        expect(dialog.open).not.toHaveBeenCalled();
        spectator.click('button[locate]');
        expect(dialog.open).toHaveBeenCalled();
    });
});
