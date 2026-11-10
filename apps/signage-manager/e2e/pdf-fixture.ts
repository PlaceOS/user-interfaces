/** A page of a test PDF: a filled square in the middle of an empty page */
export interface PdfFixturePage {
    width: number;
    height: number;
    /** Fill of the square, as red, green and blue from 0 to 1 */
    colour: [number, number, number];
    label: string;
}

/**
 * Build a small PDF by hand, so the test needs no PDF library. Everything
 * outside the square is unpainted, which renders transparent, and the label
 * uses Helvetica, a standard font that pdf.js loads from its font data.
 */
export function buildPdf(pages: PdfFixturePage[]) {
    const objects: string[] = [];
    const page_ids = pages.map((_, index) => 4 + index * 2);
    objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
    objects[2] = `<< /Type /Pages /Kids [${page_ids
        .map((id) => `${id} 0 R`)
        .join(' ')}] /Count ${pages.length} >>`;
    objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
    pages.forEach((page, index) => {
        const id = page_ids[index];
        const side = Math.min(page.width, page.height) / 2;
        const x = (page.width - side) / 2;
        const y = (page.height - side) / 2;
        const content = [
            `${page.colour.join(' ')} rg`,
            `${x} ${y} ${side} ${side} re f`,
            `BT /F1 24 Tf 20 20 Td (${page.label}) Tj ET`,
        ].join('\n');
        objects[id] =
            `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${page.width} ${page.height}] ` +
            `/Resources << /Font << /F1 3 0 R >> >> /Contents ${id + 1} 0 R >>`;
        objects[id + 1] =
            `<< /Length ${content.length} >>\nstream\n${content}\nendstream`;
    });

    let body = '%PDF-1.7\n';
    const offsets: number[] = [];
    for (let id = 1; id < objects.length; id++) {
        offsets[id] = body.length;
        body += `${id} 0 obj\n${objects[id]}\nendobj\n`;
    }
    const xref_offset = body.length;
    body += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
    for (let id = 1; id < objects.length; id++) {
        body += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
    }
    body +=
        `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\n` +
        `startxref\n${xref_offset}\n%%EOF\n`;
    return Buffer.from(body, 'latin1');
}
