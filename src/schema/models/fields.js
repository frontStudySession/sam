import * as z from 'zod';

const phoneRegex = /^[0-9]{11}$/;

export const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  mobileNumber: z.string().regex(phoneRegex).min(11),
  developer: z.string().min(1),
});
