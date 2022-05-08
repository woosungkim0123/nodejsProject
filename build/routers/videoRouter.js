"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _videoController = require("../controllers/videoController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var videoRouter = _express["default"].Router();

videoRouter.get("/:id([0-9a-f]{24})", _videoController.watch);
videoRouter.route("/upload").get(_videoController.getUpload).post(_videoController.postUpload);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(_videoController.getEdit).post(_videoController.postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(_videoController.deleteVideo);
var _default = videoRouter;
exports["default"] = _default;