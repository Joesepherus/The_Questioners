const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const qaa = require("../models/QaA.js");
const todo = require("../models/todo.js");
const words = require("../models/words.js");
const action = require("../models/action.js");
const blog = require("../models/blog.js");
const Admin = require("../models/admin.js");

//                    ===== QaA =====

/* GET ALL todo BY ADMIN ID */
router.get("/qaa/admin/:id", function (req, res, next) {
  const adminId = req.params.id;
  qaa.find({ adminId }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET ALL todo BY ADMIN ID */
router.post("/qaa/admin/:id", function (req, res, next) {
  const adminId = req.params.id;
  const { query } = req.body;
  console.log("query: ", query);
  qaa.find(
    { adminId, ...query },
    null,
    { sort: { create_date: -1 } },
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

/* FIND latest qaa */
router.get("/qaa-latest", function (req, res, next) {
  qaa.findOne({}, {}, { sort: { create_date: -1 } }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET qaa by date */
router.post("/qaa-date/:date", function (req, res, next) {
  console.log("start");
  const { adminId } = req.body;
  let rangeStart = new Date(req.params.date);
  let rangeEnd = rangeStart;
  console.log(rangeStart);

  rangeEnd.setDate(rangeStart.getDate() - 365);
  console.log(rangeEnd);
  qaa.find({ adminId, create_date: { $gt: rangeEnd } }, function (
    err,
    products
  ) {
    if (err) console.log(err);
    res.json(products);
  });
});

/* SAVE qaa */
router.post("/qaa", function (req, res, next) {
  console.log("req.body: ", req.body);
  qaa.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE qaa */
router.put("/qaa/:id", function (req, res, next) {
  qaa.findOneAndUpdate({ id: req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE qaa */
router.delete("/qaa/:create_date", function (req, res, next) {
  qaa.findOneAndRemove(
    { create_date: req.params.create_date },
    req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

//                    ===== To-do =====

/* GET ALL todo BY ADMIN ID */
router.get("/todo/admin/:id", function (req, res, next) {
  const adminId = req.params.id;
  todo.find({ adminId }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET ALL todo BY ADMIN ID */
router.post("/todo/admin/:id", function (req, res, next) {
  const adminId = req.params.id;
  const { query } = req.body;
  console.log("query: ", query);
  todo.find(
    { adminId, ...query },
    null,
    { sort: { create_date: -1 } },
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

/* FIND latest todo */
router.get("/todo-latest", function (req, res, next) {
  todo.findOne({}, {}, { sort: { create_date: -1 } }, function (err, post) {
    if (err) return next(err);
    console.log(post);
    res.json(post);
  });
});

/* GET todo by date */
router.post("/todo-date/:date", function (req, res, next) {
  console.log("start");
  const { adminId } = req.body;
  console.log("adminId: ", adminId);
  let rangeStart = new Date(req.params.date);
  let rangeEnd = rangeStart;
  console.log(rangeStart);

  rangeEnd.setDate(rangeStart.getDate() - 365);
  console.log(rangeEnd);
  todo.find({ adminId, create_date: { $gt: rangeEnd } }, function (
    err,
    products
  ) {
    if (err) console.log(err);
    res.json(products);
  });
});

/* SAVE todo */
router.post("/todo", function (req, res, next) {
  req.body.state = "inprogress";
  todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE todo */
router.put("/todo/:id", function (req, res, next) {
  todo.findOneAndUpdate({ id: req.params.id }, req.body, function (err, post) {
    console.log(req.body, post);
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE todo */
router.delete("/todo/:create_date", function (req, res, next) {
  console.log(req.params.id);
  todo.findOneAndRemove({ create_date: req.params.create_date }, function (
    err,
    post
  ) {
    if (err) return next(post);
    res.json(post);
  });
});

// change tasks state to completed task
router.put("/todo/completed/:id", function (req, res, next) {
  todo.findOneAndUpdate({ id: req.params.id }, req.body, function (err, post) {
    console.log(post);
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to removed task
router.put("/todo/removed/:id", function (req, res, next) {
  todo.findOneAndUpdate({ id: req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// change tasks state to inprogress task
router.put("/todo/inprogress/:id", function (req, res, next) {
  todo.findOneAndUpdate({ id: req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//                    ===== Words =====

/* GET ALL words BY ADMIN ID */
router.get("/words/admin/:id", function (req, res, next) {
  const adminId = req.params.id;
  words.find({ adminId }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* FIND latest word */
router.get("/words-latest", function (req, res, next) {
  words.findOne({}, {}, { sort: { create_date: -1 } }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET words by date */
router.post("/words-date/:date", function (req, res, next) {
  console.log("start");
  const { adminId } = req.body;
  let rangeStart = new Date(req.params.date);
  let rangeEnd = rangeStart;
  console.log(rangeStart);
  rangeEnd.setDate(rangeStart.getDate() - 365);
  console.log(rangeEnd);
  words.find({ adminId, create_date: { $gt: rangeEnd } }, function (
    err,
    products
  ) {
    if (err) console.log(err);
    res.json(products);
  });
});

/* SAVE words */
router.post("/words", function (req, res, next) {
  words.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE words */
router.put("/words/:id", function (req, res, next) {
  words.findOneAndUpdate({ id: req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE words */
router.delete("/words/:create_date", function (req, res, next) {
  words.findOneAndRemove(
    { create_date: req.params.create_date },
    req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

//                    ===== Actions =====

/* FIND latest action */
router.get("/action-latest", function (req, res, next) {
  action.findOne({}, {}, { sort: { start: -1 } }, function (err, post) {
    if (err) console.log(err);
    res.json(post);
  });
});

/* GET actions by date */
router.post("/action-date/:date", function (req, res, next) {
  console.log("start");
  const { adminId } = req.body;

  let rangeStart = new Date(req.params.date);
  let rangeEnd = rangeStart;
  console.log(rangeStart);

  rangeEnd.setDate(rangeStart.getDate() - 365);
  console.log(rangeEnd);
  action.find({ adminId, start: { $gt: rangeEnd } }, function (err, products) {
    if (err) console.log(err);
    res.json(products);
  });
});

/* SAVE action */
router.post("/action", function (req, res, next) {
  action.create(req.body, function (err, post) {
    if (err) console.log(err);
    res.json(post);
  });
});

/* UPDATE action */
router.put("/action/:id", function (req, res, next) {
  action.findOneAndUpdate({ id: req.params.id }, req.body, function (
    err,
    post
  ) {
    if (err) console.log(err);
    res.json(post);
  });
});

//                    ===== Blog =====

/* GET ALL blogs BY ADMIN ID */
router.get("/blog/admin/:id", function (req, res, next) {
  const adminId = req.params.id;
  blog.find({ adminId }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* FIND latest blog */
router.get("/blog-latest", function (req, res, next) {
  blog.findOne({}, {}, { sort: { create_date: -1 } }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET blog by date */
router.post("/blog-date/:date", function (req, res, next) {
  const { adminId } = req.body;
  console.log("start");
  let rangeStart = new Date(req.params.date);
  let rangeEnd = rangeStart;
  console.log(rangeStart);

  rangeEnd.setDate(rangeStart.getDate() - 365);
  console.log(rangeEnd);
  blog.find({ adminId, create_date: { $gt: rangeEnd } }, function (
    err,
    products
  ) {
    if (err) console.log(err);
    res.json(products);
  });
});

/* SAVE blog */
router.post("/blog", function (req, res, next) {
  blog.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE blog */
router.put("/blog/:id", function (req, res, next) {
  blog.findOneAndUpdate({ id: req.params.id }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE blog */
router.delete("/blog/:create_date", function (req, res, next) {
  blog.findOneAndRemove(
    { create_date: req.params.create_date },
    req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

// ===== ADMIN =====

// add a new admin
router.post("/admin", function (req, res) {
  var admin = req.body.admin;
  console.log(admin);
  Admin.addAdmin(admin, function (err) {
    if (err) {
      res.send({
        message: "Admin s emailom " + admin.email + " už existuje.",
        status: 404,
      });
    } else {
      res.send({ message: "Úspešne si sa zaregistroval.", status: 200 });
    }
  });
});

// login admin
router.post("/admin/login", function (req, res) {
  var admin = req.body.admin;
  console.log(admin);
  Admin.loginAdmin(admin, function (err, admin_db) {
    if (err) {
      res.send({
        message: "Zadali ste nesprávne prihlasovacie údaje.",
        status: 404,
      });
    } else {
      res.send({
        admin_id: admin_db._id,
        admin: admin_db,
        message: "Prihlásenie prebehlo úspešne.",
        status: 200,
      });
    }
  });
});

// update a admin
router.put("/admin/:id", function (req, res) {
  var id = req.params.id;
  var admin = req.body.admin;
  console.log(id);
  console.log(admin);
  Admin.updateAdmin(id, admin, { new: true }, function (err, admin) {
    console.log("admin: ", admin);
    if (err) {
      res.send({ message: "Error", status: 200 });
    } else {
      res.send({
        message: "Dáta admina " + admin.name + " boli zmenené",
        status: 200,
        admin: admin,
      });
    }
  });
});

// change password of a admin
router.put("/admin/changePassword/:id", function (req, res) {
  var id = req.params.id;
  var admin = req.body.admin;
  console.log(id);
  console.log(admin);
  Admin.changePassword(id, admin, {}, function (err, db_admin) {
    console.log("admin: ", db_admin);
    if (err) {
      res.send({
        message: "Error nesprávne prihlasovacie údaje.",
        status: 200,
      });
    } else {
      res.send({
        message: "Heslo admina " + db_admin.name + " bolo úspešne zmenené.",
        status: 200,
      });
    }
  });
});

// remove admin permanently
router.delete("/admin/:id", function (req, res) {
  var id = req.params.id;
  Admin.deletePermanentlyAdmin(id, function (err, admin) {
    if (err) {
      res.send({
        message: "Nastala chyba pri vymávaní admina.",
      });
      throw err;
    } else {
      res.json({
        message: "Váš účet bol úspešne vymazaný.",
        status: 200,
      });
    }
  });
});

// --------------------------------------------------------------------------------------------

module.exports = router;
