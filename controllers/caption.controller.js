const Caption = require("../models/caption.model");

exports.caption_create = (req, res, next) => {
  const caption = new Caption({
    title: req.body.title,
    author: req.body.author,
    likes: req.body.likes,
  });

  caption.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Caption created successfully!");
  });
};

exports.caption_details = (req, res) => {
  Caption.findById(req.params.id, (err, caption) => {
    if (err) return next(err);
    res.send(caption);
  });
};

exports.all_captions = (req, res) => {
  Caption.find({}, (err, caption) => {
    if (err) return next(err);
    res.json(caption);
  });
};

exports.caption_update = (req, res) => {
  Caption.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, caption) => {
      if (err) return next(err);
      res.send("Caption Udpated.");
    }
  );
};

exports.caption_delete = (req, res) => {
  Caption.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send("Caption Deleted");
  });
};
