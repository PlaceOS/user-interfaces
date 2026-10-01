import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { mockComponent, mockDirective } from '@placeos/common/tests';
import { MockPipe, MockProvider } from 'ng-mocks';

import {
    BindingDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { ControlStateService } from '../../app/control-state.service';
import { DeviceOutputListComponent } from '../../app/tabbed-view/output-list.component';
import { TabOutletComponent } from '../../app/tabbed-view/tab-outlet.component';
import { TVControlsComponent } from '../../app/tabbed-view/tv-controls.component';
import { CameraControlsComponent } from '../../app/ui/camera-controls.component';
import { MarkdownPipe } from '../../app/ui/markdown.pipe';
import { VoiceAssistantComponent } from '../../app/ui/voice-assistant.component';
import { VideoCallDialViewComponent } from '../../app/video-call/video-call-dial-view.component';
import { VideoCallPageComponent } from '../../app/video-call/video-call-page.component';
import { VideoCallStateService } from '../../app/video-call/video-call-state.service';

describe('TabOutletComponent', () => {
    let spectator: SpectatorRouting<TabOutletComponent>;
    const createComponent = createRoutingFactory({
        component: TabOutletComponent,
        params: { system: 'sys1', tab: 'tab1' },
        declarations: [
            mockComponent(DeviceOutputListComponent),
            mockComponent(TVControlsComponent),
            mockComponent(VideoCallDialViewComponent),
            mockComponent(CameraControlsComponent),
            mockComponent(VideoCallPageComponent),
            mockComponent(VoiceAssistantComponent),
            mockComponent(IconComponent),
            mockDirective(BindingDirective),
            MockPipe(TranslatePipe, (v) => v),
            MockPipe(MarkdownPipe, (v) => v),
        ],
        providers: [
            MockProvider(ControlStateService, {
                system_id: signal('sys1'),
                hide_present_all: signal(false),
                output_list: signal([]),
                system: signal({}),
                tabs: signal([]),
                available_inputs: signal([]),
                help_items: signal([]),
                setOutputSource: vi.fn(),
                setSelectedInput: vi.fn(),
                routeToAll: vi.fn(),
                unrouteAll: vi.fn(),
                viewHelp: vi.fn(),
            } as any),
            MockProvider(VideoCallStateService, {
                call: signal(null),
                speaker_track: signal(null),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should sync the active tab from the route', () => {
        expect(spectator.component.active_tab()).toBe('tab1');
    });

    it('should render a link per tab', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([
            { id: 'tab1', name: 'Tab 1', icon: 'tv' },
            { id: 'tab2', name: 'Tab 2', icon: 'tv' },
        ]);
        spectator.detectChanges();
        expect(spectator.queryAll('a[matRipple]')).toHaveLength(2);
        expect(spectator.query('a[matRipple]')).toContainText('Tab 1');
    });

    it('should resolve the active tab details', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([{ id: 'tab1', name: 'Tab 1', icon: 'tv' }]);
        spectator.detectChanges();
        expect(spectator.component.tab()).toEqual({
            id: 'tab1',
            name: 'Tab 1',
            icon: 'tv',
        });
    });

    it('should list the inputs available for the active tab', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([{ id: 'tab1', name: 'Tab 1', icon: 'tv' }]);
        service.available_inputs.set([
            { id: 'i1', name: 'In 1' },
            { id: 'i2', name: 'In 2' },
        ]);
        spectator.detectChanges();
        expect(spectator.component.inputs()).toHaveLength(2);
        expect(spectator.queryAll('button[btn]')).toHaveLength(2);
    });

    it('should filter inputs by the tab input type', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([
            { id: 'tab1', name: 'Tab 1', icon: 'tv', type: 'HDMI' },
        ]);
        service.available_inputs.set([
            { id: 'i1', name: 'In 1', type: 'HDMI' },
            { id: 'i2', name: 'In 2', type: 'VGA' },
        ]);
        spectator.detectChanges();
        expect(spectator.component.inputs()).toEqual([
            { id: 'i1', name: 'In 1', type: 'HDMI' },
        ]);
    });

    it('should set the output source when an input is chosen', () => {
        const service: any = spectator.inject(ControlStateService);
        spectator.component.setInput({ id: 'i9' });
        expect(service.setOutputSource).toHaveBeenCalledWith('i9');
    });

    it('should show the tv controls for a tv-channels tab', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([
            {
                id: 'tab1',
                name: 'Tab 1',
                icon: 'tv',
                controls: 'tv-channels',
                mod: 'IPTV',
            },
        ]);
        spectator.detectChanges();
        expect('tv-controls').toExist();
    });

    it('should render help content for a tab with help', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([
            { id: 'tab1', name: 'Tab 1', icon: 'tv', help: 'h1' },
        ]);
        service.help_items.set([{ id: 'h1', content: 'Some help' }]);
        spectator.detectChanges();
        expect('[content]').toExist();
    });

    it('should show the empty controls message when no help and default controls', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([{ id: 'tab1', name: 'Tab 1', icon: 'tv' }]);
        service.help_items.set([]);
        spectator.detectChanges();
        expect(spectator.query('[content]')).not.toExist();
        expect('.opacity-60 p').toExist();
    });

    it('should route the selected input to all outputs on present-to-all', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([{ id: 'tab1', name: 'Tab 1', icon: 'tv' }]);
        service.output_list.set([{ id: 'o1' }, { id: 'o2' }]);
        spectator.detectChanges();
        spectator.component.presentToAll();
        expect(service.routeToAll).toHaveBeenCalled();
    });

    it('should clear all outputs, enabled only when something is routed', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set([{ id: 'o1' }, { id: 'o2' }]);
        spectator.detectChanges();
        expect('button[clear-all]').toBeDisabled();
        service.output_list.set([{ id: 'o1', source: 'i1' }, { id: 'o2' }]);
        spectator.detectChanges();
        spectator.click('button[clear-all]');
        expect(service.unrouteAll).toHaveBeenCalled();
    });

    it('should not present to all when there is no active tab', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([]);
        spectator.detectChanges();
        spectator.component.presentToAll();
        expect(service.routeToAll).not.toHaveBeenCalled();
    });

    it('should open help via the service on view help', () => {
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([
            { id: 'tab1', name: 'Tab 1', icon: 'tv', help: 'h1' },
        ]);
        spectator.detectChanges();
        spectator.component.viewHelp();
        expect(service.viewHelp).toHaveBeenCalledWith('h1');
    });

    it('should show the present-to-all button only with multiple outputs', () => {
        const service: any = spectator.inject(ControlStateService);
        service.output_list.set([{ id: 'o1' }]);
        spectator.detectChanges();
        expect(spectator.query('button:not([btn])')).toBeNull();
        service.output_list.set([{ id: 'o1' }, { id: 'o2' }]);
        spectator.detectChanges();
        expect(spectator.query('[output-actions]')).toExist();
    });

    it('should not jump back to the driver tab on unrelated system changes', () => {
        vi.useFakeTimers();
        const service: any = spectator.inject(ControlStateService);
        const navigate = vi
            .spyOn(spectator.router, 'navigate')
            .mockResolvedValue(true);
        service.system.set({ selected_tab: 'tab1' });
        spectator.detectChanges();
        vi.advanceTimersByTime(600);
        expect(navigate).toHaveBeenCalledTimes(1);
        service.system.set({ selected_tab: 'tab1', volume: 40 });
        spectator.detectChanges();
        vi.advanceTimersByTime(600);
        expect(navigate).toHaveBeenCalledTimes(1);
        vi.useRealTimers();
    });

    it('should fall back to the first tab when no tab is selected', () => {
        spectator.setRouteParam('tab', '');
        const service: any = spectator.inject(ControlStateService);
        service.system.set({});
        service.tabs.set([
            { id: 'a', name: 'A', icon: 'tv' },
            { id: 'b', name: 'B', icon: 'tv' },
        ]);
        spectator.detectChanges();
        expect(spectator.component.active_tab()).toBe('a');
        expect(spectator.query('a[aria-current="page"]')).toContainText('A');
    });

    it('should prefer the driver selected tab over the first tab', () => {
        spectator.setRouteParam('tab', '');
        const service: any = spectator.inject(ControlStateService);
        service.tabs.set([{ id: 'a' }, { id: 'b' }]);
        service.system.set({ selected_tab: 'b' });
        expect(spectator.component.active_tab()).toBe('b');
    });

    it('should follow the driver tab on the current system', () => {
        vi.useFakeTimers();
        const service: any = spectator.inject(ControlStateService);
        const navigate = vi
            .spyOn(spectator.router, 'navigate')
            .mockResolvedValue(true);
        service.system_id.set('sys2');
        service.system.set({ selected_tab: 'tab2' });
        spectator.detectChanges();
        vi.advanceTimersByTime(600);
        expect(navigate).toHaveBeenCalledWith(
            ['/tabbed', 'sys2', 'tab2'],
            expect.anything(),
        );
        vi.useRealTimers();
    });
});
