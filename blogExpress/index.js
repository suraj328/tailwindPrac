
const express = require('express')
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 3000;




app.set('view engine', 'handlebars');
app.engine('handlebars', hbs());

app.use(express.static(path.join(__dirname,"static")));
app.use('/',require(path.join(__dirname,'./routes/blog')));




app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})