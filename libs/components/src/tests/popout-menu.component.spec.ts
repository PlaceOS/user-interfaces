import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { PopoutMenuComponent } from '../lib/popout-menu.component';
import { IconComponent } from '../lib/icon.component';

describe('PopoutMenuComponent', () => {
    let spectator: Spectator<PopoutMenuComponent>;
    const createComponent = createComponentFactory({
        component: PopoutMenuComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should hide action buttons behind root button', () => {
        spectator.setInput({
            actions: [
                { id: 'kill', content: 'delete' },
                { id: 'create', content: 'add' },
            ],
        });
        spectator.detectChanges();
        expect('button.small').toHaveLength(2);
        expect(spectator.query('button.small')).not.toHaveAttribute('style');
        spectator.click('button[name="root"]');
        spectator.detectChanges();
        expect(spectator.query('button.small')).toHaveAttribute(
            'style',
            'top: -60%;'
        );
    });

    it('should emit action button clicks', () => {
        const spy = jest.spyOn(spectator.component.action, 'emit');
        spectator.setInput({
            actions: [
                { id: 'kill', content: 'delete' },
                { id: 'create', content: 'add' },
            ],
        });
        spectator.detectChanges();
        expect('button.small').toHaveLength(2);
        const buttons = spectator.queryAll('button.small');
        spectator.click(buttons[0]);
        expect(spy).toHaveBeenCalledWith('kill');
        expect(spy).not.toHaveBeenCalledWith('create');
        spectator.click(buttons[1]);
        expect(spy).toHaveBeenCalledWith('create');
    });
});
