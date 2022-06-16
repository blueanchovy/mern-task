const express = require("express");
const router = express.Router();
const {
  getCandidates,
  setCandidate,
  updateCandidate,
  deleteCandidate,
} = require("../controllers/candidateController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCandidates).post(protect, setCandidate);

router
  .route("/:id")
  .put(protect, updateCandidate)
  .delete(protect, deleteCandidate);

module.exports = router;
