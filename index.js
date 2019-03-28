const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(helmet());
server.use(express.json());

server.listen(6000, () => console.log(`\n Server is live on PORT 6000 \n`));
