/**
 * Faces offered for signage artwork.
 *
 * Loaded from Google Fonts on demand rather than bundled: the app already
 * pulls Roboto from there, the list needs to be long enough to feel like a
 * choice, and a canvas can only draw a face the document has loaded.
 */
export const BRAND_FONTS = [
    { family: '', label: 'SIGNAGE_MANAGER.BRAND_FONT_SYSTEM' },
    { family: 'Inter', label: 'Inter' },
    { family: 'Roboto', label: 'Roboto' },
    { family: 'Open Sans', label: 'Open Sans' },
    { family: 'Lato', label: 'Lato' },
    { family: 'Montserrat', label: 'Montserrat' },
    { family: 'Poppins', label: 'Poppins' },
    { family: 'Work Sans', label: 'Work Sans' },
    { family: 'DM Sans', label: 'DM Sans' },
    { family: 'Source Sans 3', label: 'Source Sans 3' },
    { family: 'Space Grotesk', label: 'Space Grotesk' },
    { family: 'Bricolage Grotesque', label: 'Bricolage Grotesque' },
    { family: 'Playfair Display', label: 'Playfair Display' },
];

const LOADED = new Set<string>();

/**
 * Make a face available to the document, and so to a canvas.
 *
 * Resolves either way: a face that will not load is a poster in the fallback
 * face, which is better than a preview that never renders.
 */
export async function ensureBrandFont(family?: string | null): Promise<void> {
    if (!family) return;
    if (!LOADED.has(family)) {
        LOADED.add(family);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
            family,
        )}:wght@400;700&display=swap`;
        document.head.appendChild(link);
    }
    try {
        await Promise.all([
            (document as any).fonts?.load(`400 16px "${family}"`),
            (document as any).fonts?.load(`700 16px "${family}"`),
        ]);
    } catch {
        // a face that will not load falls back, which is fine
    }
}
