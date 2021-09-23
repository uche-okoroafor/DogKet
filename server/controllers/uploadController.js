const aws = require("aws-sdk");
const multer = require("multer");
const multers3 = require("multer-s3");
const Profile = require("../models/ProfileModel");

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_BUCKET_REGION,
});

exports.setUpload = (req, res, next) => {
  console.log(req.file);
  const upload = multer({
    storage: multers3({
      s3,
      bucket: "breadsticks",
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldName });
      },
      key: function (req, file, cb) {
        cb(null, `image-${Date.now()}.jpeg`);
      },
    }),
  });
  const multipleUpload = upload.array("image-upload", 12);
  multipleUpload(req, re, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    await Profile.findByIdAndUpdate(req.params.id, {
      photos: req.file.location,
    });
    res.status(200).json({ data: req.file.location });
  });
};
