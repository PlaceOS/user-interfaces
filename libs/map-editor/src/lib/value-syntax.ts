const NAMED_COLOURS = new Set(
    (
        'aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue ' +
        'blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk ' +
        'crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki ' +
        'darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen ' +
        'darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue ' +
        'dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite ' +
        'gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki ' +
        'lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan ' +
        'lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen ' +
        'lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen ' +
        'magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen ' +
        'mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream ' +
        'mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid ' +
        'palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum ' +
        'powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown ' +
        'seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen ' +
        'steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen ' +
        'none transparent currentcolor inherit'
    ).split(' '),
);

const HEX_COLOUR = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const FUNCTION_COLOUR =
    /^(?:rgba?|hsla?)\(\s*[\d.%-]+\s*[,\s]\s*[\d.%-]+\s*[,\s]\s*[\d.%-]+\s*(?:[,/]\s*[\d.%]+\s*)?\)$/i;
const FRAGMENT_PAINT =
    /^url\(\s*['"]?#[A-Za-z][A-Za-z0-9_.-]*['"]?\s*\)(?:\s+(?:none|#[0-9a-f]{3,8}|[a-z]+))?$/i;
const NUMBER = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/;
const LENGTH =
    /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?(?:px|pt|pc|mm|cm|in|em|rem|ex|%)?$/;
const CLASS_TOKEN = /^-?[A-Za-z_][A-Za-z0-9_-]*$/;
const UNSAFE_TEXT = /url\(|expression\(|behavior:|javascript:|<|>|[\r\n]/i;

function cssSupports(property: string, value: string): boolean | null {
    const css = (
        globalThis as { CSS?: { supports?: (p: string, v: string) => boolean } }
    ).CSS;
    if (!css || typeof css.supports !== 'function') return null;
    try {
        return css.supports(property, value);
    } catch {
        return null;
    }
}

/** Paint value syntax: colours, `none`, and fragment references for gradients. */
export function isValidPaint(value: string): boolean {
    const trimmed = value.trim();
    if (!trimmed) return false;
    if (FRAGMENT_PAINT.test(trimmed)) return true;
    if (UNSAFE_TEXT.test(trimmed)) return false;
    const supported = cssSupports('color', trimmed);
    if (supported !== null) return supported;
    return (
        HEX_COLOUR.test(trimmed) ||
        FUNCTION_COLOUR.test(trimmed) ||
        NAMED_COLOURS.has(trimmed.toLowerCase())
    );
}

export function isValidNumber(value: string): boolean {
    return NUMBER.test(value.trim());
}

export function isValidLength(value: string): boolean {
    return LENGTH.test(value.trim());
}

export function isValidOpacity(value: string): boolean {
    const trimmed = value.trim();
    if (/^\d+(?:\.\d+)?%$/.test(trimmed)) return parseFloat(trimmed) <= 100;
    if (!NUMBER.test(trimmed)) return false;
    const n = parseFloat(trimmed);
    return n >= 0 && n <= 1;
}

export function isValidDashArray(value: string): boolean {
    const trimmed = value.trim();
    if (trimmed === 'none') return true;
    const parts = trimmed.split(/[\s,]+/).filter((p) => !!p);
    return parts.length > 0 && parts.every((p) => LENGTH.test(p));
}

export function isValidClassList(value: string): boolean {
    const tokens = value
        .trim()
        .split(/\s+/)
        .filter((t) => !!t);
    return tokens.every((t) => CLASS_TOKEN.test(t));
}

export function isValidFontFamily(value: string): boolean {
    return !!value.trim() && !UNSAFE_TEXT.test(value);
}

/**
 * Null when the value is acceptable for the attribute (or style property),
 * otherwise a short reason. `data-*` values may be any text without markup.
 */
export function attributeValueIssue(
    name: string,
    value: string,
): string | null {
    switch (name) {
        case 'fill':
        case 'stroke':
            return isValidPaint(value) ? null : `"${value}" is not a colour`;
        case 'stroke-width':
        case 'rx':
        case 'ry':
        case 'font-size':
            return isValidLength(value) ? null : `"${value}" is not a length`;
        case 'opacity':
        case 'fill-opacity':
        case 'stroke-opacity':
            return isValidOpacity(value)
                ? null
                : `"${value}" is not an opacity between 0 and 1`;
        case 'stroke-dasharray':
            return isValidDashArray(value)
                ? null
                : `"${value}" is not a dash array`;
        case 'class':
            return isValidClassList(value)
                ? null
                : `"${value}" is not a class list`;
        case 'visibility':
            return ['visible', 'hidden', 'collapse'].includes(value.trim())
                ? null
                : `"${value}" is not a visibility keyword`;
        case 'font-family':
            return isValidFontFamily(value)
                ? null
                : `"${value}" is not a font family`;
        case 'font-weight':
            return /^(?:normal|bold|bolder|lighter|[1-9]00)$/.test(value.trim())
                ? null
                : `"${value}" is not a font weight`;
        case 'text-anchor':
            return ['start', 'middle', 'end'].includes(value.trim())
                ? null
                : `"${value}" is not a text anchor`;
        default:
            if (name.startsWith('data-')) {
                return /[<>]/.test(value)
                    ? `"${name}" may not contain markup`
                    : null;
            }
            return null;
    }
}

/** Geometry attribute values on inserted shapes. */
export function geometryValueIssue(name: string, value: string): string | null {
    switch (name) {
        case 'points': {
            const numbers = value
                .trim()
                .split(/[\s,]+/)
                .filter((p) => !!p);
            return numbers.length >= 4 &&
                numbers.length % 2 === 0 &&
                numbers.every((n) => NUMBER.test(n))
                ? null
                : `"${value}" is not a points list`;
        }
        case 'd':
            return null;
        default:
            return isValidNumber(value)
                ? null
                : `${name}="${value}" is not a number`;
    }
}
