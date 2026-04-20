const { copyFileSync, existsSync, mkdirSync, readdirSync } = require('node:fs');
const { dirname, join } = require('node:path');

const FONT_FILES = [
    'material-symbols-outlined.woff2',
    'material-symbols-rounded.woff2',
    'material-symbols-sharp.woff2',
];

function resolvePackageDir() {
    try {
        return dirname(require.resolve('material-symbols/package.json'));
    } catch {
        const node_modules_dir = join(__dirname, '..', 'node_modules');
        const entry = readdirSync(node_modules_dir).find((value) =>
            value.startsWith('.material-symbols-'),
        );
        if (!entry) {
            throw new Error('Unable to locate the material-symbols package');
        }
        return join(node_modules_dir, entry);
    }
}

const package_dir = resolvePackageDir();
const output_dir = join(__dirname, '..', 'shared', 'assets');

mkdirSync(output_dir, { recursive: true });

for (const file_name of FONT_FILES) {
    const source = join(package_dir, file_name);
    const target = join(output_dir, file_name);
    if (!existsSync(source)) {
        throw new Error(`Missing Material Symbols font: ${source}`);
    }
    copyFileSync(source, target);
}
