import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    SectionTab,
    SectionTabsComponent,
} from '../../app/shared/section-tabs.component';

type Tab = 'users' | 'zones' | 'media';

@Component({
    imports: [SectionTabsComponent],
    template: `
        <section-tabs id_prefix="test" [tabs]="tabs()" [(active)]="active" />
    `,
})
class HostComponent {
    public readonly active = signal<Tab>('users');
    public readonly tabs = signal<SectionTab<Tab>[]>([
        { id: 'users', label: 'Users' },
        { id: 'zones', label: 'Zones', count: 3, count_loading: true },
        { id: 'media', label: 'Media', count: 2 },
    ]);
}

describe('SectionTabsComponent', () => {
    async function make() {
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const tab = (id: Tab) =>
            element.querySelector<HTMLButtonElement>(`#test-${id}-tab`);
        const press = async (key: string) => {
            element
                .querySelector('section-tabs')
                ?.dispatchEvent(
                    new KeyboardEvent('keydown', { key, bubbles: true }),
                );
            await fixture.whenStable();
        };
        return { fixture, host: fixture.componentInstance, tab, press };
    }

    it('links each tab to its panel and keeps only the active tab in the tab order', async () => {
        const { tab } = await make();

        expect(tab('users')?.getAttribute('aria-controls')).toBe(
            'test-users-panel',
        );
        expect(tab('users')?.getAttribute('aria-selected')).toBe('true');
        expect(tab('users')?.getAttribute('tabindex')).toBe('0');
        expect(tab('zones')?.getAttribute('tabindex')).toBe('-1');
    });

    it('shows a count badge only for tabs with a count', async () => {
        const { tab } = await make();

        expect(tab('users')?.querySelector('span')).toBeNull();
        expect(tab('zones')?.querySelector('span')?.textContent?.trim()).toBe(
            '?',
        );
        expect(
            tab('zones')?.querySelector('span')?.getAttribute('aria-busy'),
        ).toBe('true');
        expect(tab('media')?.querySelector('span')?.textContent?.trim()).toBe(
            '2',
        );
    });

    it('selects a tab on click', async () => {
        const { fixture, host, tab } = await make();

        tab('media')?.click();
        await fixture.whenStable();

        expect(host.active()).toBe('media');
        expect(tab('media')?.getAttribute('aria-selected')).toBe('true');
    });

    it('moves and focuses tabs with the arrow, Home and End keys', async () => {
        const { host, tab, press } = await make();

        await press('ArrowRight');
        expect(host.active()).toBe('zones');
        expect(document.activeElement).toBe(tab('zones'));
        await press('End');
        expect(host.active()).toBe('media');
        await press('ArrowRight');
        expect(host.active()).toBe('users');
        await press('ArrowLeft');
        expect(host.active()).toBe('media');
        await press('Home');
        expect(host.active()).toBe('users');
        await press('a');
        expect(host.active()).toBe('users');
    });
});
