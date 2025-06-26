import { Schema, model } from "mongoose";

interface Testimonial {
  name: string;
  content: string;
}

const testimonialSchema = new Schema<Testimonial>({
  name: { type: String, required: true }, // Name of the person giving the testimonial
  content: { type: String, required: true }, // Content of the testimonial
});

export default model<Testimonial>("Testimonial", testimonialSchema);
