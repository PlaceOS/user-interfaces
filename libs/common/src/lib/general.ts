import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '../../../components/src/lib/confirm-modal.component';
import { HashMap } from './types';

/** Available console output streams. */
export type ConsoleStream = 'debug' | 'warn' | 'log' | 'error';

declare global {
    interface Window {
        debug: boolean;
        jest: any;
    }
}

let _app_name = 'APP';

export function setAppName(name: string) {
    _app_name = name;
}

/**
 * Log data to the browser console
 * @param type Type of message
 * @param msg Message body
 * @param args array of argments to log to the console
 * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
 * @param force Whether to force message to be emitted when debug is disabled
 */
export function log(
    type: string,
    msg: string,
    args?: any,
    stream: ConsoleStream = 'debug',
    force: boolean = false,
    app_name: string = _app_name
) {
    if (window.jest) return;
    if (window.debug || force) {
        const colors: string[] = [
            'color: #E91E63',
            'color: #3F51B5',
            'color: default',
        ];
        if (args) {
            console[stream](
                `%c[${app_name}]%c[${type}] %c${msg}`,
                ...colors,
                args
            );
        } else {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
        }
    }
}

/**
 * Get item from the nested object
 * @param keys List of sub-keys to search for
 * @param map Object to search
 */
export function getItemWithKeys(keys: string[], map: HashMap) {
    const key = keys[0];
    if (map && key in map) {
        return keys.length > 1
            ? getItemWithKeys(keys.slice(1), map[key] || {})
            : map[key];
    }
    return null;
}

/**
 * Remove duplicates from the given array
 * @param array List of items to remove duplicates from
 * @param key Key on array objects to compare for uniqueness
 */
export function unique<T = any>(array: T[] = [], key: string = ''): T[] {
    const keys = [];
    return array.filter((el) => {
        const id = key ? el[key] : el;
        const exists = keys.includes(id);
        if (!exists) keys.push(id);
        return !exists;
    });
}

/**
 * Generate a random number
 * @param ceil Biggest value to generate not inclusive
 * @param floor Smallest value to generate. Defaults to 0
 */
export function randomInt(ceil: number, floor: number = 0) {
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}

/**
 * Pad string to the given length
 * @param str Base string
 * @param length Length to pad the string
 */
export function padString(str: string | number, length: number = 5) {
    str = `${str}`;
    while (str.length < length) str = `0${str}`;
    return str;
}

/**
 * Generate a random string
 * @param length Length of the string
 * @param chars Available characters to use in the string
 */
export function randomString(
    length: number,
    chars: string = 'abcdefghijklmnopqrstwvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
) {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars[randomInt(chars.length)];
    }
    return str;
}

export interface ConfirmRepsonse {
    reason: 'done' | '' | null;
    loading: (_: string) => void;
    close: () => void;
}

export async function openConfirmModal(
    data: ConfirmModalData,
    dialog: MatDialog
): Promise<ConfirmRepsonse> {
    const ref = dialog.open<ConfirmModalComponent, ConfirmModalData>(
        ConfirmModalComponent,
        {
            ...CONFIRM_METADATA,
            data,
        }
    );
    return {
        ...(await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ])),
        loading: (s) => (ref.componentInstance.loading = s),
        close: () => ref.close(),
    };
}

/**
 * Parse raw CSV data into a JSON object
 * @param csv CSV data to parse
 */
export function csvToJson(csv: string, delimiter: string = ','): HashMap[] {
    const objPattern = new RegExp(
        '(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^\\,\\r\\n]*))',
        'gi'
    );
    let arrMatches = null;
    const arrData = [[]];
    while ((arrMatches = objPattern.exec(csv))) {
        if (arrMatches[1].length && arrMatches[1] !== ',') arrData.push([]);
        arrData[arrData.length - 1].push(
            arrMatches[2]
                ? arrMatches[2]?.replace(new RegExp('""', 'g'), '"')
                : arrMatches[3]
        );
    }
    const headers: string[] = arrData.splice(0, 1)[0];
    const elements = arrData.map((row) => {
        const element = {};
        for (let i = 0; i < row.length; i++) {
            const key = (headers[i] || '').split(' ').join('_').toLowerCase();
            try {
                element[key] = JSON.parse(row[i]?.replace('|', ','));
            } catch (e) {
                element[key] = row[i] || '';
            }
            if (element[key] === 'TRUE' || element[key] === 'FALSE')
                element[key] = element[key] === 'TRUE';
        }
        return element;
    });
    return elements;
}

export function loadTextFileFromInputEvent(event: InputEvent) {
    return new Promise<string>((resolve, reject) => {
        /* istanbul ignore else */
        if (event.target) {
            const element = event.target as HTMLInputElement;
            const file = element.files[0];
            /* istanbul ignore else */
            if (file) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.addEventListener('load', (evt) => {
                    resolve((evt.srcElement as any).result);
                    element.value = '';
                });
                reader.addEventListener('error', (_) => {
                    this.loading = '';
                    reject(['Error loading file', _]);
                });
            }
        }
    });
}

