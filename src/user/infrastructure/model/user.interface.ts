import z from "zod";

const userSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be a string",
    required_error: "Name is required.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string({
      invalid_type_error: "password must be a string",
      required_error: "Password is required.",
    })
    .min(10, { message: "Must be 10 or more characters long" })
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "La contraseña debe contener al menos un carácter especial"
    ),
  description: z.string({
    invalid_type_error: "Name must be a string",
  }),
});

export function validateUserSchema(input) {
  return userSchema.safeParse(input);
}

export function validatePartialMovie(input) {
  return userSchema.partial().safeParse(input);
}
