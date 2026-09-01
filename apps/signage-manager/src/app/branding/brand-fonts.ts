/**
 * Faces offered for signage artwork.
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

const LOADED = new Map<string, Promise<void>>();

/**
 * Make a face available to the document, and so to a canvas. Resolves either
 * way: a face that will not load falls back rather than rejecting.
 */
export function ensureBrandFont(family?: string | null): Promise<void> {
    if (!family) return Promise.resolve();
    let loading = LOADED.get(family);
    if (!loading) {
        loading = load(family);
        LOADED.set(family, loading);
    }
    return loading;
}

async function load(family: string): Promise<void> {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
        family,
    )}:wght@400;700&display=swap`;

    // the stylesheet has to be parsed before the face has a name to load by:
    // asking for it any earlier resolves against nothing, and a canvas that
    // draws on the back of that quietly uses the fallback face instead
    const parsed = new Promise<void>((resolve) => {
        link.onload = () => resolve();
        link.onerror = () => resolve();
    });
    document.head.appendChild(link);
    await parsed;

    const faces = document.fonts;
    if (!faces) return;
    try {
        await Promise.all([
            faces.load(`400 16px "${family}"`),
            faces.load(`700 16px "${family}"`),
        ]);
    } catch {
        // a face that will not load falls back, which is fine
    }
}
