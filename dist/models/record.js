"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = _interopRequireDefault(require("./db"));

module.exports = function () {
  var recordsTable =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _db["default"].query("CREATE TABLE IF NOT EXISTS records (\n            recordId serial PRIMARY KEY,\n            productName VARCHAR (50) NOT NULL,\n            quantity INTEGER NOT NULL,\n            price INTEGER NOT NULL )");

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function recordsTable() {
      return _ref.apply(this, arguments);
    };
  }();

  recordsTable();
};