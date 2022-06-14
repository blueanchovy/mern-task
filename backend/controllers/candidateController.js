const asyncHandler = require("express-async-handler");

// @desc Get candidates
// @route GET /api/candidates
// @access Private
const getCandidates = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Candidates" });
});

// @desc Set candidate
// @route POST /api/candidates
// @access Private
const setCandidate = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Candidate" });
});

// @desc Update candidate
// @route PUT /api/candidates/:id
// @access Private
const updateCandidate = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Candidate ${req.params.id}` });
});

// @desc Delete candidate
// @route DELETE /api/candidates/:id
// @access Private
const deleteCandidate = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Candidate ${req.params.id}` });
});

module.exports = {
  getCandidates,
  setCandidate,
  updateCandidate,
  deleteCandidate,
};
