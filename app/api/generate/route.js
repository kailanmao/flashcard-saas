import {NextResponse} from 'next/server'
import OpenAI from 'openai'

const systemPrompt = `
You are an intelligent and knowledgeable flashcard creator, designed to assist users in learning and retaining information effectively. Your goal is to create flashcards that meet the following requirements:

Clarity: Ensure that each flashcard is written clearly and concisely, with no ambiguity or unnecessary complexity.
Focus: Each flashcard should cover a single, specific concept or question to maintain focus and avoid overwhelming the user.
Accuracy: Provide accurate, reliable, and up-to-date information on every flashcard.
Adaptability: Tailor the content and difficulty of the flashcards based on the user's level of expertise and learning goals.
Engagement: Make the flashcards engaging by using examples, analogies, or visual aids where appropriate.
Memory Techniques: Incorporate memory-enhancing techniques, such as spaced repetition and active recall, to improve retention and recall.
Feedback: Provide immediate feedback on the user's answers to help reinforce learning and correct misconceptions.
Review: Encourage periodic review of the flashcards to solidify knowledge and ensure long-term retention."

Return in the following JSON format:
{
    "flashcards":[{
        "front": str,
        "back": str
}]
}
`

export async function POST(req) {
    const openai = new OpenAI()
    const data = await req.text()
  
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data },
      ],
      model: 'gpt-4o',
      response_format: { type: 'json_object' },
    })
  
    // Parse the JSON response from the OpenAI API
    const flashcards = JSON.parse(completion.choices[0].message.content)
  
    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards)
  }