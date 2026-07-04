import { MarkdownPipe } from '../../app/ui/markdown.pipe';

describe('MarkdownPipe', () => {
    let pipe: MarkdownPipe;

    beforeEach(() => (pipe = new MarkdownPipe()));

    it('should return an empty string for empty input', () => {
        expect(pipe.transform('')).toBe('');
        expect(pipe.transform(null as any)).toBe('');
        expect(pipe.transform(undefined as any)).toBe('');
    });

    it('should render headings as HTML', () => {
        const output = pipe.transform('# Hello');
        expect(output).toContain('<h1');
        expect(output).toContain('Hello');
    });

    it('should render bold and emphasis markup', () => {
        expect(pipe.transform('**bold**')).toContain('<strong>bold</strong>');
        expect(pipe.transform('_em_')).toContain('<em>em</em>');
    });

    it('should render links', () => {
        const output = pipe.transform('[link](https://example.com)');
        expect(output).toContain('<a href="https://example.com"');
        expect(output).toContain('link');
    });
});
