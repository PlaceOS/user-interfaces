import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { VoiceAssistantComponent } from '../../app/ui/voice-assistant.component';
import { VoiceAssistantService } from '../../app/ui/voice-assistant.service';

describe('VoiceAssistantComponent', () => {
    let spectator: Spectator<VoiceAssistantComponent>;
    let active: ReturnType<typeof signal<boolean>>;
    let progress: ReturnType<typeof signal<any>>;
    let error: ReturnType<typeof signal<any>>;
    let enabled: ReturnType<typeof signal<boolean>>;
    let service: any;

    const createComponent = createComponentFactory({
        component: VoiceAssistantComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        active = signal(false);
        progress = signal<any>(null);
        error = signal<any>({});
        enabled = signal(true);
        service = {
            activate: vi.fn(),
            active,
            progress,
            error,
            enabled,
            setBinding: vi.fn(),
            setEnabled: vi.fn(),
        };
        spectator = createComponent({
            providers: [
                { provide: VoiceAssistantService, useValue: service },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the mic control only when available', () => {
        expect(spectator.query('icon')).toExist();
        enabled.set(false);
        spectator.detectChanges();
        expect(spectator.query('icon')).not.toExist();
    });

    it('should mark itself unavailable when speech recognition errors', () => {
        error.set({ speech_recognition: true });
        spectator.detectChanges();
        expect(spectator.component.available()).toBe(false);
        expect(spectator.query('icon')).not.toExist();
    });

    it('should show the active state with a pinging indicator', () => {
        expect(spectator.query('.animate-ping')).not.toExist();
        active.set(true);
        spectator.detectChanges();
        expect(spectator.query('.bg-success')).toExist();
        expect(spectator.query('.animate-ping')).toExist();
    });

    it('should activate the service when the button is clicked', () => {
        spectator.click('button');
        expect(service.activate).toHaveBeenCalled();
    });

    it('should show progress details when active and a progress exists', () => {
        active.set(true);
        progress.set({ function: 'call_function', message: 'Doing a thing' });
        spectator.detectChanges();
        expect(spectator.query('.bg-info')).toContainText('Doing a thing');
    });

    it('should bind to the system id supplied via input', () => {
        spectator.setInput({ system_id: 'sys-42' });
        expect(service.setBinding).toHaveBeenCalledWith('sys-42');
    });

    it('should forward the enabled input to the service', () => {
        spectator.setInput({ enabled: false });
        expect(service.setEnabled).toHaveBeenCalledWith(false);
        spectator.setInput({ enabled: true });
        expect(service.setEnabled).toHaveBeenCalledWith(true);
    });
});
