import { Schema, model } from "mongoose";

interface Article {
  name: string;
  image: string;
  title: string;
  description: string;
}

const articleSchema = new Schema<Article>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default model<Article>("Article", articleSchema);
