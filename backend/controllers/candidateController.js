const asyncHandler = require("express-async-handler");

const Candidate = require("../models/candidateModel");

// @desc Get candidates
// @route GET /api/candidates
// @access Private
const getCandidates = asyncHandler(async (req, res) => {
  const candidates = await Candidate.find();

  res.status(200).json(candidates);
});

// @desc Set candidate
// @route POST /api/candidates
// @access Private
const setCandidate = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const candidate = await Candidate.create({
    name: req.body.name,
    address: req.body.address,
    dateOfBirth: req.body.dateOfBirth,
    state: req.body.state,
    age: req.body.age,
    pincode: req.body.pincode,
    email: req.body.email,
  });

  res.status(200).json(candidate);
});

// @desc Update candidate
// @route PUT /api/candidates/:id
// @access Private
const updateCandidate = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findById(req.params.id);

  if (!candidate) {
    res.status(400);
    throw new Error("Candidate not found");
  }

  const updatedCandidate = await Candidate.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedCandidate);
});

// @desc Delete candidate
// @route DELETE /api/candidates/:id
// @access Private
const deleteCandidate = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findById(req.params.id);

  if (!candidate) {
    res.status(400);
    throw new Error("Candidate not found");
  }

  await candidate.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCandidates,
  setCandidate,
  updateCandidate,
  deleteCandidate,
};
