import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { SettingsToggleComponent } from '../lib/settings-toggle.component';

describe('SettingsToggleComponent', () => {
    let spectator: Spectator<SettingsToggleComponent>;
    const createComponent = createComponentFactory({
        component: SettingsToggleComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display the given label', () => {
        spectator.setInput({ label: 'Enable notifications' });
        expect('button').toContainText('Enable notifications');
    });

    it('should toggle the value and notify the form control on click', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.click('button');
        expect(on_change).toHaveBeenCalledWith(true);
        expect(spectator.component.value()).toBe(true);
        spectator.click('button');
        expect(on_change).toHaveBeenCalledWith(false);
        expect(spectator.component.value()).toBe(false);
    });

    it('should update display when the form control writes a value', () => {
        expect(spectator.query('button')).not.toHaveClass('border-info');
        spectator.component.writeValue(true);
        spectator.detectChanges();
        expect(spectator.query('button')).toHaveClass('border-info');
        spectator.component.writeValue(false);
        spectator.detectChanges();
        expect(spectator.query('button')).not.toHaveClass('border-info');
    });

    it('should render a checkbox by default and a switch when toggle is set', () => {
        expect('mat-checkbox').toExist();
        expect('[toggle]').not.toExist();
        spectator.setInput({ toggle: true });
        expect('mat-checkbox').not.toExist();
        expect('[toggle]').toExist();
    });

    it('should display info inline by default and as an icon when disabled', async () => {
        expect('icon').not.toExist();
        spectator.setInput({ info: 'Some helpful details' });
        await spectator.fixture.whenStable();
        expect('.text-xs').toContainText('Some helpful details');
        expect('icon').not.toExist();
        spectator.setInput({ inline: false });
        await spectator.fixture.whenStable();
        expect('.text-xs').not.toExist();
        expect('icon').toExist();
    });
});
