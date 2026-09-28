import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { VoiceAssistantComponent } from '../../app/ui/voice-assistant.component';
import { VoiceAssistantService } from '../../app/ui/voice-assistant.service';

describe('VoiceAssistantComponent', () => {
    let spectator: Spectator<VoiceAssistantComponent>;
    let state: ReturnType<typeof signal<string>>;
    let current_text: ReturnType<typeof signal<string>>;
    let levels_ready: ReturnType<typeof signal<boolean>>;
    let progress: ReturnType<typeof signal<any>>;
    let error: ReturnType<typeof signal<any>>;
    let enabled: ReturnType<typeof signal<boolean>>;
    let service: any;

    const createComponent = createComponentFactory({
        component: VoiceAssistantComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        state = signal('idle');
        current_text = signal('');
        levels_ready = signal(false);
        progress = signal<any>(null);
        error = signal<any>({});
        enabled = signal(true);
        service = {
            activate: vi.fn(),
            state,
            current_text,
            levels_ready,
            readLevels: () => new Float32Array(5).fill(0.5),
            progress,
            error,
            enabled,
            setBinding: vi.fn(),
            setEnabled: vi.fn(),
        };
        spectator = createComponent({
            providers: [{ provide: VoiceAssistantService, useValue: service }],
        });
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

    it('should show a pinging indicator and the transcript while listening', () => {
        expect(spectator.query('.animate-ping')).not.toExist();
        expect(spectator.query('[role="status"]')).not.toExist();
        state.set('listening');
        spectator.detectChanges();
        expect(spectator.query('.animate-ping')).toExist();
        expect(spectator.query('[role="status"]')).toContainText(
            'Listening...',
        );
        current_text.set('turn on the lights');
        spectator.detectChanges();
        expect(spectator.query('[role="status"]')).toContainText(
            'turn on the lights',
        );
    });

    it('should show level bars instead of the pulse when levels are ready', () => {
        state.set('listening');
        levels_ready.set(true);
        spectator.detectChanges();
        expect(spectator.queryAll('[aria-hidden] span')).toHaveLength(5);
        expect(spectator.query('.animate-ping')).not.toExist();
        state.set('processing');
        spectator.detectChanges();
        expect(spectator.query('[aria-hidden] span')).not.toExist();
    });

    it('should activate the service when the button is clicked', () => {
        spectator.click('button');
        expect(service.activate).toHaveBeenCalled();
    });

    it('should show progress details while processing', () => {
        state.set('processing');
        progress.set({ function: 'call_function', message: 'Doing a thing' });
        spectator.detectChanges();
        expect(spectator.query('[role="status"]')).toContainText(
            'Doing a thing',
        );
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
