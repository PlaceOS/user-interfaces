import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import {
    SpectatorRouting,
    createRoutingFactory,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { LocaleService } from 'libs/common/src/lib/locale.service';
import { FullscreenModalShellComponent } from '../lib/fullscreen-modal-shell.component';

describe('FullscreenModalShellComponent', () => {
    let spectator: SpectatorRouting<FullscreenModalShellComponent>;
    const createComponent = createRoutingFactory({
        component: FullscreenModalShellComponent,
        providers: [
            MockProvider(LocaleService),
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the heading', () => {
        spectator.setInput({ heading: 'Test Modal' });
        spectator.detectChanges();
        expect('header h2').toContainText('Test Modal');
    });

    it('should register the modal scroll container for overlay repositioning', () => {
        expect(
            spectator.fixture.debugElement.query(By.directive(CdkScrollable)),
        ).toBeTruthy();
    });

    it('should show a loading state instead of content and actions', () => {
        expect('mat-spinner').not.toExist();
        expect('footer button').toExist();
        expect('header button').toExist();
        spectator.setInput({ loading: 'Saving changes...' });
        spectator.detectChanges();
        expect('mat-spinner').toExist();
        expect('main p').toContainText('Saving changes...');
        expect('footer button').not.toExist();
        expect('header button').not.toExist();
    });

    it('should emit confirm when the confirm button is pressed', () => {
        const spy = vi.spyOn(spectator.component.confirm, 'emit');
        spectator.setInput({ confirm_text: 'Apply' });
        spectator.detectChanges();
        expect('footer button').toContainText('Apply');
        spectator.click('footer button');
        expect(spy).toHaveBeenCalled();
    });

    it('should show the confirm hotkey when configured', () => {
        expect('footer kbd').not.toExist();
        spectator.setInput({ confirm_hotkey: 'S' });
        spectator.detectChanges();
        expect('footer kbd').toContainText('S');
    });

    it('should allow disabling and hiding the confirm button', () => {
        spectator.setInput({ confirm_disabled: true });
        spectator.detectChanges();
        expect(spectator.query('footer button')).toBeDisabled();
        spectator.setInput({ hide_confirm: true });
        spectator.detectChanges();
        expect('footer button').not.toExist();
    });

    it('should use a router link for closing when a route is given', () => {
        expect('header button').toExist();
        expect('header a').not.toExist();
        spectator.setInput({ close: ['/somewhere'] });
        spectator.detectChanges();
        expect('header button').not.toExist();
        expect('header a').toExist();
        spectator.setInput({ close: [], hide_close: true });
        spectator.detectChanges();
        expect('header button').not.toExist();
        expect('header a').not.toExist();
    });
});
