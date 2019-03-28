const express = require("express");
const helmet = require("helmet");
const server = express();

const PORT = process.env.PORT || 4000;

const usersRouter = require("./routes/usersRouter");

server.use(helmet());
server.use(express.json());

server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json(`Success!`);
});

server.listen(PORT, () => console.log(`\n Server is live on PORT ${PORT} \n`));
