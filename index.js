const express = require("express");
require('./services/passport');
const app = express();

require('./routes/googleAuthenticateRoutes')(app);

app.get("/", (req, res) => {
    res.send({hello: "world"})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});