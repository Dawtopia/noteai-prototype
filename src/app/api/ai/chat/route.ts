import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // OpenRouter AI Configuration
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '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'
    const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'anthropic/claude-3.5-sonnet'
    const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1'

    // Prepare system prompt with context
    const systemPrompt = `Anda adalah AI Assistant yang terintegrasi dalam aplikasi NoteAI. 
    Tugas Anda adalah membantu pengguna dengan dokumen mereka.
    Berikan respons yang ringkas, helpful, dan dalam bahasa Indonesia.
    Jika pengguna bertanya tentang konten dokumen, gunakan konteks yang diberikan.
    Konten dokumen saat ini:
    ${context || 'Tidak ada konten dokumen yang tersedia.'}`

    // Call OpenRouter AI API
    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'NoteAI/prototype/sahrulmubarrok'
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('OpenRouter API Error:', errorData)
      throw new Error(`OpenRouter API Error: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse = data.choices?.[0]?.message?.content

    if (!aiResponse) {
      throw new Error('No response from OpenRouter API')
    }

    return NextResponse.json({ response: aiResponse })

  } catch (error) {
    console.error('AI Chat Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process AI request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}