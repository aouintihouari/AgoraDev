import { Schema, model, models, Types, Document } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
}

export type IInteractionDoc = IInteraction & Document;
const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
    actionType: { type: String, enum: ["question", "answer"], required: true },
  },
  { timestamps: true }
);

const Interaction = models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
