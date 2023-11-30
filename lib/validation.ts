import * as z from "zod";

export const taskSchema = z.object({
 task: z.string().min(10),
 status: z.boolean(),
});
