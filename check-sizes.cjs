const fs = require('fs');
console.log(fs.statSync('./src/assets/logo.png').size);
console.log(fs.statSync('./src/assets/banner1.png').size);
console.log(fs.statSync('./src/assets/lamoda.png').size);
console.log(fs.statSync('./src/assets/wildberries.png').size);
