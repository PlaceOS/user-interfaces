import { spawnSync } from 'node:child_process';
import {
    copyFileSync,
    existsSync,
    mkdirSync,
    readFileSync,
    readdirSync,
    rmSync,
    writeFileSync,
} from 'node:fs';
import path from 'node:path';
import {
    ensureWorkspace,
    getAppConfig,
    getAppRoot,
    getArtifactsRoot,
} from './prepare.mjs';

const [action, app_name, platform] = process.argv.slice(2);
const SUPPORTED_PLATFORMS = new Set(['android', 'ios']);

main();

function main() {
    if (!action || !app_name || !platform) {
        throw new Error(
            'Usage: node tools/capacitor/run.mjs <sync|open|build|run> <app> <android|ios>',
        );
    }
    if (!SUPPORTED_PLATFORMS.has(platform)) {
        throw new Error(`Unsupported platform: ${platform}`);
    }

    ensureWorkspace(app_name);
    ensurePlatform(app_name, platform);
    generateAssets(app_name, platform);

    switch (action) {
        case 'sync':
            syncPlatform(app_name, platform);
            return;
        case 'open':
            runCapacitor(app_name, ['open', platform]);
            return;
        case 'build':
            if (platform === 'android') {
                buildAndroid(app_name);
                return;
            }
            buildIos(app_name);
            return;
        case 'run':
            if (platform === 'android') {
                runAndroid(app_name);
                return;
            }
            runIos(app_name);
            return;
        default:
            throw new Error(`Unsupported action: ${action}`);
    }
}

function ensurePlatform(app_name, platform) {
    const app_root = getAppRoot(app_name);
    const platform_root = path.join(app_root, platform);
    if (!existsSync(platform_root)) {
        runCapacitor(app_name, ['add', platform]);
    }
    if (platform === 'android') {
        patchAndroidManifest(app_root, getAppConfig(app_name).bundle_id);
        patchAndroidRestrictions(app_root);
    }
    if (platform === 'ios') {
        patchIosPlist(app_root, getAppConfig(app_name).bundle_id);
    }
}

function patchAndroidManifest(app_root, bundle_id) {
    const manifest_path = path.join(
        app_root,
        'android',
        'app',
        'src',
        'main',
        'AndroidManifest.xml',
    );
    if (!existsSync(manifest_path)) return;
    let manifest = readFileSync(manifest_path, 'utf8');
    if (manifest.includes('android.intent.action.VIEW')) return;
    const intent_filter = [
        '            <intent-filter>',
        '                <action android:name="android.intent.action.VIEW" />',
        '                <category android:name="android.intent.category.DEFAULT" />',
        '                <category android:name="android.intent.category.BROWSABLE" />',
        `                <data android:scheme="${bundle_id}" />`,
        '            </intent-filter>',
    ].join('\n');
    manifest = manifest.replace(
        '</activity>',
        `${intent_filter}\n        </activity>`,
    );
    writeFileSync(manifest_path, manifest);
    console.log('Patched AndroidManifest.xml with auth callback scheme');
}

// Declare the managed configuration keys MDM platforms can push to the app
// (https://docs.placeos.com/placeos/how-to/user-interfaces/native-booking-panel-app/)
// so EMM consoles can discover and present them. The values are read in JS
// via the ManagedConfigurations Capacitor plugin.
function patchAndroidRestrictions(app_root) {
    const main_root = path.join(app_root, 'android', 'app', 'src', 'main');
    const manifest_path = path.join(main_root, 'AndroidManifest.xml');
    if (!existsSync(manifest_path)) return;

    const xml_root = path.join(main_root, 'res', 'xml');
    mkdirSync(xml_root, { recursive: true });
    const restrictions = [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<restrictions xmlns:android="http://schemas.android.com/apk/res/android">',
        '    <restriction',
        '        android:key="domainName"',
        '        android:restrictionType="string"',
        '        android:title="@string/restriction_domain_name" />',
        '    <restriction',
        '        android:key="apiKey"',
        '        android:restrictionType="string"',
        '        android:title="@string/restriction_api_key" />',
        '    <restriction',
        '        android:key="SystemId"',
        '        android:restrictionType="string"',
        '        android:title="@string/restriction_system_id" />',
        '    <restriction',
        '        android:key="restartTime"',
        '        android:restrictionType="integer"',
        '        android:defaultValue="0"',
        '        android:title="@string/restriction_restart_time" />',
        '    <restriction',
        '        android:key="restartEnabled"',
        '        android:restrictionType="bool"',
        '        android:defaultValue="true"',
        '        android:title="@string/restriction_restart_enabled" />',
        '    <restriction',
        '        android:key="skipInteractiveSetup"',
        '        android:restrictionType="bool"',
        '        android:defaultValue="false"',
        '        android:title="@string/restriction_skip_interactive_setup" />',
        '</restrictions>',
        '',
    ].join('\n');
    writeFileSync(path.join(xml_root, 'app_restrictions.xml'), restrictions);

    const values_root = path.join(main_root, 'res', 'values');
    mkdirSync(values_root, { recursive: true });
    const strings = [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<resources>',
        '    <string name="restriction_domain_name">Server Domain</string>',
        '    <string name="restriction_api_key">API Key</string>',
        '    <string name="restriction_system_id">System ID</string>',
        '    <string name="restriction_restart_time">Restart Hour (0-23)</string>',
        '    <string name="restriction_restart_enabled">Daily Restart Enabled</string>',
        '    <string name="restriction_skip_interactive_setup">Skip Interactive Setup</string>',
        '</resources>',
        '',
    ].join('\n');
    writeFileSync(path.join(values_root, 'restriction_strings.xml'), strings);

    let manifest = readFileSync(manifest_path, 'utf8');
    if (manifest.includes('android.content.APP_RESTRICTIONS')) return;
    const meta_data = [
        '        <meta-data',
        '            android:name="android.content.APP_RESTRICTIONS"',
        '            android:resource="@xml/app_restrictions" />',
    ].join('\n');
    manifest = manifest.replace(
        '</application>',
        `${meta_data}\n    </application>`,
    );
    writeFileSync(manifest_path, manifest);
    console.log('Patched AndroidManifest.xml with managed config restrictions');
}

