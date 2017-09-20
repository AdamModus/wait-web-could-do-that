const serve = require('serve');
const path = require('path');
const srcDir = path.resolve(__dirname, 'src');

const server = serve(srcDir, {
    port: 3000
});
