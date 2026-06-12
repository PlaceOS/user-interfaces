import {
    existsSync,
    mkdirSync,
    readFileSync,
    readdirSync,
    rmSync,
    writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Every app favicon.svg is a 64x64 design with the same outer structure:
// rounded-rect tiles filled by the bg/sheen/depth gradients plus a hairline
// highlight ring, then the app glyph.
// The rounded corners are transparent, which iOS renders as black for home
// screen icons. This tool generates the PNG icon sets each app needs:
//   - icon-{192,512}x*.png         browser/manifest icons (rounded + transparent)
//   - icon-maskable-{192,512}x*.png  full-bleed for Android maskable icons
//   - apple-touch-icon.png         180px full-bleed, iOS masks it itself
//   - favicon.ico                  16/32/48 fallback for browsers without SVG
//                                  favicon support (Safari)
//
// Usage: node tools/generate-favicons.mjs [app ...]

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const APPS_ROOT = path.join(WORKSPACE_ROOT, 'apps');

const TILE_RECT = '<rect width="64" height="64" rx="15"';
const RING_RECT =
    '<rect x=".5" y=".5" width="63" height="63" rx="14.5" stroke="#FFF" stroke-opacity=".2" />';

// Remove the corner rounding and the edge highlight ring so the artwork
// bleeds the full square. iOS and Android maskable icons apply their own
// corner mask.
export function toFullBleedSvg(svg) {
    if (!svg.includes(TILE_RECT) || !svg.includes(RING_RECT)) {
        throw new Error(
            'favicon.svg does not match the shared 64x64 icon structure',
        );
    }
    return svg
        .replaceAll(TILE_RECT, '<rect width="64" height="64"')
        .replace(RING_RECT, '');
}

async function renderPng(svg, size) {
    const { default: sharp } = await import('sharp');
    // 72dpi is the SVG default density at its native 64px size
    return sharp(Buffer.from(svg), { density: (72 * size) / 64 })
        .resize(size, size)
        .png()
        .toBuffer();
}

// Browsers accept PNG-encoded entries inside the ICO container
function toIco(png_entries) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(1, 2); // type: icon
    header.writeUInt16LE(png_entries.length, 4);

    const directory = [];
    const payload = [];
    let offset = 6 + 16 * png_entries.length;
    for (const { size, png } of png_entries) {
        const entry = Buffer.alloc(16);
        entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
        entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
        entry.writeUInt16LE(1, 4); // colour planes
        entry.writeUInt16LE(32, 6); // bits per pixel
        entry.writeUInt32LE(png.length, 8);
        entry.writeUInt32LE(offset, 12);
        offset += png.length;
        directory.push(entry);
        payload.push(png);
    }
    return Buffer.concat([header, ...directory, ...payload]);
}

function findAppPaths(app) {
    const app_root = path.join(APPS_ROOT, app);
    const src_svg = path.join(app_root, 'src', 'assets', 'favicon.svg');
    if (existsSync(src_svg)) {
        return {
            svg: src_svg,
            icons_dir: path.join(app_root, 'src', 'assets', 'icons'),
            // signage-manager keeps its favicon.ico in public/ — follow
            // whichever location the app already uses
            ico: existsSync(path.join(app_root, 'public', 'favicon.ico'))
                ? path.join(app_root, 'public', 'favicon.ico')
                : path.join(app_root, 'src', 'favicon.ico'),
        };
    }
    for (const public_svg of [
        path.join(app_root, 'public', 'favicon.svg'),
        path.join(app_root, 'public', 'assets', 'favicon.svg'),
    ]) {
        if (existsSync(public_svg)) {
            return {
                svg: public_svg,
                icons_dir: path.join(app_root, 'public', 'assets', 'icons'),
                ico: path.join(app_root, 'public', 'favicon.ico'),
            };
        }
    }
    return null;
}

async function generateAppIcons(app, paths) {
    const svg = readFileSync(paths.svg, 'utf8');
    const full_bleed = toFullBleedSvg(svg);

    mkdirSync(paths.icons_dir, { recursive: true });
    // Remove the stale icon set so only the sizes below remain
    for (const entry of readdirSync(paths.icons_dir)) {
        if (/^icon-.*\.png$/.test(entry)) {
            rmSync(path.join(paths.icons_dir, entry));
        }
    }

    for (const size of [192, 512]) {
        writeFileSync(
            path.join(paths.icons_dir, `icon-${size}x${size}.png`),
            await renderPng(svg, size),
        );
        writeFileSync(
            path.join(paths.icons_dir, `icon-maskable-${size}x${size}.png`),
            await renderPng(full_bleed, size),
        );
    }
    writeFileSync(
        path.join(paths.icons_dir, 'apple-touch-icon.png'),
        await renderPng(full_bleed, 180),
    );

    const ico_entries = [];
    for (const size of [16, 32, 48]) {
        ico_entries.push({ size, png: await renderPng(svg, size) });
    }
    writeFileSync(paths.ico, toIco(ico_entries));

    console.log(`Generated icons for ${app}`);
}

async function main() {
    const requested = process.argv.slice(2);
    const apps = requested.length
        ? requested
        : readdirSync(APPS_ROOT, { withFileTypes: true })
              .filter((entry) => entry.isDirectory())
              .map((entry) => entry.name);

    for (const app of apps) {
        const paths = findAppPaths(app);
        if (!paths) {
            if (requested.length) {
                throw new Error(`No favicon.svg found for app: ${app}`);
            }
            continue;
        }
        await generateAppIcons(app, paths);
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await main();
}
