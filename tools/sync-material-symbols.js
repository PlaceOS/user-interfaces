const {
    existsSync,
    mkdirSync,
    readFileSync,
    readdirSync,
    writeFileSync,
} = require('node:fs');
const { dirname, join } = require('node:path');
const subsetFont = require('subset-font');

const FONT_CONFIG = [
    { name: 'outlined', fill: 0 },
    { name: 'rounded', fill: 1 },
    { name: 'sharp', fill: 0 },
];
// Material Symbol ligatures use these characters. Layout closure retains the
// full icon repertoire while the fixed axes remove unused variable outlines.
const LIGATURE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz_0123456789';

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

async function main() {
    const package_dir = resolvePackageDir();
    const output_dir = join(__dirname, '..', 'shared', 'assets');

    mkdirSync(output_dir, { recursive: true });

    for (const { name, fill } of FONT_CONFIG) {
        const file_name = `material-symbols-${name}.woff2`;
        const source = join(package_dir, file_name);
        const target = join(output_dir, file_name);
        if (!existsSync(source)) {
            throw new Error(`Missing Material Symbols font: ${source}`);
        }
        const font = await subsetFont(
            readFileSync(source),
            LIGATURE_CHARACTERS,
            {
                targetFormat: 'woff2',
                variationAxes: {
                    FILL: fill,
                    GRAD: 0,
                    opsz: 24,
                    wght: 400,
                },
            },
        );
        writeFileSync(target, font);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
