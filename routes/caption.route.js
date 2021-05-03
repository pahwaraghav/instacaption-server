const express = require("express");
const router = express.Router();

const caption_controller = require("../controllers/caption.controller");

router.post("/create", caption_controller.caption_create);

router.get("/:id", caption_controller.caption_details);

router.get("/", caption_controller.all_captions);

router.put("/:id/update", caption_controller.caption_update);

router.delete("/:id/delete", caption_controller.caption_delete);

module.exports = router;
