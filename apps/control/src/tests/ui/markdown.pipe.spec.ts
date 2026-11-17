import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { renderMarkdown } from '../../app/ui/markdown.pipe';

describe('renderMarkdown', () => {
    let render: (value?: string | null) => string;

    beforeEach(() => {
        const sanitizer = TestBed.inject(DomSanitizer);
        render = (value) => renderMarkdown(value, sanitizer);
    });

    it('should return an empty string for empty input', () => {
        expect(render('')).toBe('');
        expect(render(null)).toBe('');
        expect(render(undefined)).toBe('');
    });

    it('should render markdown as HTML', () => {
        expect(render('# Hello')).toContain('<h1');
        expect(render('**bold**')).toContain('<strong>bold</strong>');
        expect(render('[link](https://example.com)')).toContain(
            '<a href="https://example.com"',
        );
    });

    it('should keep layout styles in HTML content', () => {
        const output = render(
            '<div style="width:50%;float:left;display:inline-block;">' +
                '<img src="a.png" style="max-width:360px; max-height:270px" />' +
                '</div>',
        );
        expect(output).toContain(
            'style="width: 50%; float: left; display: inline-block"',
        );
        expect(output).toContain('style="max-width: 360px; max-height: 270px"');
        expect(output).not.toContain('md-style-');
    });

    it('should remove styles that can move content out of its box', () => {
        const output = render(
            '<div class="note" style="position:fixed; inset:0; z-index:99; ' +
                'background-image:url(x.png); color:red">Text</div>',
        );
        expect(output).toContain('<div class="note" style="color: red">');
    });

    it('should still remove scripts and event handlers', () => {
        const output = render(
            '<img src="x.png" style="width:10px" onerror="alert(1)">' +
                '<script>alert(1)</script>',
        );
        expect(output).not.toContain('onerror');
        expect(output).not.toContain('<script');
        expect(output).toContain('style="width: 10px"');
    });
});
