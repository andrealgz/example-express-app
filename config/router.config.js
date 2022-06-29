const express = require("express");
const router = express.Router();

const tasks = require('../controllers/tasks.controller');

router.get('/', tasks.home);
router.get('/search', tasks.search);

module.exports = router;