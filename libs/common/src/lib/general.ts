import { FormGroup } from '@angular/forms';
import {
    addDays,
    addHours,
    addMinutes,
    differenceInMinutes,
    formatDuration as duration,
    isSameDay,
    roundToNearestMinutes,
    set,
    startOfDay,
} from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import {
    first,
    lastValueFrom,
    map,
    Observable,
    Subscription,
    take,
} from 'rxjs';
import { i18n, i18nAvailable } from './locale.service';
import { notifyWarn } from './notifications';
import { endOfDayInTimezone, startOfDayInTimezone } from './timezone-helpers';
import { HashMap } from './types';

/**
 * Flag set by date/time field components to indicate the next `date`
 * value change was triggered by the user (not a programmatic patch).
 * Read and cleared by {@link setupFormTimeSync} to decide whether to
 * show the bookable-hours warning.
 */
let _user_date_change = false;
let _user_date_change_timeout: ReturnType<typeof setTimeout>;

/** Mark the next date value change as user-initiated. */
export function markUserDateChange(): void {
    _user_date_change = true;
    if (_user_date_change_timeout) clearTimeout(_user_date_change_timeout);
    _user_date_change_timeout = setTimeout(
        () => (_user_date_change = false),
        300,
    );
}

/** Available console output streams. */
export type ConsoleStream = 'debug' | 'warn' | 'log' | 'error' | 'info';

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
    force = false,
    app_name: string = _app_name,
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
                args,
            );
        } else {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
        }
    }
}

/**
 * Pad the start of a string or number with given character
 * @param value String or number to pad
 * @param length Length of the final string
 * @param character Character to pad output string with. Defaults to `0`.
 */
export function padLength(
    value: number | string,
    length = 2,
    character = '0',
): string {
    let str = `${value}`;
    while (str.length < length) str = `${character}${str}`;
    return str;
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
export function unique<T = any>(array: T[] = [], key = ''): T[] {
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
export function randomInt(ceil: number, floor = 0) {
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}

/**
 * Pad string to the given length
 * @param str Base string
 * @param length Length to pad the string
 */
export function padString(str: string | number, length = 5) {
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
    chars = 'abcdefghijklmnopqrstwvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
) {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars[randomInt(chars.length)];
    }
    return str;
}

/**
 * Parse raw CSV data into a JSON object
 * @param csv CSV data to parse
 */
export function csvToJson(csv: string, delimiter = ','): HashMap[] {
    const escaped_delimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const objPattern = new RegExp(
        `(${escaped_delimiter}|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^${escaped_delimiter}\\r\\n]*))`,
        'gi',
    );
    let arrMatches = null;
    const arrData = [[]];
    while ((arrMatches = objPattern.exec(csv))) {
        if (arrMatches[1].length && arrMatches[1] !== delimiter)
            arrData.push([]);
        arrData[arrData.length - 1].push(
            arrMatches[2]
                ? arrMatches[2]?.replace(new RegExp('""', 'g'), '"')
                : arrMatches[3],
        );
    }
    const headers: string[] = (arrData.splice(0, 1)[0] || []).map(
        (header, index) => {
            const value = header || '';
            return index === 0 ? value.replace(/^\uFEFF/, '') : value;
        },
    );
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
        const map_cell = (value: any) => {
            if (value === null || value === undefined) return '';
            if (typeof value === 'object') return JSON.stringify(value);
            return `${value}`;
        };
        const escape_cell = (value: string) => {
            const escaped_value = value.replace(/"/g, '""');
            const should_wrap =
                escaped_value.includes(seperator) ||
                escaped_value.includes('"') ||
                escaped_value.includes('\n') ||
                escaped_value.includes('\r');
            return should_wrap ? `"${escaped_value}"` : escaped_value;
        };
        const header_row = valid_keys
            .map((key) => escape_cell(key))
            .join(seperator);
        const rows = json.map((item) =>
            valid_keys
                .map((key) => escape_cell(map_cell(item[key])))
                .join(seperator),
        );
        return [header_row, ...rows].join('\r\n');
    }
    return '';
}

function textFileType(filename: string) {
    if (filename.endsWith('.csv')) return 'text/csv';
    if (filename.endsWith('.tsv')) return 'text/tab-separated-values';
    return 'text/plain';
}

/**
 * Downloads a file to the users computer with the given filename and contents
 * @param filename Name of the file to download
 * @param contents Contents of the file to download
 */
export function downloadFile(filename: string, contents: string) {
    const lower_filename = filename.toLowerCase();
    const file_type = textFileType(lower_filename);
    const should_prefix_bom =
        lower_filename.endsWith('.csv') || lower_filename.endsWith('.tsv');
    const data = `${should_prefix_bom ? '\uFEFF' : ''}${contents}`;
    const element = document.createElement('a');
    const use_blob_url = !!window.URL?.createObjectURL;
    if (use_blob_url) {
        const blob = new Blob([data], { type: `${file_type};charset=utf-8` });
        const object_url = window.URL.createObjectURL(blob);
        element.setAttribute('href', object_url);
        setTimeout(() => window.URL.revokeObjectURL(object_url), 0);
    } else {
        element.setAttribute(
            'href',
            `data:${file_type};charset=utf-8,${encodeURIComponent(data)}`,
        );
    }
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
            .join(''),
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
    e2: number,
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

export function predictableRandomInt(ceil = 100, floor = 0) {
    return Math.floor(rand() * (ceil - floor)) + floor;
}

// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++)
        ((h = Math.imul(h ^ str.charCodeAt(i), 3432918353)),
            (h = (h << 13) | (h >>> 19)));
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
                navigator.language,
        )
        .toLowerCase();
    return localeString.indexOf('am') < 0 && localeString.indexOf('pm') < 0;
}

