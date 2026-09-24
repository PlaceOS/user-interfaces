import { TestBed } from '@angular/core/testing';
import { PlaceOS_Service, UploadsService } from '@placeos/common';
import { AiImageService } from '../app/ai/ai-image.service';
import { AppComponent } from '../app/app.component';
import { CommandPaletteService } from '../app/shared/command-palette.service';

describe('AppComponent', () => {
    const placeos = { init: vi.fn() };
    const uploads = { init: vi.fn() };
    const ai = {
        enabled: vi.fn(() => true),
        load: vi.fn(),
        loadRecent: vi.fn(),
    };
    const palette = { toggle: vi.fn() };

    beforeEach(async () => {
        vi.clearAllMocks();
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
});
