/** Affine matrix in SVG order: x' = a x + c y + e, y' = b x + d y + f. */
export interface Matrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}

export type Point = [number, number];

export const IDENTITY: Readonly<Matrix> = Object.freeze({
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0,
});

const NUMBER = /[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;
const TRANSFORM_FN =
    /(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g;

export function multiply(m: Matrix, n: Matrix): Matrix {
    return {
        a: m.a * n.a + m.c * n.b,
        b: m.b * n.a + m.d * n.b,
        c: m.a * n.c + m.c * n.d,
        d: m.b * n.c + m.d * n.d,
        e: m.a * n.e + m.c * n.f + m.e,
        f: m.b * n.e + m.d * n.f + m.f,
    };
}

export function invert(m: Matrix): Matrix | null {
    const det = m.a * m.d - m.b * m.c;
    if (!det || !Number.isFinite(det)) return null;
    return {
        a: m.d / det,
        b: -m.b / det,
        c: -m.c / det,
        d: m.a / det,
        e: (m.c * m.f - m.d * m.e) / det,
        f: (m.b * m.e - m.a * m.f) / det,
    };
}

export function applyToPoint(m: Matrix, [x, y]: Point): Point {
    return [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f];
}

export function isIdentity(m: Matrix, epsilon = 1e-9): boolean {
    return (
        Math.abs(m.a - 1) < epsilon &&
        Math.abs(m.b) < epsilon &&
        Math.abs(m.c) < epsilon &&
        Math.abs(m.d - 1) < epsilon &&
        Math.abs(m.e) < epsilon &&
        Math.abs(m.f) < epsilon
    );
}

export function isTranslation(m: Matrix, epsilon = 1e-9): boolean {
    return (
        Math.abs(m.a - 1) < epsilon &&
        Math.abs(m.b) < epsilon &&
        Math.abs(m.c) < epsilon &&
        Math.abs(m.d - 1) < epsilon
    );
}

export function translation(x: number, y: number): Matrix {
    return { a: 1, b: 0, c: 0, d: 1, e: x, f: y };
}

export function scaling(x: number, y: number): Matrix {
    return { a: x, b: 0, c: 0, d: y, e: 0, f: 0 };
}

export function rotation(degrees: number): Matrix {
    const radians = (degrees * Math.PI) / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    return { a: cos, b: sin, c: -sin, d: cos, e: 0, f: 0 };
}

export function numbersIn(value: string): number[] {
    return (value.match(NUMBER) || []).map(Number);
}

/**
 * Parse an SVG `transform` attribute into one matrix.
 * Unknown functions and functions with the wrong arity are skipped.
 */
export function parseTransform(value: string | null | undefined): Matrix {
    let result: Matrix = { ...IDENTITY };
    if (!value) return result;
    for (const match of value.matchAll(TRANSFORM_FN)) {
        const name = match[1];
        const args = numbersIn(match[2]);
        let m: Matrix | null = null;
        switch (name) {
            case 'matrix':
                if (args.length === 6) {
                    m = {
                        a: args[0],
                        b: args[1],
                        c: args[2],
                        d: args[3],
                        e: args[4],
                        f: args[5],
                    };
                }
                break;
            case 'translate':
                if (args.length) m = translation(args[0], args[1] || 0);
                break;
            case 'scale':
                if (args.length) {
                    m = scaling(args[0], args.length > 1 ? args[1] : args[0]);
                }
                break;
            case 'rotate':
                if (args.length === 3) {
                    m = multiply(
                        multiply(
                            translation(args[1], args[2]),
                            rotation(args[0]),
                        ),
                        translation(-args[1], -args[2]),
                    );
                } else if (args.length) {
                    m = rotation(args[0]);
                }
                break;
            case 'skewX':
                if (args.length) {
                    m = {
                        a: 1,
                        b: 0,
                        c: Math.tan((args[0] * Math.PI) / 180),
                        d: 1,
                        e: 0,
                        f: 0,
                    };
                }
                break;
            case 'skewY':
                if (args.length) {
                    m = {
                        a: 1,
                        b: Math.tan((args[0] * Math.PI) / 180),
                        c: 0,
                        d: 1,
                        e: 0,
                        f: 0,
                    };
                }
                break;
        }
        if (m) result = multiply(result, m);
    }
    return result;
}

function round(value: number, places: number): number {
    const factor = 10 ** places;
    const rounded = Math.round(value * factor) / factor;
    return Object.is(rounded, -0) ? 0 : rounded;
}

/** Shortest `transform` function that reproduces the matrix. */
export function formatTransform(m: Matrix, places = 3): string {
    if (isTranslation(m)) {
        return `translate(${round(m.e, places)} ${round(m.f, places)})`;
    }
    return `matrix(${[m.a, m.b, m.c, m.d, m.e, m.f]
        .map((v) => round(v, places))
        .join(' ')})`;
}

export interface TransformSpec {
    translate?: Point | null;
    scale?: Point | null;
    rotate?: number | null;
    origin?: Point | null;
}

/**
 * Matrix for a transform op in one coordinate space: scale, then rotate about
 * the origin, then translate.
 */
export function composeTransform(spec: TransformSpec): Matrix {
    const [ox, oy] = spec.origin || [0, 0];
    let m: Matrix = { ...IDENTITY };
    if (spec.scale) m = multiply(scaling(spec.scale[0], spec.scale[1]), m);
    if (spec.rotate) m = multiply(rotation(spec.rotate), m);
    if (spec.scale || spec.rotate) {
        m = multiply(multiply(translation(ox, oy), m), translation(-ox, -oy));
    }
    if (spec.translate) {
        m = multiply(translation(spec.translate[0], spec.translate[1]), m);
    }
    return m;
}

/** Express a root-space transform in the space the matrix `ctm` maps from. */
export function changeOfBasis(root_space: Matrix, ctm: Matrix): Matrix | null {
    const inverse = invert(ctm);
    if (!inverse) return null;
    return multiply(multiply(inverse, root_space), ctm);
}

export function transformBBox(
    m: Matrix,
    [x, y, w, h]: [number, number, number, number],
): [number, number, number, number] {
    const corners: Point[] = [
        [x, y],
        [x + w, y],
        [x, y + h],
        [x + w, y + h],
    ].map((p) => applyToPoint(m, p as Point));
    const xs = corners.map((p) => p[0]);
    const ys = corners.map((p) => p[1]);
    const min_x = Math.min(...xs);
    const min_y = Math.min(...ys);
    return [min_x, min_y, Math.max(...xs) - min_x, Math.max(...ys) - min_y];
}