export function getInvalidFields(
    form: FormGroup,
    mappings: Record<string, string> = {},
    prefix = '',
) {
    let invalid = [];
    for (const key in form.controls) {
        if (form.controls[key] instanceof FormGroup) {
            invalid = [
                ...invalid,
                ...getInvalidFields(
                    form.controls[key] as FormGroup,
                    mappings,
                    `${key}.`,
                ),
            ];
        } else if (form.controls[key].invalid) {
            invalid.push(`${prefix}${key}`);
        }
    }
    return invalid.map((field) => mappings[field] || field);
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
    removal_items: any[] = [undefined, null, ''],
) {
    return array.filter((_) => !removal_items.includes(_));
}

export function addStringKey(value: string, key: string) {
    return removeStringKey(value, key) + `[${key}]`;
}

export function removeStringKey(value: string, key: string) {
    const key_value = `[${key}]`;
    while (value.includes(key_value)) {
        value = value.replace(`[${key}]`, '');
    }
    return value;
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
    lon2: number,
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
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

export type RGB = [number, number, number];

export function interpolateColors(rgb1: RGB, rgb2: RGB, fraction: number): RGB {
    const r = rgb1[0] + (rgb2[0] - rgb1[0]) * fraction;
    const g = rgb1[1] + (rgb2[1] - rgb1[1]) * fraction;
    const b = rgb1[2] + (rgb2[2] - rgb1[2]) * fraction;
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
    fraction: number,
) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const resultRgb = interpolateColors(rgb1, rgb2, fraction);
    return rgbToHex(resultRgb[0], resultRgb[1], resultRgb[2]);
}

export function extractTextFromHTML(html_string: string) {
    // Create a temporary DOM element
    const temp_element = document.createElement('div');

    // Set the innerHTML to our HTML string
    temp_element.innerHTML = html_string;

    // Extract and return the text content
    return temp_element.textContent || temp_element.innerText || '';
}

/**
 * Shuffle the items in array into random order
 * @param array List of items to shuffle
 */
export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Shuffle the items in array into random order with a specific item as the first
 * @param array List of items to shuffle
 * @param first_index Index of the item in the list to set as first
 */
