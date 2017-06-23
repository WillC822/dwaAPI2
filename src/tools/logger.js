const winston = require('winston');
winston.emitErrs = true;
var logger = new winston.Logger();
var debugKey = process.env['DEBUG'];

/
if (debugKey == 'true') {
  logger.add(winston.tranports.Console, {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  });

} else {
  logger.add(winston.tranports.File, {
    level: 'debug',
    filename: '../debuglog.log',
    maxsize: 5242880, //5MB
    maxFiles: 5,
    timestamp:true,
    colorize: true });
  console.log('App version:' + process.env['Version'] )
}

module.exports = logger;
module.exports.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
}
