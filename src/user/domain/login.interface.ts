import z from 'zod'

const loginSchema = z.object({
  email: z.string({required_error: 'Password is required.'}).email({message: "Invalid email address"}),
  password: z.string({required_error: 'Password is required.'})
            .min(10, { message: "Must be 10 or more characters long" })
            .regex(/[!@#$%^&*(),.?":{}|<>]/, "La contraseña debe contener al menos un carácter especial")
})

export function validateLoginSchema (input) {
  return loginSchema.safeParse(input)
}