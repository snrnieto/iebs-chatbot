import { createLLMService } from "usellm";

const llmService = createLLMService({
  openaiApiKey: process.env.OPENAI_API_KEY,
  actions: ["chat"],
});

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const { result } = await llmService.handle({ body, request });
    // const result = "Hola mundo";
    return new Response(result, { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: error?.status || 400 });
  }
}