export function shuffleArrayWithFirstItem(array: any[], first_index: number) {
    // Move the specified item to the beginning
    const firstItem = array.splice(first_index, 1)[0];
    array.unshift(firstItem);

    // Shuffle the rest of the array (starting from index 1)
    for (let i = array.length - 1; i > 1; i--) {
        const j = Math.floor(Math.random() * (i - 1)) + 1;
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export function formatDuration(
    {
        days,
        hours,
        minutes,
        seconds,
    }: {
        days?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    },
    { zero }: { zero?: boolean } = {},
): string {
    if (!i18nAvailable()) {
        return duration({ days, hours, minutes, seconds }, { zero });
    }
    const value = [];
    if (days || (zero && days === 0))
        value.push(
            `${i18n(days === 1 ? 'COMMON.TIME_DAY' : 'COMMON.TIME_DAYS', { days })}`,
        );
    if (hours || (zero && hours === 0))
        value.push(
            `${i18n(hours === 1 ? 'COMMON.TIME_HOUR' : 'COMMON.TIME_HOURS', { hours })}`,
        );
    if (minutes || (zero && minutes === 0))
        value.push(
            `${i18n(minutes === 1 ? 'COMMON.TIME_MINUTE' : 'COMMON.TIME_MINUTES', { minutes })}`,
        );
    if (seconds || (zero && seconds === 0))
        value.push(
            `${i18n(seconds === 1 ? 'COMMON.TIME_SECOND' : 'COMMON.TIME_SECONDS', { seconds })}`,
        );
    return value.join(' ');
}

/**
 * Create a promise that returns the next value returned by the given observable
 * @param obs Observable to use
 */
export function nextValueFrom<T = any>(obs: Observable<T>): Promise<T> {
    return obs ? lastValueFrom(obs.pipe(take(1))) : Promise.resolve(null);
}

/**
 * Create a promise that returns the first truthy value returned by the given observable
 * @param obs Observable to use
 */
export function firstTruthyValueFrom<T = any>(obs: Observable<T>): Promise<T> {
    return obs
        ? lastValueFrom(obs.pipe(first((_) => !!_)))
        : Promise.resolve(null);
}

export interface BookableHoursRange {
    /** Earliest allowed booking hour (0–24). For example, `8` means 8:00 AM. */
    start: number;
    /** Latest allowed booking hour (0–24). For example, `17` means 5:00 PM. */
    end: number;
}

export function getAllDayTimeRange(
    date: number,
    timezone = '',
    start?: number | null,
    end?: number | null,
) {
    const day_start = startOfDayInTimezone(date, timezone);
    if (start == null || end == null) {
        return {
            date: day_start,
            duration: 24 * 60 - 1,
            date_end: endOfDayInTimezone(day_start, timezone),
        };
    }
    const range_start = Math.max(0, Math.min(23, start));
    const range_end = Math.max(range_start + 1, Math.min(24, end));
    const period_start = addHours(day_start, range_start).valueOf();
    const period_end = addHours(day_start, range_end).valueOf();
    return {
        date: period_start,
        duration: differenceInMinutes(period_end, period_start),
        date_end: period_end,
    };
}

/**
 * Given the current time and a bookable_hours range, returns the next available
 * booking start time (as ms epoch). If the current time falls within the
 * bookable window it is returned unchanged (rounded up to the nearest 5 min).
 * If it falls outside, the start of the next bookable window is returned.
 *
 * @param bookable_hours  The bookable window (hours of the day, 0–24).
 * @param now             Reference timestamp (ms epoch). Defaults to `Date.now()`.
 * @param timezone        IANA timezone for wall-clock calculations. Empty = local.
 * @param min_duration    When > 0, the effective end of the bookable window is
 *                        shifted earlier by this many minutes so that a booking
 *                        of at least `min_duration` can still fit. For example
 *                        with `end = 17` (17:00) and `min_duration = 30`,
 *                        any time at or after 16:30 is treated as outside the
 *                        window.
 * @returns ms epoch of the next available booking time, or `undefined` if no
 *          adjustment is needed (bookable_hours is not set)
 */
export function getNextBookableTime(
    bookable_hours: BookableHoursRange | undefined | null,
    now: number = Date.now(),
    timezone = '',
    min_duration = 0,
): number | undefined {
    if (!bookable_hours) return undefined;
    const { start, end } = bookable_hours;
    if (start == null || end == null) return undefined;

    const start_minutes = start * 60;
    const end_minutes = end * 60;
    const effective_end =
        min_duration > 0 ? end_minutes - min_duration : end_minutes;
    const time = timezone ? toZonedTime(now, timezone) : new Date(now);
    const current_minutes = time.getHours() * 60 + time.getMinutes();

    if (current_minutes >= start_minutes && current_minutes < effective_end) {
        // Within bookable hours — return now rounded up to nearest 5 min
        return roundToNearestMinutes(now, {
            nearestTo: 5,
            roundingMethod: 'ceil',
        }).valueOf();
    }

    // Outside bookable hours — advance to the start of the next window
    const base_day =
        current_minutes < start_minutes
            ? startOfDay(time)
            : addDays(startOfDay(time), 1);
    // Convert wall-clock result back to UTC epoch when timezone-aware
    const wall_clock_ms = base_day.getTime() + start_minutes * 60 * 1000;
    return timezone
        ? fromZonedTime(wall_clock_ms, timezone).valueOf()
        : wall_clock_ms;
}

/**
 * @param min_duration  When > 0, the effective end of the window is reduced by
 *                      this many minutes so that a booking of at least
 *                      `min_duration` can still fit. Passed through to
 *                      {@link getNextBookableTime} when advancing to the next day.
 */
export function alignDateToBookableHours(
    date: number,
    bookable_hours: BookableHoursRange | undefined | null,
    fallback_date?: number,
    timezone = '',
    min_duration = 0,
): number {
    if (!date || !bookable_hours) return date;
    const { start, end } = bookable_hours;
    if (start == null || end == null) return date;

    const start_minutes = start * 60;
    const end_minutes = end * 60;
    const effective_end =
        min_duration > 0 ? end_minutes - min_duration : end_minutes;
    const base_date = new Date(date);
    const reference = timezone
        ? toZonedTime(fallback_date || date, timezone)
        : new Date(fallback_date || date);
    let adjusted_date = set(base_date, {
        hours: reference.getHours(),
        minutes: reference.getMinutes(),
        seconds: reference.getSeconds(),
        milliseconds: reference.getMilliseconds(),
    }).valueOf();
    const adjusted_time = timezone
        ? toZonedTime(adjusted_date, timezone)
        : new Date(adjusted_date);
    const adjusted_minutes =
        adjusted_time.getHours() * 60 + adjusted_time.getMinutes();

    if (adjusted_minutes >= start_minutes && adjusted_minutes < effective_end) {
        return adjusted_date;
    }

    if (adjusted_minutes >= effective_end && adjusted_date <= Date.now()) {
        return (
            getNextBookableTime(
                bookable_hours,
                adjusted_date,
                timezone,
                min_duration,
            ) || adjusted_date
        );
    }

    adjusted_date = set(base_date, {
        hours: start,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    }).valueOf();
    return adjusted_date;
}

export function isWithinBookableHours(
    date: Date | number,
    bookable_hours: BookableHoursRange | undefined | null,
    timezone = '',
): boolean {
    if (!bookable_hours) return true;
    const { start, end } = bookable_hours;
    if (start == null || end == null) return true;
    const time = timezone ? toZonedTime(date, timezone) : new Date(date);
    const minutes = time.getHours() * 60 + time.getMinutes();
    return minutes >= start * 60 && minutes < end * 60;
}

export function mapLastValueFrom<T = any>(
    obs: Observable<T>,
    map_fn: (value: any) => T,
): Promise<T> {
    return obs
        ? map
            ? lastValueFrom(obs.pipe(map(map_fn)))
            : lastValueFrom(obs)
        : Promise.resolve(null);
}

// ---------------------------------------------------------------------------
// Form time synchronisation
// ---------------------------------------------------------------------------

/** Configuration for {@link setupFormTimeSync}. */
export interface FormTimeSyncOptions {
    /**
     * Minimum allowed duration in minutes.
     * When `date_end` is set such that the gap is smaller than this value,
     * both `date_end` and `duration` are clamped to this minimum.
     * @default 30
     */
    min_duration?: number;

    /**
     * Maximum allowed duration in minutes. When a duration exceeding this value
     * is set (directly or via `date_end`), it is clamped down.
     * Set to `0` or `undefined` to disable the upper bound.
     * @default 0 (no limit)
     */
    max_duration?: number;

    /**
     * Default duration in minutes applied when `all_day` is toggled OFF.
     * @default 60
     */
    default_duration?: number;

    /**
     * Explicit duration values in minutes that are allowed even when they fall
     * outside the configured min/max bounds.
     */
    custom_duration_options?: number[];

    /**
     * Granularity in minutes to which computed times are rounded (using ceil).
     * @default 5
     */
    round_to?: number;

    /**
     * Bookable hours range (hours of the day, 0–24). When set, the `date`
     * handler will snap new-form dates to the next bookable window via
     * {@link getNextBookableTime}, and dates set outside the window are
     * aligned via {@link alignDateToBookableHours}.
     * Set to `null`/`undefined` to disable bookable-hours enforcement.
     */
    bookable_hours?: BookableHoursRange | null;

    /**
     * IANA timezone identifier used for bookable-hours calculations.
     * When empty the local timezone is used.
     * @default ''
     */
    timezone?: string;

    /** Optional start hour to use when `all_day` is enabled. */
    all_day_start?: number | null;

    /** Optional end hour to use when `all_day` is enabled. */
    all_day_end?: number | null;

    /**
     * Optional callback invoked whenever date, duration, or date_end changes.
     * Use this for form-specific side effects (e.g. updating catering times).
     */
    on_time_change?: () => void;
}

/** Handle returned by {@link setupFormTimeSync}. */
export interface FormTimeSyncHandle {
    /** Active subscriptions – unsubscribe all to tear down the sync. */
    subscriptions: Subscription[];

    /**
     * Update the options at runtime (e.g. when settings change or the booking
     * type switches). Only the provided keys are merged; omitted keys keep
     * their current value. The current duration is re-clamped to the new
     * bounds immediately. If `bookable_hours` changes, the current date is
     * re-aligned to the new window.
     */
    updateOptions: (patch: Partial<FormTimeSyncOptions>) => void;
}

/**
 * Wire up the bidirectional synchronisation between `date`, `duration`, and
 * `date_end` form controls. This is the single source of truth for the time
 * sync rules shared by both the event form and the booking form.
 *
 * **Rules enforced:**
 * 1. When `duration` changes → clamp to [min, max], then `date_end` = ceil₅(date + duration).
 * 2. When `date_end` changes → if gap < min_duration clamp up; if gap > max_duration clamp down;
 *    otherwise recalculate `duration`.
 * 3. When `date` changes → recalculate `date_end` from current duration;
 *    if date is in the past and the form has no `id`, snap to now (ceil₅).
 * 4. When `all_day` is toggled ON → apply the configured all-day period if one exists.
 *    When toggled OFF → reset `duration` to `default_duration`.
 *
 * @returns A {@link FormTimeSyncHandle} with the active subscriptions and an
 *          `updateOptions` function for runtime reconfiguration.
 */
export function setupFormTimeSync(
    form: FormGroup,
    options: FormTimeSyncOptions = {},
): FormTimeSyncHandle {
    let min_duration = options.min_duration ?? 30;
    let max_duration = options.max_duration ?? 0;
    let default_duration = options.default_duration ?? 60;
    let custom_duration_options = [
        ...new Set(
            (options.custom_duration_options || [])
                .map((_) => Math.round(+_ || 0))
                .filter((_) => _ > 0),
        ),
    ].sort((a, b) => a - b);
    let bookable_hours: BookableHoursRange | null =
        options.bookable_hours ?? null;
    let timezone = options.timezone ?? '';
    let all_day_start = options.all_day_start;
    let all_day_end = options.all_day_end;
    const round_to = options.round_to ?? 5;
    const on_change = options.on_time_change;

    const effective_min_duration = () =>
        Math.min(min_duration, ...custom_duration_options);

    const is_custom_duration = (dur: number) =>
        custom_duration_options.includes(Math.round(+dur || 0));

    const roundCeil = (date: number | Date): number =>
        roundToNearestMinutes(date, {
            nearestTo: round_to as 5,
            roundingMethod: 'ceil',
        }).valueOf();

    /** Clamp a duration value to [min_duration, max_duration]. */
    const clampDuration = (dur: number): number => {
        if (is_custom_duration(dur)) return dur;
        let clamped = Math.max(dur, min_duration);
        if (max_duration > 0) clamped = Math.min(clamped, max_duration);
        return clamped;
    };

    /**
     * If bookable hours are configured and the form represents a new item
     * (no `id`), snap `date` into the bookable window. Existing items are
     * left untouched because they may legitimately fall outside the window.
     * Returns the (potentially adjusted) date.
     */
    const alignToBookableHours = (date: number): number => {
        if (!bookable_hours || !date || form.value.id) return date;
        const next = getNextBookableTime(
            bookable_hours,
            date,
            timezone,
            effective_min_duration(),
        );
        if (next && next !== date) {
            if (_user_date_change) {
                notifyWarn(i18n('COMMON.BOOKABLE_HOURS_ERROR'));
                _user_date_change = false;
            }
            return next;
        }
        return alignDateToBookableHours(
            date,
            bookable_hours,
            date,
            timezone,
            effective_min_duration(),
        );
    };

    /** Check whether date and date_end fall on different calendar days. */
    const isMultiday = (date: number, date_end: number): boolean => {
        if (!date || !date_end) return false;
        const d = timezone ? toZonedTime(date, timezone) : new Date(date);
        const e = timezone
            ? toZonedTime(date_end, timezone)
            : new Date(date_end);
        return !isSameDay(d, e);
    };

    /**
     * For multiday bookings, align the end time so it falls within bookable
     * hours on the end-date's day. Only the wall-clock time is adjusted;
     * the calendar date is preserved.
     */
    const alignEndToBookableHours = (date_end: number): number => {
        if (!bookable_hours || !date_end || form.value.id) return date_end;
        const time = timezone
            ? toZonedTime(date_end, timezone)
            : new Date(date_end);
        const end_minutes = time.getHours() * 60 + time.getMinutes();
        const bh_start_minutes = bookable_hours.start * 60;
        const bh_end_minutes = bookable_hours.end * 60;
        if (end_minutes >= bh_start_minutes && end_minutes <= bh_end_minutes) {
            return date_end;
        }
        // Snap to the end of the bookable window on the same day
        if (end_minutes > bh_end_minutes) {
            const snapped = set(time, {
                hours: bookable_hours.end,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            });
            return timezone
                ? fromZonedTime(snapped, timezone).valueOf()
                : snapped.valueOf();
        }
        // Before start — snap to the start of the bookable window
        const snapped = set(time, {
            hours: bookable_hours.start,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
        return timezone
            ? fromZonedTime(snapped, timezone).valueOf()
            : snapped.valueOf();
    };

    const subscriptions: Subscription[] = [];

    // duration → date_end (with min/max enforcement)
    subscriptions.push(
        form.controls.duration.valueChanges.subscribe((dur: number) => {
            if (form.value.all_day) return;
            const date = form.getRawValue().date;
            const new_end = roundCeil(addMinutes(date, dur));
            const multiday = isMultiday(date, new_end);
            if (multiday) {
                // For multiday, skip duration clamping; just align end
                // time to bookable hours on the end day
                const aligned_end = alignEndToBookableHours(new_end);
                const actual_dur = differenceInMinutes(aligned_end, date);
                const patch: Record<string, any> = { date_end: aligned_end };
                if (actual_dur !== dur) patch.duration = actual_dur;
                form.patchValue(patch, { emitEvent: false });
            } else {
                const clamped = clampDuration(dur);
                const clamped_end = roundCeil(addMinutes(date, clamped));
                const patch: Record<string, any> = { date_end: clamped_end };
                if (clamped !== dur) patch.duration = clamped;
                form.patchValue(patch, { emitEvent: false });
            }
            on_change?.();
        }),
    );

    // date_end → duration (with min/max enforcement)
    subscriptions.push(
        form.controls.date_end.valueChanges.subscribe((end: number) => {
            if (form.value.all_day) return;
            const date = form.getRawValue().date;
            const raw = differenceInMinutes(end, date);
            const multiday = isMultiday(date, end);
            if (multiday) {
                // For multiday bookings, align end time to bookable
                // hours on the end day but don't apply max_duration
                const aligned_end = alignEndToBookableHours(end);
                const actual_dur = differenceInMinutes(aligned_end, date);
                if (aligned_end !== end) {
                    form.patchValue(
                        { date_end: aligned_end, duration: actual_dur },
                        { emitEvent: false },
                    );
                } else {
                    form.patchValue({ duration: raw }, { emitEvent: false });
                }
            } else {
                const clamped = clampDuration(raw);
                if (clamped !== raw) {
                    form.patchValue(
                        {
                            date_end: roundCeil(addMinutes(date, clamped)),
                            duration: clamped,
                        },
                        { emitEvent: false },
                    );
                } else {
                    form.patchValue({ duration: raw }, { emitEvent: false });
                }
            }
            on_change?.();
        }),
    );

    // date → date_end + past-date snap + bookable-hours alignment
    subscriptions.push(
        form.controls.date.valueChanges.subscribe((date: number) => {
            const aligned = alignToBookableHours(date);
            const effective = aligned !== date ? aligned : date;
            const expected_end = roundCeil(
                addMinutes(effective, form.getRawValue().duration),
            );
            const multiday = isMultiday(effective, expected_end);
            if (!form.value.all_day) {
                if (multiday) {
                    const current_end = form.getRawValue().date_end;
                    if (current_end <= effective) {
                        // End date is now at or before the new start —
                        // advance it using start + duration
                        const new_end =
                            alignEndToBookableHours(expected_end) ||
                            expected_end;
                        form.patchValue(
                            {
                                date_end: new_end,
                                duration: differenceInMinutes(
                                    new_end,
                                    effective,
                                ),
                            },
                            { emitEvent: false },
                        );
                    } else {
                        // Preserve the existing end date/time
                        // but align its wall-clock time to bookable hours
                        const aligned_end =
                            alignEndToBookableHours(current_end);
                        if (aligned_end !== current_end) {
                            form.patchValue(
                                {
                                    date_end: aligned_end,
                                    duration: differenceInMinutes(
                                        aligned_end,
                                        effective,
                                    ),
                                },
                                { emitEvent: false },
                            );
                        } else {
                            form.patchValue(
                                {
                                    duration: differenceInMinutes(
                                        current_end,
                                        effective,
                                    ),
                                },
                                { emitEvent: false },
                            );
                        }
                    }
                } else {
                    form.patchValue(
                        { date_end: expected_end },
                        { emitEvent: false },
                    );
                }
            }
            if (effective < Date.now() && !form.value.id) {
                const snapped = roundCeil(Date.now());
                form.patchValue(
                    { date: alignToBookableHours(snapped) || snapped },
                    { emitEvent: false },
                );
            } else if (aligned !== date) {
                form.patchValue({ date: aligned }, { emitEvent: false });
            }
            on_change?.();
        }),
    );

    // all_day toggle
    if (form.controls.all_day) {
        subscriptions.push(
            form.controls.all_day.valueChanges.subscribe((all_day: boolean) => {
                if (all_day) {
                    if (all_day_start != null && all_day_end != null) {
                        form.patchValue(
                            getAllDayTimeRange(
                                form.getRawValue().date,
                                timezone,
                                all_day_start,
                                all_day_end,
                            ),
                            { emitEvent: false },
                        );
                    }
                } else {
                    const dur = clampDuration(default_duration);
                    const date = form.getRawValue().date;
                    form.patchValue(
                        {
                            duration: dur,
                            date_end: roundCeil(addMinutes(date, dur)),
                        },
                        { emitEvent: false },
                    );
                }
                on_change?.();
            }),
        );
    }

    const handle: FormTimeSyncHandle = {
        subscriptions,
        updateOptions(patch: Partial<FormTimeSyncOptions>) {
            if (patch.min_duration != null) min_duration = patch.min_duration;
            if (patch.max_duration != null) max_duration = patch.max_duration;
            if (patch.default_duration != null)
                default_duration = patch.default_duration;
            if (patch.custom_duration_options != null) {
                custom_duration_options = [
                    ...new Set(
                        (patch.custom_duration_options || [])
                            .map((_) => Math.round(+_ || 0))
                            .filter((_) => _ > 0),
                    ),
                ].sort((a, b) => a - b);
            }
            if (patch.bookable_hours !== undefined)
                bookable_hours = patch.bookable_hours ?? null;
            if (patch.timezone != null) timezone = patch.timezone;
            if (patch.all_day_start !== undefined)
                all_day_start = patch.all_day_start;
            if (patch.all_day_end !== undefined)
                all_day_end = patch.all_day_end;

            if (
                form.value.all_day &&
                all_day_start != null &&
                all_day_end != null
            ) {
                form.patchValue(
                    getAllDayTimeRange(
                        form.getRawValue().date,
                        timezone,
                        all_day_start,
                        all_day_end,
                    ),
                    { emitEvent: false },
                );
                on_change?.();
                return;
            }

            // Re-clamp the current duration to the new bounds
            if (!form.value.all_day) {
                const date = form.getRawValue().date;
                const date_end = form.getRawValue().date_end;
                const multiday = isMultiday(date, date_end);
                if (!multiday) {
                    const current = form.getRawValue().duration;
                    const clamped = clampDuration(current);
                    if (clamped !== current) {
                        form.patchValue(
                            {
                                duration: clamped,
                                date_end: roundCeil(addMinutes(date, clamped)),
                            },
                            { emitEvent: false },
                        );
                        on_change?.();
                    }
                }
            }

            // Re-align the current date to the (possibly new) bookable window
            if (bookable_hours && !form.value.all_day) {
                const date = form.getRawValue().date;
                const date_end = form.getRawValue().date_end;
                const multiday = isMultiday(date, date_end);
                const aligned = alignToBookableHours(date);
                if (aligned !== date) {
                    if (multiday) {
                        // For multiday, align start to bookable hours
                        // and also align end to bookable hours on its day
                        const aligned_end = alignEndToBookableHours(date_end);
                        form.patchValue(
                            {
                                date: aligned,
                                date_end: aligned_end,
                                duration: differenceInMinutes(
                                    aligned_end,
                                    aligned,
                                ),
                            },
                            { emitEvent: false },
                        );
                    } else {
                        form.patchValue(
                            {
                                date: aligned,
                                date_end: roundCeil(
                                    addMinutes(
                                        aligned,
                                        form.getRawValue().duration,
                                    ),
                                ),
                            },
                            { emitEvent: false },
                        );
                    }
                    on_change?.();
                } else if (multiday) {
                    // Start is fine, but also align end to bookable hours
                    const aligned_end = alignEndToBookableHours(date_end);
                    if (aligned_end !== date_end) {
                        form.patchValue(
                            {
                                date_end: aligned_end,
                                duration: differenceInMinutes(
                                    aligned_end,
                                    date,
                                ),
                            },
                            { emitEvent: false },
                        );
                        on_change?.();
                    }
                }
            }
        },
    };

    return handle;
}

/**
 * Retrieve the {@link FormTimeSyncHandle} that was attached to a form by
 * {@link setupFormTimeSync} (when called from `generateEventForm` or
 * `generateBookingForm`). Returns `undefined` if no handle is attached.
 */
export function getFormTimeSyncHandle(
    form: FormGroup,
): FormTimeSyncHandle | undefined {
    return (form as any)?._time_sync;
}
