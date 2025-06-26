import { Schema, model } from "mongoose";

interface TeamMember {
  name: string;
  content: string;
  organization: string;
}

const teamMemberSchema = new Schema<TeamMember>({
  name: { type: String, required: true }, // Name of the team member
  content: { type: String, required: true }, // Content or role of the team member
  organization: { type: String, required: true }, // Organization the team member belongs to
});

export default model<TeamMember>("TeamMember", teamMemberSchema);
