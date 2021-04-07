const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('.routes/htmlroutes')(app);
require('.routes/apiroutes')(app);

app.listen(PORT, () => {
    console.log(`app listening on PORT: ${PORT}`);
})