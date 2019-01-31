const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

exports.createToken = user => {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(14, "days")
      .unix()
  };
  console.log(config.SECRET_TOKEN)
  return jwt.encode(payload, config.SECRET_TOKEN);
};

