import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { CameraImageComponent } from '../app/ui/camera-image.component';

describe('CameraImageComponent', () => {
    let spectator: Spectator<CameraImageComponent>;

    const createComponent = createComponentFactory({
        component: CameraImageComponent,
        detectChanges: false,
    });

    const show = (base_url: string, timestamp = 1) => {
        spectator.setInput({ base_url, timestamp });
        spectator.detectChanges();
    };
    const img = () => spectator.query<HTMLImageElement>('img');
    const load = () => spectator.dispatchFakeEvent(img(), 'load');
    const fail = () => spectator.dispatchFakeEvent(img(), 'error');
    const spinner = () => spectator.query('mat-spinner');
    const broken = () =>
        spectator
            .queryAll('icon')
            .find((i) => i.textContent?.includes('broken'));

    beforeEach(() => (spectator = createComponent()));

    it('appends the timestamp to the snapshot url', () => {
        show('http://host/snap.jpg', 1234);
        expect(spectator.component.source()).toBe(
            'http://host/snap.jpg?t=1234',
        );

        show('http://host/snap.jpg?size=large', 1234);
        expect(spectator.component.source()).toBe(
            'http://host/snap.jpg?size=large&t=1234',
        );
    });

    it('shows a loading placeholder until the first image loads', () => {
        show('http://host/one.jpg');
        expect(spinner()).toBeTruthy();
        expect(img()).toHaveClass('invisible');

        load();
        spectator.detectChanges();
        expect(spinner()).toBeFalsy();
        expect(img()).not.toHaveClass('invisible');
    });

    it('keeps showing the last image while the same camera refreshes', () => {
        show('http://host/one.jpg', 1);
        load();
        show('http://host/one.jpg', 2);

        expect(spinner()).toBeFalsy();
        expect(img()).not.toHaveClass('invisible');
    });

    it('shows the loading placeholder when switching to another camera', () => {
        show('http://host/one.jpg', 1);
        load();
        show('http://host/two.jpg', 2);

        expect(spinner()).toBeTruthy();
        expect(img()).toHaveClass('invisible');

        load();
        spectator.detectChanges();
        expect(spinner()).toBeFalsy();
    });

    it('shows a broken image when the image fails to load', () => {
        show('http://host/one.jpg');
        fail();
        spectator.detectChanges();

        expect(broken()).toBeTruthy();
        expect(spinner()).toBeFalsy();
        expect(img()).toHaveClass('invisible');

        // the next refresh that loads replaces it
        show('http://host/one.jpg', 2);
        load();
        spectator.detectChanges();
        expect(broken()).toBeFalsy();
        expect(img()).not.toHaveClass('invisible');
    });
});
