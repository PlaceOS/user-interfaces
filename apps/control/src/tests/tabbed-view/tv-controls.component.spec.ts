import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { mockDirective } from '@placeos/common/tests';
import { getModule } from '@placeos/ts-client';

import {
    AuthenticatedImageDirective,
    BindingDirective,
} from '@placeos/components';
import { MockModule } from 'ng-mocks';
import { MatRippleModule } from '@angular/material/core';
import { ControlStateService } from '../../app/control-state.service';
import { TVControlsComponent } from '../../app/tabbed-view/tv-controls.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        getModule: jest.fn(),
    };
});

describe('TVControlsComponent', () => {
    let spectator: Spectator<TVControlsComponent>;
    const createComponent = createComponentFactory({
        component: TVControlsComponent,
        declarations: [
            mockDirective(BindingDirective),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: { id: 'sys-1' },
            },
        ],
        imports: [MockModule(MatRippleModule)],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the active system id', () => {
        expect(spectator.component.system_id).toBe('sys-1');
    });

    it('should render a button per channel', () => {
        spectator.component.channel_list = [
            { name: 'BBC', channel: 'bbc' },
            { name: 'ABC', channel: 'abc' },
        ];
        spectator.detectChanges();
        expect(spectator.queryAll('button')).toHaveLength(2);
        expect(spectator.query('button')).toContainText('BBC');
    });

    it('should highlight the current channel', () => {
        spectator.component.channel_list = [
            { name: 'BBC', channel: 'bbc' },
            { name: 'ABC', channel: 'abc' },
        ];
        spectator.component.channel_url = 'abc';
        spectator.detectChanges();
        const buttons = spectator.queryAll('button');
        expect(buttons[0]).not.toHaveClass('bg-primary');
        expect(buttons[1]).toHaveClass('bg-primary');
    });

    it('should execute the channel command on the mod when clicked', () => {
        const execute = jest.fn();
        (getModule as jest.Mock).mockReturnValue({ execute });
        spectator.setInput('mod', 'IPTV');
        spectator.component.channel_list = [{ name: 'BBC', channel: 'bbc' }];
        spectator.detectChanges();
        spectator.click('button');
        expect(getModule).toHaveBeenCalledWith('sys-1', 'IPTV');
        expect(execute).toHaveBeenCalledWith('channel', ['bbc']);
    });
});
