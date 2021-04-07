const router = require("express").Router();
const User = require("../models/user");

router.post("/api/user", ({ body }, res) => {
  User.create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/", (req, res) => {

});

module.exports = router;
