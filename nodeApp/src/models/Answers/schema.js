import { Schema } from 'mongoose';
import Questions from '../Questions'

const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  title: {
    type: String,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  questionId: {
    type: ObjectId,
    ref: Questions
  },
  createdAt: {
    type: Date,
    required: [true]
  },
  createdBy: {
    type: ObjectId
  }
});

export default schema;