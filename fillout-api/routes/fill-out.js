var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/test", async function (req, res, next) {
  const apiKey =
    "sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912";
  const response = await fetch("https://api.fillout.com/v1/api/forms", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  let data = await response.json();
  res.json(data);
});

module.exports = router;
