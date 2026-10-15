import { numbersIn } from './matrix';

const TOKEN =
    /[MmLlHhVvCcSsQqTtAaZz]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;
const ARITY: Readonly<Record<string, number>> = {
    M: 2,
    L: 2,
    H: 1,
    V: 1,
    C: 6,
    S: 4,
    Q: 4,
    T: 2,
    A: 7,
    Z: 0,
};

export interface PathCheck {
    ok: boolean;
    error?: string;
    commands: number;
}

/**
 * Grammar check of path data: known commands, numeric arguments in whole
 * groups, nothing before the first command, no stray characters.
 */
export function checkPathData(d: string | null | undefined): PathCheck {
    if (!d || !d.trim())
        return { ok: false, error: 'empty path data', commands: 0 };
    const stripped = d.replace(TOKEN, '').replace(/[\s,]/g, '');
    if (stripped) {
        return {
            ok: false,
            error: `unexpected characters "${stripped.slice(0, 12)}"`,
            commands: 0,
        };
    }
    const tokens = d.match(TOKEN) || [];
    let command = '';
    let pending: number[] = [];
    let commands = 0;
    let first = true;
    for (const token of tokens) {
        if (/^[A-Za-z]$/.test(token)) {
            if (pending.length) {
                return {
                    ok: false,
                    error: `command ${command} has a partial argument group`,
                    commands,
                };
            }
            if (first && token.toUpperCase() !== 'M') {
                return { ok: false, error: 'path must start with M', commands };
            }
            first = false;
            command = token;
            commands++;
            continue;
        }
        if (!command) {
            return {
                ok: false,
                error: 'number before the first command',
                commands,
            };
        }
        const arity = ARITY[command.toUpperCase()];
        if (arity === 0) {
            return { ok: false, error: 'Z takes no arguments', commands };
        }
        pending.push(Number(token));
        if (pending.length === arity) {
            pending = [];
            commands++;
        }
    }
    if (pending.length) {
        return {
            ok: false,
            error: `command ${command} has a partial argument group`,
            commands,
        };
    }
    return { ok: commands > 0, commands };
}

/**
 * End points and control points of a path, absolute. Arc flags and radii are
 * skipped, so an arc contributes only its end point.
 */
export function pathPoints(d: string | null | undefined): [number, number][] {
    const points: [number, number][] = [];
    if (!d) return points;
    const tokens = d.match(TOKEN) || [];
    let current: [number, number] = [0, 0];
    let start: [number, number] = [0, 0];
    let command = '';
    let index = 0;

    const take = (count: number): number[] | null => {
        if (index + count > tokens.length) return null;
        const values: number[] = [];
        for (let i = 0; i < count; i++) {
            const token = tokens[index + i];
            if (/^[A-Za-z]$/.test(token)) return null;
            values.push(Number(token));
        }
        index += count;
        return values;
    };

    while (index < tokens.length) {
        const token = tokens[index];
        if (/^[A-Za-z]$/.test(token)) {
            command = token;
            index++;
            if (command === 'Z' || command === 'z') {
                current = start;
                continue;
            }
        }
        if (!command) {
            index++;
            continue;
        }
        const relative = command === command.toLowerCase();
        const upper = command.toUpperCase();
        const abs = (x: number, y: number): [number, number] =>
            relative ? [current[0] + x, current[1] + y] : [x, y];
        let values: number[] | null;
        switch (upper) {
            case 'M':
                values = take(2);
                if (!values) return points;
                current = abs(values[0], values[1]);
                start = current;
                points.push(current);
                command = relative ? 'l' : 'L';
                break;
            case 'L':
                values = take(2);
                if (!values) return points;
                current = abs(values[0], values[1]);
                points.push(current);
                break;
            case 'H':
                values = take(1);
                if (!values) return points;
                current = [
                    relative ? current[0] + values[0] : values[0],
                    current[1],
                ];
                points.push(current);
                break;
            case 'V':
                values = take(1);
                if (!values) return points;
                current = [
                    current[0],
                    relative ? current[1] + values[0] : values[0],
                ];
                points.push(current);
                break;
            case 'C':
            case 'S':
            case 'Q':
            case 'T': {
                const count = ARITY[upper];
                values = take(count);
                if (!values) return points;
                let last = current;
                for (let i = 0; i < count; i += 2) {
                    last = abs(values[i], values[i + 1]);
                    points.push(last);
                }
                current = last;
                break;
            }
            case 'A':
                values = take(7);
                if (!values) return points;
                current = abs(values[5], values[6]);
                points.push(current);
                break;
            default:
                index++;
        }
    }
    return points;
}

export function pointsIn(value: string | null | undefined): [number, number][] {
    const numbers = numbersIn(value || '');
    const points: [number, number][] = [];
    for (let i = 0; i + 1 < numbers.length; i += 2) {
        points.push([numbers[i], numbers[i + 1]]);
    }
    return points;
}
