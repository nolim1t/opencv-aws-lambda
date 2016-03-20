var opencv = require('opencv');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var util = require('util');
var async = require('async');

exports.handler = function(event, context) {
   console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
   var imgBucket = event.Records[0].s3.bucket.name;
   var imgKey = event.Records[0].s3.object.key;
   var typeMatch = imgKey.match(/\.([^.]*)$/);
   if (!typeMatch) {
      console.error('unable to infer image type for key ' + imgKey);
      return; 
   }
   var imageType = typeMatch[1];
   if (imageType != "jpg" && imageType != "png") {
      console.log('skipping non-image ' + imgKey);
      return;
   }
   // TODO: https://github.com/ranman/aws-lambda-twilio-signal/blob/master/index.js (Line 29)
   async.waterfall([
/*
      function download(next) {
         s3.getObject({Bucket: imgBucket, Key: imgKey}, next);
      },
*/
      function (err) {
         //TODO: Handle errors
         context.done();
      }
   ]);
};

