import {
    copyFileSync,
    existsSync,
    mkdirSync,
    readFileSync,
    writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { toFullBleedSvg } from '../generate-favicons.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = path.resolve(__dirname, '..', '..');
const APPS_CONFIG_PATH = path.join(__dirname, 'apps.json');
const APPS_CONFIG = JSON.parse(readFileSync(APPS_CONFIG_PATH, 'utf8'));

export function getAppConfig(app_name) {
    const app_config = APPS_CONFIG[app_name];
    if (!app_config) {
        throw new Error(`Unsupported Capacitor app: ${app_name}`);
    }
    return app_config;
}

export function getAppRoot(app_name) {
    return path.join(WORKSPACE_ROOT, '.capacitor', app_name);
}

export function getArtifactsRoot(app_name) {
    return path.join(getAppRoot(app_name), 'artifacts');
}

export async function ensureWorkspace(app_name) {
    const app_config = getAppConfig(app_name);
    const app_root = getAppRoot(app_name);
    const resources_root = path.join(app_root, 'resources');

    mkdirSync(app_root, { recursive: true });
    mkdirSync(resources_root, { recursive: true });
    mkdirSync(getArtifactsRoot(app_name), { recursive: true });

    // Declare the Capacitor plugins the auth flow depends on so `cap sync`
    // builds their native code into the generated app. Without these, the
    // custom-scheme deep link reopens the app but `App.appUrlOpen` never fires
    // in JS, so the OAuth redirect (and code exchange) is never handled.
    // ManagedConfigurations exposes the MDM-pushed app config to JS.
    // StatusBar lets the app hide the OS status bar for fullscreen rendering.
    // IntuneMAM provides the Microsoft Intune enrolled account and MS token.
    const package_json = {
        name: `${app_name}-capacitor`,
        private: true,
        type: 'module',
        dependencies: {
            '@capacitor/core': '8.2.0',
            '@capacitor/app': '8.1.0',
            '@capacitor/browser': '8.0.3',
            '@capacitor/status-bar': '8.0.2',
            '@capawesome/capacitor-managed-configurations': '8.0.1',
            '@capgo/capacitor-intune': '8.1.2',
        },
    };
    writeFileSync(
        path.join(app_root, 'package.json'),
        `${JSON.stringify(package_json, null, 4)}\n`,
    );

    const config_source = [
        "import type { CapacitorConfig } from '@capacitor/cli';",
        '',
        'const config: CapacitorConfig = {',
        `    appId: '${app_config.bundle_id}',`,
        `    appName: '${app_config.display_name}',`,
        `    webDir: '../../${app_config.web_output_path}',`,
        '    android: {',
        "        path: 'android'",
        '    },',
        '    ios: {',
        "        path: 'ios'",
        '    },',
        '    plugins: {',
        '        CapacitorCookies: {',
        '            enabled: true',
        '        },',
        '        CapacitorHttp: {',
        '            enabled: true',
        '        }',
        '    },',
        '};',
        '',
        'export default config;',
        '',
    ].join('\n');
    writeFileSync(path.join(app_root, 'capacitor.config.ts'), config_source);

    const icon_source = path.join(WORKSPACE_ROOT, app_config.icon_source_path);
    if (!existsSync(icon_source)) {
        throw new Error(`Missing icon source for ${app_name}: ${icon_source}`);
    }
    const icon_path = path.join(resources_root, 'icon.png');
    const logo_path = path.join(resources_root, 'logo.png');
    if (icon_source.endsWith('.svg')) {
        const svg = readFileSync(icon_source, 'utf8');
        // App icons must bleed to the edges — iOS rejects transparency and
        // rounds the corners itself, so the favicon's pre-rounded corners
        // would otherwise show as a dark plate inside the icon.
        await rasteriseSvg(toFullBleedSvg(svg), icon_path);
        // The splash logo keeps the rounded favicon artwork.
        await rasteriseSvg(svg, logo_path);
    } else {
        copyFileSync(icon_source, icon_path);
        copyFileSync(icon_source, logo_path);
    }

    return { app_root, app_config };
}

// @capacitor/assets only accepts PNG sources, so render the app favicon SVG
// to the 1024px PNG it expects. sharp ships with @capacitor/assets.
async function rasteriseSvg(svg_source, png_path) {
    const { default: sharp } = await import('sharp');
    await sharp(Buffer.from(svg_source), { density: 1200 })
        .resize(1024, 1024, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(png_path);
}
