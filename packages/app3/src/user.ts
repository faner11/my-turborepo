import z from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
});

export type UserType = z.infer<typeof userSchema>;

export const userObj = {
  aaa: 123,
}