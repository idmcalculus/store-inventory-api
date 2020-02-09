"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../models/db"));

var _identity = _interopRequireDefault(require("../models/identity"));

var _validator = require("../models/validator");

/* eslint-disable no-mixed-spaces-and-tabs */
require('../models/record')();

var RecordController =
/*#__PURE__*/
function () {
  function RecordController() {
    (0, _classCallCheck2["default"])(this, RecordController);
  }

  (0, _createClass2["default"])(RecordController, null, [{
    key: "createRecord",
    value: function () {
      var _createRecord = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _validate, error, _req$body, productName, quantity, price, product, recordId;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _validate = (0, _validator.validate)(req.body), error = _validate.error;

                if (!error) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  status: 'error',
                  error: error.details[0].message
                }));

              case 3:
                _req$body = req.body, productName = _req$body.productName, quantity = _req$body.quantity, price = _req$body.price;
                _context.next = 6;
                return _db["default"].query('SELECT * FROM records WHERE productName=$1', [productName]);

              case 6:
                product = _context.sent;

                if (!(product.rowCount > 0)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  status: 'error',
                  data: {
                    message: 'Product already exists'
                  }
                }));

              case 9:
                recordId = (0, _identity["default"])(3532);
                _context.next = 12;
                return _db["default"].query("INSERT INTO records (recordId, productName, quantity, price) \n\t\t\t\tVALUES ($1, $2, $3, $4)", [recordId, productName, quantity, price]);

              case 12:
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  recordId: recordId,
                  message: 'Record Successfully created'
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createRecord(_x, _x2) {
        return _createRecord.apply(this, arguments);
      }

      return createRecord;
    }()
  }, {
    key: "getAllRecords",
    value: function () {
      var _getAllRecords = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var records;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _db["default"].query('SELECT * FROM records');

              case 2:
                records = _context2.sent;
                res.status(200).json({
                  status: 'Success',
                  data: records.rows
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllRecords(_x3, _x4) {
        return _getAllRecords.apply(this, arguments);
      }

      return getAllRecords;
    }()
  }, {
    key: "updateSingleRecord",
    value: function () {
      var _updateSingleRecord = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var _validate2, error, recordId, productName, record;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _validate2 = (0, _validator.validate)(req.body), error = _validate2.error;

                if (!error) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  message: error.details[0].message
                }));

              case 3:
                recordId = req.params.id;
                productName = req.body.productName;
                _context3.next = 7;
                return _db["default"].query("UPDATE records\n              SET productName = $1\n              WHERE recordId = ".concat(recordId, " "), [productName]);

              case 7:
                record = _context3.sent;

                if (!(record.rowCount === 0)) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", res.status(404).json({
                  message: 'Category Not Found'
                }));

              case 10:
                return _context3.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'Record successfully updated'
                }));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateSingleRecord(_x5, _x6) {
        return _updateSingleRecord.apply(this, arguments);
      }

      return updateSingleRecord;
    }()
  }, {
    key: "deleteSingleRecord",
    value: function () {
      var _deleteSingleRecord = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res) {
        var recordId, record;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                recordId = req.params.id;
                _context4.next = 3;
                return _db["default"].query("DELETE FROM records WHERE recordId = ".concat(recordId));

              case 3:
                record = _context4.sent;

                if (!(record.rowCount === 0)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", res.status(404).json({
                  message: 'Record Not Found'
                }));

              case 6:
                return _context4.abrupt("return", res.status(202).json({
                  status: 'success',
                  message: 'Record successfully deleted'
                }));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteSingleRecord(_x7, _x8) {
        return _deleteSingleRecord.apply(this, arguments);
      }

      return deleteSingleRecord;
    }()
  }]);
  return RecordController;
}();

module.exports = RecordController;