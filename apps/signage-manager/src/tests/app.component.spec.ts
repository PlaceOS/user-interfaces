import { TestBed } from '@angular/core/testing';
import { PlaceOS_Service, UploadsService } from '@placeos/common';
import { AiImageService } from '../app/ai/ai-image.service';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    const placeos = { init: vi.fn() };
    const uploads = { init: vi.fn() };
    const ai = {
        enabled: vi.fn(() => true),
        load: vi.fn(),
        loadRecent: vi.fn(),
    };

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
});