/**
 * Convert javascript array to CSV string
 * @param json Javascript array to convert
 */
export function jsonToCsv(json: HashMap[], seperator = ',') {
    if (json instanceof Array && json.length > 0) {
        const keys = Object.keys(json[0]);
        const valid_keys = keys.filter((key) => key in json[0]);
        return `${valid_keys.join(seperator)}\n${json
            .map((item) =>
                valid_keys
                    .map((key) =>
                        (JSON.stringify(item[key]) || '')?.replace(',', '|')
                    )
                    .join(seperator)
            )
            .join('\n')}`;
    }
    return '';
}

/**
 * Downloads a file to the users computer with the given filename and contents
 * @param filename Name of the file to download
 * @param contents Contents of the file to download
 */
export function downloadFile(filename: string, contents: string) {
    const element = document.createElement('a');
    element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(contents)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export function parseJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
}

/* istanbul ignore next */
/**
 * Flatten nested array
 * @param an_array Array to flatten
 */
export function flatten<T = any>(an_array: any[]): T[] {
    const stack = [...an_array];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}

/**
 * Check whether two time periods intersect with each other
 * @param start1 Unix epoch in ms of the first period's start time
 * @param end1 Unix epoch in ms of the first period's end time
 * @param start2 Unix epoch in ms of the second period's start time
 * @param end2 Unix epoch in ms of the second period's end time
 */
export function timePeriodsIntersect(
    s1: number,
    e1: number,
    s2: number,
    e2: number
) {
    return (
        (s1 >= s2 && s1 < e2) ||
        (s2 >= s1 && s2 < e1) || // Check start time
        (e1 > s2 && e1 <= e2) ||
        (e2 > s1 && e2 <= e1) // Check end time
    );
}

const seed = xmur3('PlaceOS');
const rand = sfc32(0x9e3779b9, 0x243f6a88, 0xb7e15162, seed());

export function predictableRandomInt(ceil: number = 100, floor: number = 0) {
    return Math.floor(rand() * (ceil - floor)) + floor;
}

// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++)
        (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)),
            (h = (h << 13) | (h >>> 19));
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}

function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        let t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
}

/** Get time format string for locale */
export function timeFormatString(): string {
    return is24HourTime() ? 'HH:mm' : 'h:mm a';
}

/** Whether locale string is displayed in 24 hour time */
export function is24HourTime(): boolean {
    const date = new Date();
    const localeString = date
        .toLocaleTimeString(
            document.querySelector('html').getAttribute('lang') ||
                navigator.language
        )
        .toLowerCase();
    return localeString.indexOf('am') < 0 && localeString.indexOf('pm') < 0;
}

export function getInvalidFields(form: FormGroup, prefix: string = '') {
    let invalid = [];
    for (const key in form.controls) {
        if (form.controls[key] instanceof FormGroup) {
            invalid = [
                ...invalid,
                ...getInvalidFields(form.controls[key] as FormGroup, `${key}.`),
            ];
        } else if (!form.controls[key].valid) {
            invalid.push(`${prefix}${key}`);
        }
    }
    return invalid;
}

export function removeEmptyFields(obj: Record<string, any>) {
    for (const key in obj) {
        if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
            delete obj[key];
        }
    }
}

export function capitalizeFirstLetter(word: string): string {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
}

export function cleanArray(
    array: any[],
    removal_items: any[] = [undefined, null, '']
) {
    return array.filter((_) => !removal_items.includes(_));
}

export function isMobileSafari() {
    return (
        [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod',
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
}

export function isNestedFrame() {
    return window.location !== window.parent.location;
}

// Calculate the distance between geographical cooridinates
export function calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number {
    const radius = 6371; // Earth's radius in kilometers

    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
            Math.sin(dLon / 2) *
            Math.cos(lat1) *
            Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radius * c;
}

function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

//////////////////////////////////////////
//////   Colour Conversion Utils   ///////
//////////////////////////////////////////

export function hexToRgb(hex: string): RGB {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

export type RGB = [number, number, number];

export function interpolateColors(rgb1: RGB, rgb2: RGB, fraction: number): RGB {
    let r = rgb1[0] + (rgb2[0] - rgb1[0]) * fraction;
    let g = rgb1[1] + (rgb2[1] - rgb1[1]) * fraction;
    let b = rgb1[2] + (rgb2[2] - rgb1[2]) * fraction;
    return [Math.round(r), Math.round(g), Math.round(b)];
}

export function rgbToHex(r: number, g: number, b: number): string {
    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function shiftColorTowards(
    hex1: string,
    hex2: string,
    fraction: number
) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const resultRgb = interpolateColors(rgb1, rgb2, fraction);
    return rgbToHex(resultRgb[0], resultRgb[1], resultRgb[2]);
}
