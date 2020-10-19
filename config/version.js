const { gitDescribeSync } = require('git-describe');
const { version, core_version } = require('../package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
const dayjs = require('dayjs');

let gitInfo = {};

try {
    gitInfo = gitDescribeSync({
        dirtyMark: false,
        dirtySemver: false
    });
} catch (e) {
    gitInfo.hash = 'Unknown';
}

gitInfo.version = version;
gitInfo.core_version = core_version;
gitInfo.time = dayjs().valueOf();


const file = resolve(__dirname, '..', 'libs', 'common', 'src', 'lib', 'version.ts');
writeFileSync(file,
`// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
export const VERSION = ${JSON.stringify(gitInfo, null, 4)};
/* tslint:enable */
`, { encoding: 'utf-8' });

console.log(`Wrote version info ${gitInfo.raw} to ${relative(resolve(__dirname, '..'), file)}`);
