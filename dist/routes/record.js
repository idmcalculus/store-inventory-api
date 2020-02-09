"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _record = _interopRequireDefault(require("../controllers/record"));

var _secure = _interopRequireDefault(require("../middlewares/secure"));

var router = _express["default"].Router();

router.post('/records', _secure["default"].protect, _record["default"].createRecord);
router.get('/records', _secure["default"].protect, _record["default"].getAllRecords);
router.patch('/records/:id', _secure["default"].protect, _record["default"].updateSingleRecord);
router["delete"]('/records/:id', _secure["default"].protect, _record["default"].deleteSingleRecord);
module.exports = router;