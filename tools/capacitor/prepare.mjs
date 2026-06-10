import {
    copyFileSync,
    existsSync,
    mkdirSync,
    readFileSync,
    writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

export function ensureWorkspace(app_name) {
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
    const package_json = {
        name: `${app_name}-capacitor`,
        private: true,
        type: 'module',
        dependencies: {
            '@capacitor/core': '8.2.0',
            '@capacitor/app': '8.1.0',
            '@capacitor/browser': '8.0.3',
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
    copyFileSync(icon_source, path.join(resources_root, 'icon.png'));
    copyFileSync(icon_source, path.join(resources_root, 'logo.png'));

    return { app_root, app_config };
}