function patchIosPlist(app_root, bundle_id) {
    const plist_path = path.join(app_root, 'ios', 'App', 'App', 'Info.plist');
    if (!existsSync(plist_path)) return;
    let plist = readFileSync(plist_path, 'utf8');
    const entries = [];
    if (!plist.includes('CFBundleURLTypes')) {
        entries.push(
            [
                '\t<key>CFBundleURLTypes</key>',
                '\t<array>',
                '\t\t<dict>',
                '\t\t\t<key>CFBundleURLName</key>',
                `\t\t\t<string>${bundle_id}</string>`,
                '\t\t\t<key>CFBundleURLSchemes</key>',
                '\t\t\t<array>',
                `\t\t\t\t<string>${bundle_id}</string>`,
                '\t\t\t</array>',
                '\t\t</dict>',
                '\t</array>',
            ].join('\n'),
        );
    }
    if (!plist.includes('NSAppTransportSecurity')) {
        entries.push(
            [
                '\t<key>NSAppTransportSecurity</key>',
                '\t<dict>',
                '\t\t<key>NSAllowsArbitraryLoads</key>',
                '\t\t<true/>',
                '\t</dict>',
            ].join('\n'),
        );
    }
    if (!entries.length) return;
    plist = plist.replace(
        '</dict>\n</plist>',
        `${entries.join('\n')}\n</dict>\n</plist>`,
    );
    writeFileSync(plist_path, plist);
    console.log('Patched Info.plist with mobile auth settings');
}

function syncPlatform(app_name, platform) {
    runCapacitor(app_name, ['sync', platform]);
}

function generateAssets(app_name, platform) {
    const app_root = getAppRoot(app_name);
    const app_config = getAppConfig(app_name);
    const args = [
        '@capacitor/assets',
        'generate',
        '--assetPath',
        'resources',
        '--androidProject',
        'android',
        '--iosProject',
        'ios/App',
        '--iconBackgroundColor',
        app_config.icon_background_color,
        '--iconBackgroundColorDark',
        app_config.icon_background_color_dark,
        '--splashBackgroundColor',
        app_config.splash_background_color,
        '--splashBackgroundColorDark',
        app_config.splash_background_color_dark,
    ];
    if (platform === 'android') {
        args.push('--android');
    } else {
        args.push('--ios');
    }
    runCommand('npx', args, app_root);
}

function buildAndroid(app_name) {
    const app_root = getAppRoot(app_name);
    const gradlew = path.join(
        app_root,
        'android',
        process.platform === 'win32' ? 'gradlew.bat' : 'gradlew',
    );
    runCommand(gradlew, ['assembleDebug'], path.join(app_root, 'android'));

    const apk_path = path.join(
        app_root,
        'android',
        'app',
        'build',
        'outputs',
        'apk',
        'debug',
        'app-debug.apk',
    );
    if (!existsSync(apk_path)) {
        throw new Error(`Android artifact not found: ${apk_path}`);
    }

    const artifact_path = path.join(
        getArtifactsRoot(app_name),
        `${app_name}-android-debug.apk`,
    );
    mkdirSync(path.dirname(artifact_path), { recursive: true });
    copyFileSync(apk_path, artifact_path);
    console.log(artifact_path);
}

