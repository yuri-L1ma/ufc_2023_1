"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _professor = _interopRequireDefault(require("../services/professor.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var express = require('express');
var router = _express["default"].Router();
/* GET users listing. */
router.get('/listar', function (req, res, next) {
  _professor["default"].list(req, res);
});
var _default = router; //module.exports = router;
exports["default"] = _default;