const fs = require('fs');
const merge = require('deepmerge');

const dir = './shared/assets/locale';

function generate_i18nFiles(lang_list) {
    let data = fs.readFileSync(`${dir}/en.json`);
    const json = JSON.parse(data);
    for (const lang of lang_list) {
        if (lang === 'en') continue;
        const file_json = {};
        try {
            data = fs.readFileSync(`${dir}/${lang}.json`);
            file_json = JSON.parse(data);
        } catch {}
        fs.writeFileSync(
            `${dir}/${lang}.json`,
            JSON.stringify(merge(json, file_json), undefined, 4)
        );
    }
}

function i18nFilesToCSV(outfile) {
    outfile = outfile || './locales.tsv';
    const files = fs.readdirSync(dir);
    const i18n_data = {};
    for (const file of files) {
        const data = fs.readFileSync(`${dir}/${file}`);
        const json = JSON.parse(data);
        i18n_data[file.replace('.json', '')] = json;
    }
    const lang_list = Object.keys(i18n_data);
    const keys = getKeyListFromObject(i18n_data.en);
    const i18n_rows = [];
    for (const key of keys) {
        const obj = { key };
        for (const lang of lang_list) {
            const value = getItemWithKeys(i18n_data[lang], key.split('.'));
            obj[lang] = lang !== 'en' && value === getItemWithKeys(i18n_data.en, key.split('.')) ? '' : value;
        }
        i18n_rows.push(obj);
    }
    const csv_data = jsonToCsv(i18n_rows);
    fs.writeFileSync(outfile, csv_data);
}

function CSVToi18nFiles(infile) {
    infile = infile || './locales.tsv';
    const files = fs.readdirSync(dir);
    const csv_data = fs.readFileSync(infile);
    const i18n_rows = csvToJson(csv_data);
    const lang_list = files.map(_ => _.replace('.json', ''));
    const i18n_data = {};
    lang_list.forEach(k => i18n_data[k] = {});
    for (const row of i18n_rows) {
        for (const lang of lang_list) {
            setItemWithKeys(i18n_data[lang], row.key.split('.'), row[lang] || row.en);
        }
    }
    for (const lang of lang_list) {
        fs.writeFileSync(
            `${dir}/${lang}.json`,
            JSON.stringify(i18n_data[lang], undefined, 4)
        );
    }
}

function getKeyListFromObject(map, prefix = '') {
    let list = [];
    for (const key in map) {
        if (map[key] instanceof Object) {
            const sublist = getKeyListFromObject(map[key], `${key}.`);
            list = list.concat(sublist);
        } else {
            list.push(`${prefix}${key}`);
        }
    }
    return list;
}

/**
 * Get item from the nested object
 * @param keys List of sub-keys to search for
 * @param map Object to search
 */
function getItemWithKeys(map, keys) {
    const key = keys[0];
    if (map && key in map) {
        return keys.length > 1
            ? getItemWithKeys(map[key] || {}, keys.slice(1))
            : map[key];
    }
    return null;
}


/**
 * Set item in the nested object
 * @param keys List of sub-keys to search for
 * @param map Object to store value
 */
function setItemWithKeys(map, keys, value) {
    const key = keys[0];
    if (keys.length > 1){
        if (!(key in map)) map[key] = {};
        setItemWithKeys(map, keys.slice(1), value);
    }
    else map[key] = value;
}

/**
 * Convert javascript array to CSV string
 * @param json Javascript array to convert
 */
function jsonToCsv(json, delimiter = '\t') {
    if (json instanceof Array && json.length > 0) {
        const keys = Object.keys(json[0]);
        const valid_keys = keys.filter((key) => key in json[0]);
        return `${valid_keys.join(delimiter)}\n${json
            .map((item) =>
                valid_keys.map((key) => JSON.stringify(item[key])).join(delimiter)
            )
            .join('\n')}`;
    }
    return '';
}

/**
 * Parse raw CSV data into a JSON object
 * @param csv CSV data to parse
 */
function csvToJson(csv, delimiter = ',') {
    const objPattern = new RegExp(
        '(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^\\,\\r\\n]*))',
        'gi'
    );
    let arrMatches = null;
    const arrData = [[]];
    while ((arrMatches = objPattern.exec(csv))) {
        if (arrMatches[1].length && arrMatches[1] !== ',') arrData.push([]);
        arrData[arrData.length - 1].push(
            arrMatches[2]
                ? arrMatches[2].replace(new RegExp('""', 'g'), '"')
                : arrMatches[3]
        );
    }
    const headers = arrData.splice(0, 1)[0];
    const elements = arrData.map((row) => {
        const element = {};
        for (let i = 0; i < row.length; i++) {
            const key = (headers[i] || '').split(' ').join('_').toLowerCase();
            try {
                element[key] = JSON.parse(row[i]);
            } catch (e) {
                element[key] = row[i] || '';
            }
            if (element[key] === 'TRUE' || element[key] === 'FALSE') 
                element[key] = element[key] === 'TRUE';
        }
        return element;
    });
    return elements;
}

switch(process.argv[2]) {
    case 'to-csv':
        i18nFilesToCSV(process.argv[3]);
        break;
    case 'from-csv':
        CSVToi18nFiles(process.argv[3]);
        break;
    default:
        generate_i18nFiles(process.argv[3] ? process.argv[3].split(',') : ['es', 'fr', 'pt']);
        break;
}
