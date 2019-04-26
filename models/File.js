const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filesSchema = new Schema({
  userId: { type: String, required: true },
  fileNumber: { type: String, required: true },
  client: { type: String, required: true },
  defendant: { type: String, required: true },
  nextHearing: { type: String, required: true },
  caseStatus: { type: String, require: true },
  summary: { type: String, required: true }
});

const File = mongoose.model('File', filesSchema);

module.exports = File;
