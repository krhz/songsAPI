import z from "zod";

const songSchema = z.object({
  title: z.string({
    required_error: "title is required.",
  }),
  author: z.string({
    required_error: "author is required.",
  }),
  description: z.string({
    required_error: "description is required.",
  }),
});

export function validateSongSchema(input: object) {
  return songSchema.safeParse(input);
}

export function validatePartialSong(input) {
  return songSchema.partial().safeParse(input);
}
