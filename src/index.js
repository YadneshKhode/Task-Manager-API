const express = require("express");
require("./db/mongoose");
const taskRouter = require("./routers/task.routers");
const app = express();
const userRouter = require("./routers/user.routers");
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// *****************************************************

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});


// const pet = {
//   dog: "Tommy",
// };

// pet.toJSON = function () {
//   console.log("ToJSON was run");
//   this.dog = "Butcher";
//   return this;
// };
// const stringifiedVersion = JSON.stringify(pet);
// // const parsedVersion = JSON.parse(stringifiedVersion);
// console.log(stringifiedVersion);
// // console.log(parsedVersion);
