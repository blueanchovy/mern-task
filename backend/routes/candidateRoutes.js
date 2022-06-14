const express = require("express");
const router = express.Router();
const {
  getCandidates,
  setCandidate,
  updateCandidate,
  deleteCandidate,
} = require("../controllers/candidateController");

router.route("/").get(getCandidates).post(setCandidate);

router.route("/:id").put(updateCandidate).delete(deleteCandidate);

module.exports = router;
