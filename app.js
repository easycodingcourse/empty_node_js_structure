const server = require('./src/config/server');
require('./src/config/socket')(server);


// mongoo connection
// require('./src/config/mongoose');


/* mysql connecton test / 
not essential / 
only for creating table without migration */
// require('./src/db/models');