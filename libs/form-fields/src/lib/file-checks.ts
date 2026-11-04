import { i18n, notifyError } from '@placeos/common';

/** Limits for files the user picks or drops */
export interface FileLimits {
    /** Allowed types, in the format of the input `accept` attribute */
    accept?: string;
    /** Largest file size in bytes. 0 or unset means no limit */
    max_size?: number;
}

/** Whether the file matches an `accept` list such as `image/*,.pdf` */
export function matchesAccept(file: File, accept = '') {
    const rules = accept
        .split(',')
        .map((rule) => rule.trim().toLowerCase())
        .filter((rule) => !!rule);
    if (!rules.length) return true;
    const name = file.name.toLowerCase();
    const type = (file.type || '').toLowerCase();
    return rules.some((rule) =>
        rule.startsWith('.')
            ? name.endsWith(rule)
            : rule.endsWith('/*')
              ? type.startsWith(rule.slice(0, -1))
              : type === rule,
    );
}

/**
 * Whether the file is within the limits. Shows an error when it is not.
 * Checks the type too, as browsers do not apply `accept` to dropped files.
 */
export function checkFile(file: File, { accept, max_size }: FileLimits) {
    if (!matchesAccept(file, accept)) {
        notifyError(i18n('FORM.FILE_TYPE_NOT_ALLOWED', { name: file.name }));
        return false;
    }
    if (max_size > 0 && file.size > max_size) {
        const size = `${Math.round((max_size / 1024 / 1024) * 10) / 10} MB`;
        notifyError(i18n('FORM.FILE_TOO_LARGE', { name: file.name, size }));
        return false;
    }
    return true;
}
