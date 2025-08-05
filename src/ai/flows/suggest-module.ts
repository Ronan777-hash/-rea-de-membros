'use server';

/**
 * @fileOverview Provides a module suggestion based on user's usage patterns and goals.
 *
 * - suggestModule - A function that suggests a module to the user.
 * - SuggestModuleInput - The input type for the suggestModule function.
 * - SuggestModuleOutput - The return type for the suggestModule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestModuleInputSchema = z.object({
  usagePatterns: z
    .string()
    .describe("The user's recent usage patterns, such as modules they've accessed or content they've viewed."),
  goals: z.string().describe("The user's current goals, such as improving sleep quality or reducing stress."),
});
export type SuggestModuleInput = z.infer<typeof SuggestModuleInputSchema>;

const SuggestModuleOutputSchema = z.object({
  moduleName: z.string().describe('The name of the suggested module.'),
  reason: z.string().describe('The reason for suggesting this module based on the user input.'),
});
export type SuggestModuleOutput = z.infer<typeof SuggestModuleOutputSchema>;

export async function suggestModule(input: SuggestModuleInput): Promise<SuggestModuleOutput> {
  return suggestModuleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestModulePrompt',
  input: {schema: SuggestModuleInputSchema},
  output: {schema: SuggestModuleOutputSchema},
  prompt: `You are an AI assistant designed to suggest modules to users based on their usage patterns and goals.

  Usage Patterns: {{{usagePatterns}}}
  Goals: {{{goals}}}

  Based on the user's usage patterns and goals, suggest a module that would be most relevant and helpful to them.
  Explain the reason for your suggestion.
  Make sure to include the module name and the reason for the suggestion in your response.`,
});

const suggestModuleFlow = ai.defineFlow(
  {
    name: 'suggestModuleFlow',
    inputSchema: SuggestModuleInputSchema,
    outputSchema: SuggestModuleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
