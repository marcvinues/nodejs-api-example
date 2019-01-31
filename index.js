const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 3001;

const db = require("./models/");

const service = require("./services/index");
const api = require("./routes/usersRoutes");
const apiStores = require('./routes/storesRoutes');
const auth = require ('./routes/authorization');
const markets = require('./routes/marketsRoutes');
const product_types = require('./routes/productTypeRoutes');
const subcategories = require('./routes/subcategoriesRoutes');
const brands = require('./routes/brandsRouter');
const feed = require('./routes/feedRouter');

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use('/uploads', express.static(__dirname +'/uploads'));

app.use("/api", api);
app.use("/api", apiStores);
app.use("/api", auth);
app.use("/api", markets);
app.use("/api", product_types)
app.use("/api", subcategories);
app.use("/api", brands);
app.use("/api", feed);
app.get("/", (req, res) => {
  res.send(`API opent at port ${port}`);
});
app.disable('etag');

db.sequelize
  .sync()
  .then(function() {
    app.listen(port, () => {
      console.log(`API REST working!! on port: ${port}`);
    });
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });
