"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firebase = _interopRequireDefault(require("../db/firebase.connection"));
var _firestore = require("firebase/firestore");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProfessoresService = /*#__PURE__*/function () {
  function ProfessoresService() {
    _classCallCheck(this, ProfessoresService);
  }
  _createClass(ProfessoresService, null, [{
    key: "list",
    value: function list(request, response) {
      var q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "professores"));
      (0, _firestore.getDocs)(q).then(function (querySnapshot) {
        var professores = [];
        querySnapshot.forEach(function (doc) {
          var _id = doc.id;
          var _doc$data = doc.data(),
            nome = _doc$data.nome,
            curso = _doc$data.curso,
            titulacao = _doc$data.titulacao,
            ai = _doc$data.ai;
          professores.push({
            _id: _id,
            nome: nome,
            curso: curso,
            titulacao: titulacao,
            ai: ai
          });
        }); //querySnapshot
        response.json(professores);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }]);
  return ProfessoresService;
}();
var _default = ProfessoresService;
exports["default"] = _default;