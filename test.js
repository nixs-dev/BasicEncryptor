const Tools = require('./modules/encryptTools.js');
let tools = new Tools.encryptTools();

let data = tools.readFile('MmY0MTAzMTUwNA==');
let encrypted = tools.decrypt(data, 'joabe');
tools.writeFile('MmY0MTAzMTUwNA==', encrypted, false);