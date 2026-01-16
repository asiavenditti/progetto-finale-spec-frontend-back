// THIS FILE IS AUTO-GENERATED from types.ts - DO NOT EDIT DIRECTLY
import z from 'zod';


// Schema generated from types.ts Car type
export const CarSchema = z.object({
  id: z.number().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  brand: z.string(),
  price: z.number(),
  year: z.number(),
  fuelType: z.string(),
  horsepower: z.number(),
  transmission: z.string(),
  seats: z.number(),
  description: z.string(),
  colors: z.array(z.string()),
  features: z.array(z.string()),
  image: z.string().optional(),
  rating: z.number().optional(),
}).strict(); // Add strict mode to reject extra properties


export function validateCar(data) {
  try {
    const result = CarSchema.parse(data);
    return { valid: true, data: result };
  } catch (error) {
    return { 
      valid: false, 
      errors: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    };
  }
}

// Export all validators as a map for dynamic usage
export const validators = {
  "car": validateCar
};

// Export readonly properties for each type to prevent updates
export const readonlyProperties = {
  "car": []
};
