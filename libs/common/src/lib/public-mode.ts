declare global {
    interface Window {
        PLACEOS_PUBLIC_MODE?: boolean;
    }
}

export function setPublicMode(state: boolean) {
    if (typeof window === 'undefined') return;
    window.PLACEOS_PUBLIC_MODE = !!state;
}

export function isPublicMode() {
    if (typeof window === 'undefined') return false;
    const flag = window.PLACEOS_PUBLIC_MODE;
    return !!flag;
}
