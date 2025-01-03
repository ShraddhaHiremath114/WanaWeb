const express = require('express');
const signupRoute = require("./routes/signup");
const loginRoute=require("./routes/login");
const sosRoute = require("./routes/sos");
const bodyParser = require("body-parser");
const createAdminAccount= require("./scripts/admin")
const cors = require("cors");
const app = express();
const port=3000;

app.use(bodyParser.json());
app.use(cors());
createAdminAccount();
app.use("/user",signupRoute);
app.use("/auth",loginRoute);
app.use("/sos", sosRoute);

app.listen(port,()=>{
    console.log(`listening on port ${port}` )
});
