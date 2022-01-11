const version = process.env.VERSION;

console.log('Version found:', version);

if (version) {
    const fs = require('fs');
    const filename = './package.json';
    const data = fs.readFileSync(filename, 'utf8');
    const file = JSON.parse(data);
    
    const updated_file = { ...file, version };
    
    fs.writeFileSync(filename, JSON.stringify(updated_file, undefined, 4));
    console.log('Updated version in package.json to', version);
}
