import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LocaleService } from '@placeos/common';
import { GroupBreadcrumbsComponent } from '../../app/shared/group-breadcrumbs.component';
import { SectionHeaderComponent } from '../../app/shared/section-header.component';

describe('SectionHeaderComponent', () => {
    // Plural 1 picks the ITEM_COUNT_1 form, as the locale service does
    const locale = {
        get: (key: string, args: { count?: number }, plural?: number) =>
            key === 'COMMON.ITEM_COUNT'
                ? `${args.count} ${plural === 1 ? 'item' : 'items'}`
                : key,
    };

    async function make(count: number | null, can_add = false) {
        await TestBed.configureTestingModule({
            imports: [SectionHeaderComponent],
            providers: [{ provide: LocaleService, useValue: locale }],
        })
            .overrideComponent(SectionHeaderComponent, {
                remove: { imports: [GroupBreadcrumbsComponent] },
                add: { schemas: [NO_ERRORS_SCHEMA] },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(SectionHeaderComponent);
        fixture.componentRef.setInput('heading', 'TITLE');
        fixture.componentRef.setInput('count', count);
        fixture.componentRef.setInput('can_add', can_add);
        fixture.componentRef.setInput('add_label', 'ADD_LABEL');
        fixture.componentRef.setInput('add_tooltip', 'ADD_TOOLTIP');
        await fixture.whenStable();
        return fixture;
    }

    it('passes the count as the plural so one item reads "1 item"', async () => {
        const fixture = await make(1);
        expect(fixture.nativeElement.textContent).toContain('1 item');
        expect(fixture.nativeElement.textContent).not.toContain('1 items');
    });

    it('hides the count while it is not known', async () => {
        const fixture = await make(null);
        expect(fixture.nativeElement.textContent).not.toContain('item');
    });

    it('shows a labelled add button only when adding is allowed', async () => {
        const hidden = await make(2);
        expect(hidden.nativeElement.querySelector('button')).toBeNull();
        TestBed.resetTestingModule();

        const fixture = await make(2, true);
        const add = vi.fn();
        fixture.componentInstance.add.subscribe(add);
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.getAttribute('aria-label')).toBe('ADD_LABEL');
        button.click();
        expect(add).toHaveBeenCalledOnce();
    });
});
