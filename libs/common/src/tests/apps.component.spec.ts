import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwUpdate } from '@angular/service-worker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { of } from 'rxjs';
import { MockModule } from 'ng-mocks';

import { AppComponent } from './app.component';
import { SettingsService } from './settings.service';

import { OrganisationService } from '@user-interfaces/organisation';
import { SpacesService } from '@user-interfaces/spaces';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, MockModule(MatProgressSpinnerModule)],
            providers: [
                {
                    provide: SwUpdate,
                    useValue: {
                        checkForUpdates: jest.fn(),

                    },
                },
                { provide: SettingsService, useValue: { initialised: of(true), get: jest.fn() } },
                { provide: OrganisationService, useValue: {} },
                { provide: SpacesService, useValue: {} },
            ],
            declarations: [AppComponent],
        }).compileComponents();
    }));

    it('should create the application', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
