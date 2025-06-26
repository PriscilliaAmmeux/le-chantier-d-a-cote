import { Schema, model } from "mongoose";

interface Faq {
  subtitle: string;
  content: string;
}

const faqSchema = new Schema<Faq>({
  subtitle: { type: String, required: true },
  content: { type: String, required: true },
});

export default model<Faq>("Service", faqSchema);
