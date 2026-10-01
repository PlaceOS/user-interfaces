import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PlaceOS_Service, UploadsService } from '@placeos/common';
import { AiImageService } from '../app/ai/ai-image.service';
import { AppComponent } from '../app/app.component';
import { CommandPaletteService } from '../app/shared/command-palette.service';
import { SignageContextService } from '../app/signage-context.service';

describe('AppComponent', () => {
    const placeos = { init: vi.fn() };
    const uploads = { init: vi.fn() };
    const ai = {
        enabled: vi.fn(() => true),
        load: vi.fn(),
        loadRecent: vi.fn(),
    };
    const palette = { toggle: vi.fn() };
    const context = {
        signage_groups_failed: signal(false),
        features_ready: signal(true),
        templates_enabled: signal(true),
        reloadSignageGroups: vi.fn(),
    };
    const router = { url: '/media', navigate: vi.fn() };

    beforeEach(async () => {
        vi.clearAllMocks();
        context.features_ready.set(true);
        context.templates_enabled.set(true);
        router.url = '/media';
        placeos.init.mockResolvedValue(undefined);
        ai.load.mockResolvedValue(undefined);
        ai.loadRecent.mockResolvedValue([]);
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                { provide: PlaceOS_Service, useValue: placeos },
                { provide: UploadsService, useValue: uploads },
                { provide: AiImageService, useValue: ai },
                { provide: CommandPaletteService, useValue: palette },
                { provide: SignageContextService, useValue: context },
                { provide: Router, useValue: router },
            ],
        })
            .overrideComponent(AppComponent, { set: { template: '' } })
            .compileComponents();
    });

    it('initialises PlaceOS then the uploads service on init', async () => {
        const component =
            TestBed.createComponent(AppComponent).componentInstance;

        await component.ngOnInit();

        expect(placeos.init).toHaveBeenCalledTimes(1);
        expect(uploads.init).toHaveBeenCalledTimes(1);
        expect(ai.load).toHaveBeenCalledTimes(1);
        expect(ai.loadRecent).toHaveBeenCalledTimes(1);
    });

    it('waits for PlaceOS init to resolve before starting uploads', async () => {
        const order: string[] = [];
        placeos.init.mockImplementation(async () => {
            order.push('placeos');
        });
        uploads.init.mockImplementation(() => {
            order.push('uploads');
        });
        const component =
            TestBed.createComponent(AppComponent).componentInstance;

        await component.ngOnInit();

        expect(order).toEqual(['placeos', 'uploads']);
    });

    it('opens the command palette on Cmd+K or Ctrl+K only', () => {
        const component =
            TestBed.createComponent(AppComponent).componentInstance;
        const press = (init: KeyboardEventInit) => {
            const event = new KeyboardEvent('keydown', {
                ...init,
                cancelable: true,
            });
            component.onKeydown(event);
            return event;
        };

        expect(press({ key: 'k', metaKey: true }).defaultPrevented).toBe(true);
        press({ key: 'K', ctrlKey: true });
        press({ key: 'k' });
        press({ key: 'k', ctrlKey: true, shiftKey: true });
        press({ key: 'j', metaKey: true });

        expect(palette.toggle).toHaveBeenCalledTimes(2);
    });

    it('leaves the templates section when the group turns templates off', () => {
        router.url = '/templates/template-1';
        TestBed.createComponent(AppComponent);
        TestBed.tick();
        expect(router.navigate).not.toHaveBeenCalled();

        context.templates_enabled.set(false);
        TestBed.tick();

        expect(router.navigate).toHaveBeenCalledWith(['/media']);
    });

    it('stays on other pages when templates turn off', () => {
        TestBed.createComponent(AppComponent);
        context.templates_enabled.set(false);
        TestBed.tick();

        expect(router.navigate).not.toHaveBeenCalled();
    });
});
