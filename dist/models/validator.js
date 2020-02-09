"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _joi = _interopRequireDefault(require("@hapi/joi"));

/* eslint-disable no-mixed-spaces-and-tabs */
var validateRecord = function validateRecord(record) {
  var schema = _joi["default"].object().keys({
    recordId: _joi["default"].number(),
    productName: _joi["default"].string().min(3).max(50).required(),
    quantity: _joi["default"].number().required(),
    price: _joi["default"].number().required()
  });

  return schema.validate(record);
};

module.exports.validate = validateRecord;