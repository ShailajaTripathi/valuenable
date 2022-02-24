const express = require('express');

const router = express.Router();

const Dashboard = require("../models/dashboard.model")

const authenticate = require('../middlewares/authenticate')

router.get("/new", function(req, res) {
    return res.render("dashboard/new")
})

router.get("/", authenticate, async function(req, res) {
    const dashboards = await Dashboard.find().lean().exec();
    const user = req.user;

    delete user.password
    return res.send({dashboards, user})
})

module.exports = router;