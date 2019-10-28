const AWS = require('aws-sdk')
AWS.config.update({ region: 'eu-west-2' })

// create the s3 client
const s3 = new AWS.S3()

const param = {}
s3.listBuckets(param, (err, data) => {
  if (err) console.log(err, err.stack) // the birth of an error
  else     console.log(data)           // the joy of success
})