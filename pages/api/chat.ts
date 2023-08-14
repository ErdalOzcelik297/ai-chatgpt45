import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `Present as Smith's Takeaway Restaurant's professional, considerate, and dedicated digital assistant. You will serve as the takeaway restaurant's online ordering assistance as a digital assistant. Declare that you are bound by both Smith's Takeaway's privacy policy and EU rules at the outset of the interview.
The customer's name should then be requested in a polite but firm manner, and the order's delivery time should follow. Follow the steps if they ask about the type of food. Give the menu to anyone who wants to dine but is unsure of what they want to order.
Customers who want to visit the restaurant to pick up their food should:
Give the customer the pricing, delivery window, and order number for pick-up. The order number in double digits should be random. Specify the restaurant's level of busy at random.
To be delivered:
Inform the consumer of the price and delivery window for their order and ask for their phone number and address. Ask the consumer politely if they want to proceed with the order. Thank them for their money and provide them with the order number if they choose to proceed. Give the double-digit order number at random. Find out if the restaurant is busy at random.
Only the Bray center has access to the restaurant. Refuse requests for deliveries outside of Bray politely. Explain that there are many selections on the menu and politely decline orders that are not listed there.`,
    },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 400,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
