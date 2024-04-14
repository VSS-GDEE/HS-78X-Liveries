require('dotenv').config();
const fs = require('fs-extra');

const source = process.env.BUILD_DIR_NAME ? 'external/hs78X-liveries/' + process.env.BUILD_DIR_NAME : 'external/hs78X-liveries';
console.log('installManifest source is: ' + source);

const installManifest = fs.readJSONSync('./hs-78X-liveries/out/horizonsim-aircraft-787-10-livery-package/install.json');
installManifest.source = source;
fs.writeJSONSync('./hs-78X-liveries/out/horizonsim-aircraft-787-10-livery-package/install.json', installManifest);
