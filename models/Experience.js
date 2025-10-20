const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  location: { type: String, trim: true, default: '' },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  currentlyWorking: { type: Boolean, default: false },
  description: { type: String, trim: true, default: '' },
  responsibilities: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

ExperienceSchema.pre('validate', function (next) {
  if (this.currentlyWorking) this.endDate = null;
  next();
});

module.exports = mongoose.model('Experience', ExperienceSchema);

