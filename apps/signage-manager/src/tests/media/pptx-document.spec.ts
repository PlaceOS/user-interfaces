import { MAX_DOCUMENT_PAGES } from '../../app/media/document-import.util';
import { openPptxDocument } from '../../app/media/pptx-document';

const convert = vi.fn();

vi.mock('pptx-glimpse', () => ({ convertPptxToSvg: convert }));

/** A PowerPoint file. jsdom has no `File.arrayBuffer`, so it is added here. */
function pptxFile() {
    return Object.assign(new File(['PK'], 'deck.pptx'), {
        arrayBuffer: async () => new ArrayBuffer(2),
    });
}

/** Convert the requested slides of a file that has `slide_count` slides */
function fakeDeck(slide_count: number) {
    convert.mockImplementation(
        async (_data: Uint8Array, options: { slides: number[] }) => ({
            slides: options.slides
                .filter((number) => number <= slide_count)
                .map((slideNumber) => ({
                    slideNumber,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="960" height="540"></svg>',
                })),
        }),
    );
}

describe('openPptxDocument', () => {
    // In braces, as Vitest calls a function that a hook returns
    beforeEach(() => {
        convert.mockReset();
    });

    it('counts the slides and reads their size', async () => {
        fakeDeck(23);

        const deck = await openPptxDocument(pptxFile());

        expect(deck.page_count).toBe(23);
        await expect(deck.pageSize(1)).resolves.toEqual({
            width: 960,
            height: 540,
        });
    });

    it('stops counting after the first slide over the import limit', async () => {
        fakeDeck(1000);

        const deck = await openPptxDocument(pptxFile());

        expect(deck.page_count).toBe(MAX_DOCUMENT_PAGES + 1);
    });

    it('rejects a file that does not convert, or has no slides, as invalid', async () => {
        convert.mockRejectedValue(new Error('invalid zip data'));
        await expect(openPptxDocument(pptxFile())).rejects.toMatchObject({
            reason: 'invalid',
        });

        fakeDeck(0);
        await expect(openPptxDocument(pptxFile())).rejects.toMatchObject({
            reason: 'invalid',
        });
    });
});
