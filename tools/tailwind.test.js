const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const postcss = require('postcss');
const config = require('../postcss.config.json');

test('Tailwind utilities retain the app scope that overrides button defaults', async () => {
    const file = path.resolve(
        __dirname,
        '../apps/signage-manager/src/styles.css',
    );
    const plugins = Object.entries(config.plugins).map(([name, options]) =>
        require(name)(options),
    );
    const result = await postcss(plugins).process(readFileSync(file, 'utf8'), {
        from: file,
    });

    for (const [utility, property, value] of [
        ['rounded-md', 'border-radius', 'var(--radius-md)'],
        ['text-xl', 'font-size', 'var(--text-xl)'],
        ['h-10', 'height', 'calc(var(--spacing) * 10)'],
    ]) {
        let found = false;
        result.root.walkRules((rule) => {
            if (
                !rule.selector.startsWith('#placeos') ||
                !rule.selector.endsWith(` .${utility}`)
            ) {
                return;
            }
            rule.walkDecls(property, (declaration) => {
                if (declaration.value !== value) return;
                assert.ok(
                    !declaration.important,
                    'Inline styles must still win',
                );
                found = true;
            });
        });
        assert.ok(found, `Missing scoped utility: ${utility}`);
    }
});
