import winston from 'winston';
import CloudWatchTransport from 'winston-aws-cloudwatch';

var NODE_ENV = process.env.NODE_ENV || 'development';

const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      colorize: true,
    })
  ]
});

var config = {
  logGroupName: 'my-log-group',
  logStreamName: NODE_ENV,
  createLogGroup: false,
  createLogStream: true,
  awsConfig: {
    accessKeyId: 'AKIA3AZXEBOBALZ5HI6D',
    secretAccessKey: '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',
    region: 'us-west-2'
  },
  formatLog: function (item) {
    return item.level + ': ' + item.message + ' ' + JSON.stringify(item.meta)
  }
}

if (NODE_ENV != 'development') logger.add(CloudWatchTransport, config);

logger.level = process.env.LOG_LEVEL || "silly";

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

export default logger;