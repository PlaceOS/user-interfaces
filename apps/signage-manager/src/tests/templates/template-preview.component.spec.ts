import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { SignageService } from '../../app/signage.service';
import { TemplatePreviewComponent } from '../../app/templates/template-preview.component';

describe('TemplatePreviewComponent', () => {
    const selected_template = signal<{
        id: string;
        live_template_id?: string;
        background_item_id?: string;
    } | null>(null);
    const displays = signal<
        { id: string; display_name?: string; name?: string }[]
    >([]);
    const service_stub = {
        selected_template,
        selected_template_layout_index: signal<number | null>(null),
        template_layout_draft: signal([]),
        widgets: signal([]),
        displays,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [TemplatePreviewComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(TemplatePreviewComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(TemplatePreviewComponent)
            .componentInstance;
    }

    async function render() {
        await TestBed.configureTestingModule({
            imports: [TemplatePreviewComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        }).compileComponents();
        const fixture = TestBed.createComponent(TemplatePreviewComponent);
        await fixture.whenStable();
        return fixture;
    }

    beforeEach(() => {
        selected_template.set(null);
        displays.set([]);
        TestBed.resetTestingModule();
    });

    it('selects a display before enabling the live preview', async () => {
        selected_template.set({ id: 'template-1' });
        displays.set([{ id: 'display-1', display_name: 'Lobby' }]);
        const fixture = await render();
        const component = fixture.componentInstance;
        const element = fixture.nativeElement as HTMLElement;
        const live_toggle = element.querySelector('settings-toggle');

        expect(element.querySelector('a')).toBeNull();
        expect(element.querySelector('mat-select')).not.toBeNull();
        expect(live_toggle?.getAttribute('aria-disabled')).toBe('true');
        expect(live_toggle?.hasAttribute('inert')).toBe(true);

        component.selected_display_id.set('display-1');
        await fixture.whenStable();
        expect(live_toggle?.getAttribute('aria-disabled')).toBe('false');
        expect(live_toggle?.hasAttribute('inert')).toBe(false);

        component.live_mode.set(true);
        await fixture.whenStable();
        expect(element.querySelector('iframe')).not.toBeNull();
    });

    it('enables live preview for the selected template and display', async () => {
        selected_template.set({ id: 'template 1' });
        const component = await make();
        component.selected_display_id.set('display 1');

        expect(component.live_template_id()).toBe('template 1');
        expect(component.live_preview_available()).toBe(true);
        expect(component.live_preview_url()).toBe(
            '/signage/#/template/template%201/display%201?debug=true',
        );
    });

    it('uses the approved template for a draft preview', async () => {
        selected_template.set({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const component = await make();
        expect(component.live_template_id()).toBe('template-live');
    });

    it('returns an empty live preview URL until a display is selected', async () => {
        selected_template.set({ id: 'template-1' });
        const component = await make();

        expect(component.live_preview_available()).toBe(false);
        expect(component.live_preview_url()).toBe('');
    });

    it('resolves the selected background media thumbnail', async () => {
        selected_template.set({
            id: 'template-1',
            background_item_id: 'media-1',
        });
        const component = await make();

        expect(component.background_url()).toContain(
            '/signage/media/media-1/thumbnail',
        );
    });
});
