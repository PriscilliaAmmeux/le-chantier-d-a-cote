import { Schema, model } from "mongoose";

interface Service {
  name: string;
  content: string;
  organization: string;
}

const serviceSchema = new Schema<Service>({
  name: { type: String, required: true }, // Name of the service
  content: { type: String, required: true }, // Description of the service
  organization: { type: String, required: true }, // Organization offering the service
});

export default model<Service>("Service", serviceSchema);
