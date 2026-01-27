import { model, models, Schema, Types, Document } from "mongoose";

export interface ITagQuestion {
  tag: Types.ObjectId;
  questionId: Types.ObjectId;
}

export type ITagQuestionDocument = ITagQuestion & Document;
const TagQuestionSchema = new Schema<ITagQuestion>(
  {
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
    questionId: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  { timestamps: true }
);

const TagQuestion = models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