function buildIos(app_name) {
    if (process.platform !== 'darwin') {
        throw new Error('iOS builds require macOS');
    }

    const app_root = getAppRoot(app_name);
    const ios_root = path.join(app_root, 'ios');
    const derived_data_path = path.join(ios_root, 'build');
    const artifacts_root = getArtifactsRoot(app_name);

    rmSync(derived_data_path, { recursive: true, force: true });
    mkdirSync(artifacts_root, { recursive: true });

    const app_config = getAppConfig(app_name);
    const xcode_args = getIosBuildArgs(ios_root);
    runCommand(
        'xcodebuild',
        [
            ...xcode_args,
            '-configuration',
            'Debug',
            '-sdk',
            'iphonesimulator',
            '-destination',
            'generic/platform=iOS Simulator',
            '-derivedDataPath',
            'build',
            `PRODUCT_BUNDLE_IDENTIFIER=${app_config.bundle_id}`,
            'build',
        ],
        ios_root,
    );

    const products_root = path.join(
        derived_data_path,
        'Build',
        'Products',
        'Debug-iphonesimulator',
    );
    const app_bundle = readdirSync(products_root)
        .filter((entry) => entry.endsWith('.app'))
        .map((entry) => path.join(products_root, entry))[0];
    if (!app_bundle) {
        throw new Error(`iOS app bundle not found in ${products_root}`);
    }

    const zip_path = path.join(artifacts_root, `${app_name}-ios-simulator.zip`);
    rmSync(zip_path, { force: true });
    runCommand(
        '/usr/bin/zip',
        ['-qry', zip_path, path.basename(app_bundle)],
        products_root,
    );
    console.log(zip_path);
}

function runAndroid(app_name) {
    const app_root = getAppRoot(app_name);
    const app_config = getAppConfig(app_name);
    const gradlew = path.join(
        app_root,
        'android',
        process.platform === 'win32' ? 'gradlew.bat' : 'gradlew',
    );
    runCommand(gradlew, ['installDebug'], path.join(app_root, 'android'));

    const activity = `${app_config.bundle_id}/.MainActivity`;
    runCommand('adb', ['shell', 'am', 'start', '-n', activity]);
    console.log(`Launched ${app_config.display_name} on Android emulator`);
}

function runIos(app_name) {
    if (process.platform !== 'darwin') {
        throw new Error('iOS simulator requires macOS');
    }

    const app_root = getAppRoot(app_name);
    const app_config = getAppConfig(app_name);
    const ios_root = path.join(app_root, 'ios');
    const derived_data_path = path.join(ios_root, 'build');

    const xcode_args = getIosBuildArgs(ios_root);
    runCommand(
        'xcodebuild',
        [
            ...xcode_args,
            '-configuration',
            'Debug',
            '-sdk',
            'iphonesimulator',
            '-destination',
            'generic/platform=iOS Simulator',
            '-derivedDataPath',
            'build',
            `PRODUCT_BUNDLE_IDENTIFIER=${app_config.bundle_id}`,
            'build',
        ],
        ios_root,
    );

    const products_root = path.join(
        derived_data_path,
        'Build',
        'Products',
        'Debug-iphonesimulator',
    );
    const app_bundle = readdirSync(products_root)
        .filter((entry) => entry.endsWith('.app'))
        .map((entry) => path.join(products_root, entry))[0];
    if (!app_bundle) {
        throw new Error(`iOS app bundle not found in ${products_root}`);
    }

    const booted_device = getBootedSimulator();
    if (!booted_device) {
        throw new Error(
            'No booted iOS Simulator found. Open Simulator.app or run: xcrun simctl boot <device-udid>',
        );
    }

    runCommand('xcrun', ['simctl', 'install', booted_device, app_bundle]);
    runCommand('xcrun', [
        'simctl',
        'launch',
        booted_device,
        app_config.bundle_id,
    ]);
    console.log(
        `Launched ${app_config.display_name} on iOS Simulator (${booted_device})`,
    );
}

function getBootedSimulator() {
    const result = spawnSync(
        'xcrun',
        ['simctl', 'list', 'devices', 'booted', '-j'],
        {
            stdio: ['inherit', 'pipe', 'inherit'],
            env: process.env,
            shell: false,
        },
    );
    if (result.status !== 0) {
        throw new Error('Failed to list iOS Simulators');
    }
    const output = JSON.parse(result.stdout.toString());
    for (const runtime of Object.values(output.devices)) {
        for (const device of runtime) {
            if (device.state === 'Booted') {
                return device.udid;
            }
        }
    }
    return null;
}

function getIosBuildArgs(ios_root) {
    const workspace_path = path.join(ios_root, 'App', 'App.xcworkspace');
    if (existsSync(workspace_path)) {
        return ['-workspace', 'App/App.xcworkspace', '-scheme', 'App'];
    }

    const project_path = path.join(ios_root, 'App', 'App.xcodeproj');
    if (existsSync(project_path)) {
        return ['-project', 'App/App.xcodeproj', '-scheme', 'App'];
    }

    throw new Error(`Unable to find an Xcode project in ${ios_root}`);
}

function runCapacitor(app_name, cap_args) {
    const app_root = getAppRoot(app_name);
    runCommand('npx', ['cap', ...cap_args], app_root);
}

function runCommand(command, args, cwd) {
    const result = spawnSync(command, args, {
        cwd,
        stdio: 'inherit',
        env: process.env,
        shell: false,
    });
    if (result.signal) {
        throw new Error(
            `Command killed by signal ${result.signal}: ${command} ${args.join(' ')}`,
        );
    }
    if (result.status !== 0) {
        throw new Error(
            `Command failed (exit code ${result.status}): ${command} ${args.join(' ')}`,
        );
    }
}
