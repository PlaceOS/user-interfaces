/** Escape text for use in HTML content or a quoted attribute */
export function escapeHtml(text: string) {
    return `${text ?? ''}`
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
