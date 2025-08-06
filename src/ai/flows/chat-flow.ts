'use server';
/**
 * @fileOverview A conversational AI flow for a sleep and wellness coach.
 *
 * - chatWithCoach - A function that handles the conversation with the AI coach.
 * - ChatWithCoachInput - The input type for the chatWithCoach function.
 * - ChatWithCoachOutput - The return type for the chatWithCoach function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatWithCoachInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
});
export type ChatWithCoachInput = z.infer<typeof ChatWithCoachInputSchema>;

const ChatWithCoachOutputSchema = z.object({
  response: z.string().describe('The AI coach\'s response.'),
});
export type ChatWithCoachOutput = z.infer<typeof ChatWithCoachOutputSchema>;

export async function chatWithCoach(input: ChatWithCoachInput): Promise<ChatWithCoachOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatCoachPrompt',
  input: {schema: ChatWithCoachInputSchema},
  output: {schema: ChatWithCoachOutputSchema},
  system: `You are an empathetic and knowledgeable Sleep and Wellness Coach for an app called Lulla.
  Your goal is to provide a safe and supportive space for users to talk about their sleep, stress, and general well-being.
  - Be friendly, encouraging, and non-judgmental.
  - Provide practical, simple, and actionable advice.
  - If you're asked about something outside of sleep, stress, or well-being, gently guide the conversation back to these topics.
  - Keep your responses concise and easy to understand, like a real chat conversation. Avoid long paragraphs.
  - Use emojis where appropriate to convey warmth and friendliness.`,
  prompt: `{{#each history}}
- {{role}}: {{content}}
{{/each}}
- model:`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatWithCoachInputSchema,
    outputSchema: ChatWithCoachOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return { response: output!.response };
  }
);
